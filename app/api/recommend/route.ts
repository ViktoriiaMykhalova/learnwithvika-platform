import { NextResponse } from "next/server";
import db from "@/lib/db";

type Lang = "en" | "ru" | "ua";

type RecommendationResult = {
  recommendedFormat: string;
  suggestedIntensity: string;
  bestProduct: string;
  focusPlan: string;
  whyThisSuitsYou: string;
};

function buildRecommendation(
  targetLanguage: string,
  level: string,
  goal: string,
  mainDifficulty: string,
  hoursPerWeek: string,
  preferredFormat: string,
  preferredLessonStyle: string,
  lang: Lang
): RecommendationResult {
  let recommendedFormat = "";
  let suggestedIntensity = "";
  let bestProduct = "";
  let focusPlan = "";

  const levelLower = level.toLowerCase();
  const goalLower = goal.toLowerCase();
  const languageLower = targetLanguage.toLowerCase();
  const formatLower = preferredFormat.toLowerCase();
  const difficultyLower = mainDifficulty.toLowerCase();

  if (hoursPerWeek === "1-2") {
    suggestedIntensity =
      lang === "ru"
        ? "1–2 раза в неделю"
        : lang === "ua"
        ? "1–2 рази на тиждень"
        : "1–2 times a week";
  } else if (hoursPerWeek === "3-4") {
    suggestedIntensity =
      lang === "ru"
        ? "2–3 раза в неделю"
        : lang === "ua"
        ? "2–3 рази на тиждень"
        : "2–3 times a week";
  } else {
    suggestedIntensity =
      lang === "ru"
        ? "3 раза в неделю + самостоятельная практика"
        : lang === "ua"
        ? "3 рази на тиждень + самостійна практика"
        : "3 times a week + self-study";
  }

  if (formatLower.includes("individual")) {
    recommendedFormat =
      lang === "ru"
        ? "Индивидуальные занятия"
        : lang === "ua"
        ? "Індивідуальні заняття"
        : "Individual lessons";
  } else if (formatLower.includes("digital")) {
    recommendedFormat =
      lang === "ru"
        ? "Цифровой продукт + самостоятельное обучение"
        : lang === "ua"
        ? "Цифровий продукт + самостійне навчання"
        : "Digital product + self-study";
  } else if (formatLower.includes("group")) {
    recommendedFormat =
      lang === "ru"
        ? `Мини-группа ${level}`
        : lang === "ua"
        ? `Міні-група ${level}`
        : `Mini-group ${level}`;
  } else {
    recommendedFormat =
      levelLower.includes("b1") || levelLower.includes("b2")
        ? lang === "ru"
          ? `Мини-группа ${level}`
          : lang === "ua"
          ? `Міні-група ${level}`
          : `Mini-group ${level}`
        : lang === "ru"
        ? "Гибкий формат обучения"
        : lang === "ua"
        ? "Гнучкий формат навчання"
        : "Flexible learning format";
  }

  if (languageLower.includes("english")) {
    if (goalLower.includes("speaking") || difficultyLower.includes("speak")) {
      bestProduct = "English Speaking Booster Pack";
    } else if (goalLower.includes("travel")) {
      bestProduct = "English for Travel Pack";
    } else if (goalLower.includes("work")) {
      bestProduct = "Professional English Pack";
    } else {
      bestProduct = "English B1-B2 Pack";
    }
  } else if (languageLower.includes("polish")) {
    bestProduct = "Polish Starter / Survival Pack";
  } else if (languageLower.includes("czech")) {
    bestProduct = "Czech Basics Pack";
  } else {
    bestProduct = "Language Learning Starter Pack";
  }

  if (goalLower.includes("speaking") || difficultyLower.includes("speak")) {
    focusPlan =
      lang === "ru"
        ? "разговорная практика + словарный запас + повторение грамматики"
        : lang === "ua"
        ? "розмовна практика + словниковий запас + повторення граматики"
        : "speaking + vocabulary + grammar revision";
  } else if (goalLower.includes("work")) {
    focusPlan =
      lang === "ru"
        ? "рабочая лексика + speaking + письменная коммуникация"
        : lang === "ua"
        ? "робоча лексика + speaking + письмова комунікація"
        : "professional vocabulary + speaking + writing";
  } else if (goalLower.includes("travel")) {
    focusPlan =
      lang === "ru"
        ? "фразы для путешествий + listening + speaking"
        : lang === "ua"
        ? "фрази для подорожей + listening + speaking"
        : "travel phrases + listening + speaking";
  } else if (goalLower.includes("exam")) {
    focusPlan =
      lang === "ru"
        ? "структура экзамена + грамматика + практика заданий"
        : lang === "ua"
        ? "структура іспиту + граматика + практика завдань"
        : "exam structure + grammar + task practice";
  } else {
    focusPlan =
      lang === "ru"
        ? "грамматика + словарный запас + разговорная практика"
        : lang === "ua"
        ? "граматика + словниковий запас + розмовна практика"
        : "grammar + vocabulary + speaking practice";
  }

  const whyThisSuitsYou =
    lang === "ru"
      ? `Эта рекомендация подходит вам, потому что вы выбрали язык ${targetLanguage}, уровень ${level}, цель "${goal}" и указали основную трудность: "${mainDifficulty}". Система учитывает ваш доступный темп обучения (${hoursPerWeek} часов в неделю), желаемый формат "${preferredFormat}" и стиль занятий "${preferredLessonStyle}".`
      : lang === "ua"
      ? `Ця рекомендація підходить вам, тому що ви обрали мову ${targetLanguage}, рівень ${level}, мету "${goal}" та вказали основну складність: "${mainDifficulty}". Система враховує ваш доступний темп навчання (${hoursPerWeek} годин на тиждень), бажаний формат "${preferredFormat}" і стиль занять "${preferredLessonStyle}".`
      : `This recommendation suits you because you selected ${targetLanguage}, ${level} level, "${goal}" as your goal and "${mainDifficulty}" as your main difficulty. The system also considers your available study time (${hoursPerWeek} hours per week), preferred format "${preferredFormat}" and lesson style "${preferredLessonStyle}".`;

  return {
    recommendedFormat,
    suggestedIntensity,
    bestProduct,
    focusPlan,
    whyThisSuitsYou,
  };
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      targetLanguage,
      level,
      goal,
      mainDifficulty,
      hoursPerWeek,
      preferredFormat,
      preferredLessonStyle,
      lang = "en",
    } = body;

    if (
      !name ||
      !targetLanguage ||
      !level ||
      !goal ||
      !mainDifficulty ||
      !hoursPerWeek ||
      !preferredFormat ||
      !preferredLessonStyle
    ) {
      return NextResponse.json(
        { ok: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const recommendation = buildRecommendation(
      targetLanguage,
      level,
      goal,
      mainDifficulty,
      hoursPerWeek,
      preferredFormat,
      preferredLessonStyle,
      lang
    );

    db.prepare(`
      INSERT INTO recommendations (
        name,
        level,
        goal,
        hours_per_week,
        preferred_format,
        recommended_format,
        suggested_intensity,
        best_product,
        focus_plan
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      name,
      level,
      goal,
      hoursPerWeek,
      preferredFormat,
      recommendation.recommendedFormat,
      recommendation.suggestedIntensity,
      recommendation.bestProduct,
      recommendation.focusPlan
    );

    return NextResponse.json({
      ok: true,
      recommendation,
    });
  } catch (error) {
    console.error("POST /api/recommend error:", error);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const rows = db
      .prepare("SELECT * FROM recommendations ORDER BY id DESC")
      .all();

    return NextResponse.json({
      ok: true,
      recommendations: rows,
    });
  } catch (error) {
    console.error("GET /api/recommend error:", error);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}