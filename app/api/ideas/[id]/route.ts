import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { ideas } from "@/db/schema";
import { eq, sql } from "drizzle-orm";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const ideaId = parseInt(id);

    const [updated] = await db
      .update(ideas)
      .set({ upvotes: sql`${ideas.upvotes} + 1` })
      .where(eq(ideas.id, ideaId))
      .returning();

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Error upvoting idea:", error);
    return NextResponse.json({ error: "Failed to upvote idea" }, { status: 500 });
  }
}
