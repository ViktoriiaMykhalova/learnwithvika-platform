"use client";

import { FormEvent, useState } from "react";

type Recommendation = {
  recommendedFormat: string;
  suggestedIntensity: string;
  bestProduct: string;
  focusPlan: string;
  whyThisSuitsYou: string;
};

const content = {
  en: {
    title: "Get your study recommendation",
    subtitle:
      "Answer a few questions and get a personalized learning recommendation.",
    namePlaceholder: "Your name",
    targetLanguageLabel: "Target language",
    levelLabel: "Current level",
    goalLabel: "Goal",
    difficultyLabel: "Main difficulty",
    hoursLabel: "Hours per week",
    formatLabel: "Preferred format",
    styleLabel: "Preferred lesson style",
    submit: "Get recommendation",
    loading: "Loading...",
    resultTitle: "Your recommendation",
    recommendedFormat: "Recommended format",
    suggestedIntensity: "Suggested intensity",
    bestProduct: "Best product",
    focusPlan: "4-week focus",
    whyThisSuitsYou: "Why this suits you",
    targetLanguagePlaceholder: "Select target language",
    levelPlaceholder: "Select your level",
    goalPlaceholder: "Select your goal",
    difficultyPlaceholder: "Select your main difficulty",
    hoursPlaceholder: "How many hours per week?",
    formatPlaceholder: "Preferred format",
    stylePlaceholder: "Preferred lesson style",
    errorDefault: "Something went wrong",
    errorFailed: "Failed to get recommendation",
  },
  ru: {
    title: "Получите рекомендацию по обучению",
    subtitle:
      "Ответьте на несколько вопросов и получите персональную рекомендацию.",
    namePlaceholder: "Ваше имя",
    targetLanguageLabel: "Изучаемый язык",
    levelLabel: "Текущий уровень",
    goalLabel: "Цель",
    difficultyLabel: "Главная трудность",
    hoursLabel: "Часов в неделю",
    formatLabel: "Предпочтительный формат",
    styleLabel: "Предпочитаемый стиль занятий",
    submit: "Получить рекомендацию",
    loading: "Загрузка...",
    resultTitle: "Ваша рекомендация",
    recommendedFormat: "Рекомендуемый формат",
    suggestedIntensity: "Рекомендуемая интенсивность",
    bestProduct: "Лучший продукт",
    focusPlan: "Фокус на 4 недели",
    whyThisSuitsYou: "Почему это вам подходит",
    targetLanguagePlaceholder: "Выберите язык",
    levelPlaceholder: "Выберите уровень",
    goalPlaceholder: "Выберите цель",
    difficultyPlaceholder: "Выберите основную трудность",
    hoursPlaceholder: "Сколько часов в неделю?",
    formatPlaceholder: "Выберите формат",
    stylePlaceholder: "Выберите стиль занятий",
    errorDefault: "Что-то пошло не так",
    errorFailed: "Не удалось получить рекомендацию",
  },
  ua: {
    title: "Отримайте рекомендацію щодо навчання",
    subtitle:
      "Дайте відповіді на кілька запитань і отримайте персональну рекомендацію.",
    namePlaceholder: "Ваше ім’я",
    targetLanguageLabel: "Мова для вивчення",
    levelLabel: "Поточний рівень",
    goalLabel: "Мета",
    difficultyLabel: "Основна труднощі",
    hoursLabel: "Годин на тиждень",
    formatLabel: "Бажаний формат",
    styleLabel: "Бажаний стиль занять",
    submit: "Отримати рекомендацію",
    loading: "Завантаження...",
    resultTitle: "Ваша рекомендація",
    recommendedFormat: "Рекомендований формат",
    suggestedIntensity: "Рекомендована інтенсивність",
    bestProduct: "Найкращий продукт",
    focusPlan: "Фокус на 4 тижні",
    whyThisSuitsYou: "Чому це вам підходить",
    targetLanguagePlaceholder: "Оберіть мову",
    levelPlaceholder: "Оберіть рівень",
    goalPlaceholder: "Оберіть мету",
    difficultyPlaceholder: "Оберіть основну труднощі",
    hoursPlaceholder: "Скільки годин на тиждень?",
    formatPlaceholder: "Оберіть формат",
    stylePlaceholder: "Оберіть стиль занять",
    errorDefault: "Щось пішло не так",
    errorFailed: "Не вдалося отримати рекомендацію",
  },
};

export default function RecommendationPage() {
  const [lang, setLang] = useState<"en" | "ru" | "ua">("en");
  const t = content[lang];

  const [name, setName] = useState<string>("");
  const [targetLanguage, setTargetLanguage] = useState<string>("");
  const [level, setLevel] = useState<string>("");
  const [goal, setGoal] = useState<string>("");
  const [mainDifficulty, setMainDifficulty] = useState<string>("");
  const [hoursPerWeek, setHoursPerWeek] = useState<string>("");
  const [preferredFormat, setPreferredFormat] = useState<string>("");
  const [preferredLessonStyle, setPreferredLessonStyle] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<Recommendation | null>(null);
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          targetLanguage,
          level,
          goal,
          mainDifficulty,
          hoursPerWeek,
          preferredFormat,
          preferredLessonStyle,
          lang,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || t.errorDefault);
        return;
      }

      setResult(data.recommendation);
    } catch {
      setError(t.errorFailed);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        maxWidth: 820,
        margin: "0 auto",
        padding: "40px 16px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 8,
          marginBottom: 20,
        }}
      >
        <button type="button" onClick={() => setLang("en")} style={langButtonStyle(lang === "en")}>
          EN
        </button>
        <button type="button" onClick={() => setLang("ru")} style={langButtonStyle(lang === "ru")}>
          RU
        </button>
        <button type="button" onClick={() => setLang("ua")} style={langButtonStyle(lang === "ua")}>
          UA
        </button>
      </div>

      <h1 style={{ marginBottom: 10 }}>{t.title}</h1>
      <p style={{ marginBottom: 24, color: "#6f5f55" }}>{t.subtitle}</p>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gap: 16,
          background: "#fff",
          padding: 24,
          borderRadius: 20,
          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
        }}
      >
        <input
          type="text"
          placeholder={t.namePlaceholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={inputStyle}
        />

        <select
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
          required
          style={inputStyle}
        >
          <option value="">{t.targetLanguagePlaceholder}</option>
          <option value="English">English</option>
          <option value="Polish">Polish</option>
          <option value="Czech">Czech</option>
        </select>

        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          required
          style={inputStyle}
        >
          <option value="">{t.levelPlaceholder}</option>
          <option value="A0">A0</option>
          <option value="A1">A1</option>
          <option value="A2">A2</option>
          <option value="B1">B1</option>
          <option value="B2">B2</option>
        </select>

        <select
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          required
          style={inputStyle}
        >
          <option value="">{t.goalPlaceholder}</option>
          <option value="speaking">Speaking</option>
          <option value="travel">Travel</option>
          <option value="work">Work</option>
          <option value="exam">Exam</option>
          <option value="general improvement">General improvement</option>
        </select>

        <select
          value={mainDifficulty}
          onChange={(e) => setMainDifficulty(e.target.value)}
          required
          style={inputStyle}
        >
          <option value="">{t.difficultyPlaceholder}</option>
          <option value="I forget words">I forget words</option>
          <option value="I understand but can't speak">I understand but can't speak</option>
          <option value="Grammar is confusing">Grammar is confusing</option>
          <option value="I am afraid to speak">I am afraid to speak</option>
          <option value="I need more structure">I need more structure</option>
        </select>

        <select
          value={hoursPerWeek}
          onChange={(e) => setHoursPerWeek(e.target.value)}
          required
          style={inputStyle}
        >
          <option value="">{t.hoursPlaceholder}</option>
          <option value="1-2">1-2 hours</option>
          <option value="3-4">3-4 hours</option>
          <option value="5+">5+ hours</option>
        </select>

        <select
          value={preferredFormat}
          onChange={(e) => setPreferredFormat(e.target.value)}
          required
          style={inputStyle}
        >
          <option value="">{t.formatPlaceholder}</option>
          <option value="mini-group">Mini-group</option>
          <option value="individual">Individual lessons</option>
          <option value="digital product">Digital product</option>
          <option value="not sure">Not sure yet</option>
        </select>

        <select
          value={preferredLessonStyle}
          onChange={(e) => setPreferredLessonStyle(e.target.value)}
          required
          style={inputStyle}
        >
          <option value="">{t.stylePlaceholder}</option>
          <option value="Speaking focused">Speaking focused</option>
          <option value="Grammar focused">Grammar focused</option>
          <option value="Interactive activities">Interactive activities</option>
          <option value="Structured lessons">Structured lessons</option>
          <option value="Mixed approach">Mixed approach</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "12px 18px",
            borderRadius: 14,
            border: "none",
            background: "#2f241f",
            color: "#fff",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          {loading ? t.loading : t.submit}
        </button>
      </form>

      {error && <p style={{ color: "crimson", marginTop: 20 }}>{error}</p>}

      {result && (
        <section
          style={{
            marginTop: 28,
            background: "#fffaf5",
            border: "1px solid #e5d7ca",
            borderRadius: 20,
            padding: 24,
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
          }}
        >
          <h2 style={{ marginBottom: 16 }}>{t.resultTitle}</h2>

          <p>
            <strong>{t.recommendedFormat}:</strong> {result.recommendedFormat}
          </p>
          <p>
            <strong>{t.suggestedIntensity}:</strong> {result.suggestedIntensity}
          </p>
          <p>
            <strong>{t.bestProduct}:</strong> {result.bestProduct}
          </p>
          <p>
            <strong>{t.focusPlan}:</strong> {result.focusPlan}
          </p>
          <p style={{ marginTop: 18 }}>
            <strong>{t.whyThisSuitsYou}:</strong>
            <br />
            {result.whyThisSuitsYou}
          </p>
        </section>
      )}
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid #d8c7b9",
  background: "#fff",
};

function langButtonStyle(active: boolean): React.CSSProperties {
  return {
    padding: "8px 12px",
    borderRadius: 10,
    border: "1px solid #d8c7b9",
    background: active ? "#2f241f" : "#fff",
    color: active ? "#fff" : "#2f241f",
    fontWeight: 700,
    cursor: "pointer",
  };
}