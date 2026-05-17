import { NextResponse } from "next/server";
import db from "@/lib/db";

export const runtime = "nodejs";

function asString(v: unknown) {
  return typeof v === "string" ? v : "";
}

export async function GET() {
  try {
    const rows = db
      .prepare(
        "SELECT id, name, email, level, message, status, created_at FROM leads ORDER BY id DESC"
      )
      .all();

    return NextResponse.json({ ok: true, leads: rows });
  } catch (e: any) {
    console.error("GET /api/leads error:", e);
    return NextResponse.json(
      { ok: false, error: e?.message || "Server error" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";

    let name = "";
    let email = "";
    let level = "";
    let message = "";

    if (contentType.includes("application/json")) {
      const body = await req.json();
      name = asString(body?.name);
      email = asString(body?.email);
      level = asString(body?.level);
      message = asString(body?.message);
    } else {
      const form = await req.formData();
      name = asString(form.get("name"));
      email = asString(form.get("email"));
      level = asString(form.get("level"));
      message = asString(form.get("message"));
    }

    if (!name || !email) {
      return NextResponse.json(
        { ok: false, error: "Name and email are required" },
        { status: 400 }
      );
    }

    const stmt = db.prepare(
      "INSERT INTO leads (name, email, level, message) VALUES (?, ?, ?, ?)"
    );
    const result = stmt.run(name, email, level, message);

    return NextResponse.json({ ok: true, id: result.lastInsertRowid });
  } catch (e: any) {
    console.error("POST /api/leads error:", e);
    return NextResponse.json(
      { ok: false, error: e?.message || "Server error" },
      { status: 500 }
    );
  }
}
