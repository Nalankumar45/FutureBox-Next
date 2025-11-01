import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { ideas, users, insertIdeaSchema } from "@/db/schema";
import { eq, desc, sql, or, ilike } from "drizzle-orm";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const search = searchParams.get("search") || "";
    const category = searchParams.get("category") || "all";

    let query = db
      .select({
        id: ideas.id,
        title: ideas.title,
        description: ideas.description,
        category: ideas.category,
        tags: ideas.tags,
        status: ideas.status,
        upvotes: ideas.upvotes,
        author: {
          id: users.id,
          name: users.name,
        },
        scores: sql<{feasibility: number | null, impact: number | null, cost: number | null}>`
          json_build_object(
            'feasibility', ${ideas.feasibilityScore},
            'impact', ${ideas.impactScore},
            'cost', ${ideas.costScore}
          )
        `,
        createdAt: ideas.createdAt,
      })
      .from(ideas)
      .leftJoin(users, eq(ideas.authorId, users.id))
      .orderBy(desc(ideas.createdAt));

    const results = await query;
    
    let filteredResults = results;
    
    if (search) {
      filteredResults = filteredResults.filter(
        (idea) =>
          idea.title.toLowerCase().includes(search.toLowerCase()) ||
          idea.description.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    if (category !== "all") {
      filteredResults = filteredResults.filter(
        (idea) => idea.category.toLowerCase() === category.toLowerCase()
      );
    }

    const ideasWithCommentCount = await Promise.all(
      filteredResults.map(async (idea) => {
        const [{ count }] = await db
          .select({ count: sql<number>`count(*)` })
          .from(sql`comments`)
          .where(sql`idea_id = ${idea.id}`);
        
        return {
          ...idea,
          comments: Number(count),
        };
      })
    );

    return NextResponse.json(ideasWithCommentCount);
  } catch (error) {
    console.error("Error fetching ideas:", error);
    return NextResponse.json({ error: "Failed to fetch ideas" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = insertIdeaSchema.parse(body);

    const [newIdea] = await db.insert(ideas).values(validated).returning();

    const [ideaWithAuthor] = await db
      .select({
        id: ideas.id,
        title: ideas.title,
        description: ideas.description,
        category: ideas.category,
        tags: ideas.tags,
        status: ideas.status,
        upvotes: ideas.upvotes,
        author: {
          id: users.id,
          name: users.name,
        },
        scores: sql<{feasibility: number | null, impact: number | null, cost: number | null}>`
          json_build_object(
            'feasibility', ${ideas.feasibilityScore},
            'impact', ${ideas.impactScore},
            'cost', ${ideas.costScore}
          )
        `,
        createdAt: ideas.createdAt,
        comments: sql<number>`0`,
      })
      .from(ideas)
      .leftJoin(users, eq(ideas.authorId, users.id))
      .where(eq(ideas.id, newIdea.id));

    return NextResponse.json(ideaWithAuthor, { status: 201 });
  } catch (error) {
    console.error("Error creating idea:", error);
    return NextResponse.json({ error: "Failed to create idea" }, { status: 500 });
  }
}
