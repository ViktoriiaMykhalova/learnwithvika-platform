import { NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "nodejs";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const audio = formData.get("audio");

    if (!audio || !(audio instanceof File)) {
      return NextResponse.json(
        { ok: false, error: "Audio file is required" },
        { status: 400 }
      );
    }

    const transcription = await client.audio.transcriptions.create({
      file: audio,
      model: "gpt-4o-mini-transcribe",
    });

    const transcript = transcription.text;

    const prompt = `
You are an experienced English examiner and CEFR assessor.

Speaking task:
Do you think social media has a positive or negative influence on people’s lives?

Student transcript:
${transcript}

Evaluate the answer and provide:
1. Estimated CEFR level
2. Overall score from 0 to 100
3. Fluency score from 1 to 10
4. Grammar score from 1 to 10
5. Vocabulary score from 1 to 10
6. Pronunciation score from 1 to 10
7. Strengths
8. Main mistakes/problems
9. What the student should improve next
10. Corrected examples of mistakes
11. Short motivational feedback

Be supportive, realistic and professional.
`;

const response = await client.responses.create({
  model: "gpt-4o-mini",
  input: prompt,
});

    return NextResponse.json({
      ok: true,
      transcript,
      feedback: response.output_text,
    });
  } catch (error) {
    console.error("AI speaking check error:", error);

    return NextResponse.json(
      { ok: false, error: "AI speaking check failed" },
      { status: 500 }
    );
  }
}