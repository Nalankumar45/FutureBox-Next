import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { badges, insertBadgeSchema } from "@/db/schema";

export async function GET() {
  try {
    const results = await db.select().from(badges);
    return NextResponse.json(results);
  } catch (error) {
    console.error("Error fetching badges:", error);
    return NextResponse.json({ error: "Failed to fetch badges" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = insertBadgeSchema.parse(body);

    const [newBadge] = await db.insert(badges).values(validated).returning();
    return NextResponse.json(newBadge, { status: 201 });
  } catch (error) {
    console.error("Error creating badge:", error);
    return NextResponse.json({ error: "Failed to create badge" }, { status: 500 });
  }
}
