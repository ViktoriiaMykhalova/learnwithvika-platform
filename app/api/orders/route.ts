import { NextResponse } from "next/server";
import db from "@/lib/db";

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

    db.prepare(`
      INSERT INTO orders (name, email, product, price)
      VALUES (?, ?, ?, ?)
    `).run(name, email, product, price);

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
    const orders = db.prepare("SELECT * FROM orders ORDER BY id DESC").all();
    return NextResponse.json({ ok: true, orders });
  } catch (error) {
    console.error("GET /api/orders error:", error);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}