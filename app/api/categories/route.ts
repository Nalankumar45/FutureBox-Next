import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { categories, insertCategorySchema } from "@/db/schema";

export async function GET() {
  try {
    const results = await db.select().from(categories);
    return NextResponse.json(results);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = insertCategorySchema.parse(body);

    const [newCategory] = await db.insert(categories).values(validated).returning();
    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json({ error: "Failed to create category" }, { status: 500 });
  }
}
