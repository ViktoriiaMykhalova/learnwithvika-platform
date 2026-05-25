import { NextResponse } from "next/server";
import sql from "@/lib/db";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, product, price } = body;

    if (!name || !email || !product || !price) {
      return NextResponse.json(
        { ok: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    await sql`
      INSERT INTO orders (name, email, product, price)
      VALUES (${name}, ${email}, ${product}, ${price})
    `;

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("POST /api/orders error:", error);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const orders = await sql`SELECT * FROM orders ORDER BY id DESC`;
    return NextResponse.json({ ok: true, orders });
  } catch (error) {
    console.error("GET /api/orders error:", error);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}