import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { comments, users, insertCommentSchema } from "@/db/schema";
import { eq, desc, sql } from "drizzle-orm";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const ideaId = searchParams.get("ideaId");

    if (!ideaId) {
      return NextResponse.json({ error: "ideaId is required" }, { status: 400 });
    }

    const results = await db
      .select({
        id: comments.id,
        content: comments.content,
        author: {
          name: users.name,
          avatar: sql<string | null>`NULL`,
        },
        upvotes: comments.upvotes,
        timestamp: sql<string>`
          CASE 
            WHEN EXTRACT(EPOCH FROM (NOW() - ${comments.createdAt})) < 3600 THEN 
              ROUND(EXTRACT(EPOCH FROM (NOW() - ${comments.createdAt})) / 60) || ' minutes ago'
            WHEN EXTRACT(EPOCH FROM (NOW() - ${comments.createdAt})) < 86400 THEN 
              ROUND(EXTRACT(EPOCH FROM (NOW() - ${comments.createdAt})) / 3600) || ' hours ago'
            ELSE 
              ROUND(EXTRACT(EPOCH FROM (NOW() - ${comments.createdAt})) / 86400) || ' days ago'
          END
        `,
        createdAt: comments.createdAt,
      })
      .from(comments)
      .leftJoin(users, eq(comments.authorId, users.id))
      .where(eq(comments.ideaId, parseInt(ideaId)))
      .orderBy(desc(comments.createdAt));

    return NextResponse.json(results);
  } catch (error) {
    console.error("Error fetching comments:", error);
    return NextResponse.json({ error: "Failed to fetch comments" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = insertCommentSchema.parse(body);

    const [newComment] = await db.insert(comments).values(validated).returning();

    const [commentWithAuthor] = await db
      .select({
        id: comments.id,
        content: comments.content,
        author: {
          name: users.name,
          avatar: sql<string | null>`NULL`,
        },
        upvotes: comments.upvotes,
        timestamp: sql<string>`'Just now'`,
        createdAt: comments.createdAt,
      })
      .from(comments)
      .leftJoin(users, eq(comments.authorId, users.id))
      .where(eq(comments.id, newComment.id));

    return NextResponse.json(commentWithAuthor, { status: 201 });
  } catch (error) {
    console.error("Error creating comment:", error);
    return NextResponse.json({ error: "Failed to create comment" }, { status: 500 });
  }
}
