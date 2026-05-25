import { NextResponse } from "next/server";
import sql from "@/lib/db";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

function asString(v: unknown) {
  return typeof v === "string" ? v : "";
}

export async function GET() {
  try {
    const rows = await sql`
      SELECT id, name, email, level, message, status, created_at
      FROM leads ORDER BY id DESC
    `;
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

    let name = "", email = "", level = "", message = "";

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

    const result = await sql`
      INSERT INTO leads (name, email, level, message)
      VALUES (${name}, ${email}, ${level}, ${message})
      RETURNING id
    `;

    // Отправка email уведомления
    await resend.emails.send({
      from: "LearnWithVika <onboarding@resend.dev>",
      to: process.env.NOTIFY_EMAIL!,
      subject: "Новая заявка с сайта LearnWithVika",
      html: `
        <h2>Новая заявка!</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Уровень:</strong> ${level || "не указан"}</p>
        <p><strong>Сообщение:</strong> ${message || "не указано"}</p>
      `,
    });

    return NextResponse.json({ ok: true, id: result[0].id });
  } catch (e: any) {
    console.error("POST /api/leads error:", e);
    return NextResponse.json(
      { ok: false, error: e?.message || "Server error" },
      { status: 500 }
    );
  }
}