import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { badges } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const badgeId = parseInt(id);
    const body = await request.json();

    const [updated] = await db
      .update(badges)
      .set(body)
      .where(eq(badges.id, badgeId))
      .returning();

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Error updating badge:", error);
    return NextResponse.json({ error: "Failed to update badge" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const badgeId = parseInt(id);

    await db.delete(badges).where(eq(badges.id, badgeId));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting badge:", error);
    return NextResponse.json({ error: "Failed to delete badge" }, { status: 500 });
  }
}
