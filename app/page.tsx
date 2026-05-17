import Script from "next/script";

export default function HomePage() {
  return (
    <>
      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
        rel="stylesheet"
      />

      {/* Your landing styles */}
      <link rel="stylesheet" href="/landing/style.css" />

      <div
        dangerouslySetInnerHTML={{
          __html: `
<main class="container">
  <!-- Profile Card -->
  <section class="profile-card">
    <img src="/landing/photo_2025-07-15_15-04-15.jpg" alt="Viktoriia Mykhalova" class="profile-photo">
    <div class="profile-info">
      <h1>Viktoriia Mykhalova</h1>
      <p class="subtitle" id="subtitle">
        On this page you can browse my Quizlet flashcards, read about me and my lessons, and write to me in Telegram to book a free trial or check the price list.
      </p>
      <span class="badge">A1-B2 level</span>
    </div>
  </section>

  <!-- Main Content Block -->
  <div class="main-block">

    <!-- PRICE SECTION -->
    <section class="section" id="price">
      <h2 id="priceTitle">💰 Price List (PLN)</h2>
      <div class="price-wrap">
        <!-- 45 minutes -->
        <div class="tier">
          <h3 id="dur45">45-minute lesson</h3>
          <p class="note" id="trial1">First lesson — FREE</p>
          <div class="price-row">
            <div class="price-box">
              <div class="price">50 zł</div>
              <div class="label" id="p1_45">for 1 lesson</div>
            </div>
            <div class="price-box">
              <div class="price">200 zł</div>
              <div class="label" id="p4_45">for 4 lessons</div>
            </div>
            <div class="price-box">
              <div class="price">400 zł</div>
              <div class="label" id="p8_45">for 8 lessons</div>
            </div>
          </div>
        </div>

        <!-- 60 minutes -->
        <div class="tier">
          <h3 id="dur60">60-minute lesson</h3>
          <p class="note" id="trial2">First lesson — free</p>
          <div class="price-row">
            <div class="price-box">
              <div class="price">70 zł</div>
              <div class="label" id="p1_60">for 1 lesson</div>
            </div>
            <div class="price-box">
              <div class="price">280 zł</div>
              <div class="label" id="p4_60">for 4 lessons</div>
            </div>
            <div class="price-box">
              <div class="price">480 zł</div>
              <div class="label" id="p8_60">for 8 lessons (60 zł/lesson)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
<!-- DIGITAL PRODUCT -->
<section class="section" id="product">
  <h2>📚 Digital Product</h2>
  <p class="section-desc">
    English Materials Pack for B1–B2 learners: grammar revision, vocabulary,
    speaking prompts and useful phrases for everyday English.
  </p>

  <div class="price-wrap">
    <div class="tier">
      <h3>English B1–B2 Pack</h3>
      <p class="note">Digital self-study product</p>

      <div class="price-row">
        <div class="price-box">
          <div class="price">99 zł</div>
          <div class="label">one-time purchase</div>
        </div>
      </div>

      <a
        href="/product"
        style="
          display:inline-block;
          margin-top:20px;
          padding:12px 20px;
          border-radius:12px;
          background:#111;
          color:#fff;
          font-weight:700;
          text-decoration:none;
        "
      >
        Buy now 🚀
      </a>
    </div>
  </div>
</section>
<section class="section">
  <h2>✨ AI Study Recommendation</h2>

  <p class="section-desc">
    Get a personalized recommendation based on your English level, goals and study preferences.
  </p>

  <a
    href="/placement-test"
    style="
      display:inline-block;
      margin-top:18px;
      padding:14px 22px;
      border-radius:16px;
      background:#7b5c4d;
      color:white;
      font-weight:700;
      text-decoration:none;
      transition:0.3s;
    "
  >
    Take placement test →
  </a>
</section>

    <!-- QUIZLET SECTION -->
    <section class="section">
      <h2>📘 Quizlet Flashcards</h2>
      <p class="section-desc" id="quizletDesc">Interactive flashcards for daily practice</p>
    </section>

    <!-- SONGS -->
    <section class="section">
      <h2>🎵 English through Songs</h2>
      <ul class="list">
        <li class="item">
          <a target="_blank" href="https://quizlet.com/pl/1085789559/eminem-lose-yourself-flash-cards/?i=6gk2r1&x=1jqt" rel="noreferrer">Eminem — Lose Yourself</a>
          <span class="arrow">↗</span>
        </li>
        <li class="item">
          <a target="_blank" href="https://quizlet.com/pl/1068911484/not-afraid-eminem-flash-cards/?i=6gk2r1&x=1jqt" rel="noreferrer">Eminem — Not Afraid</a>
          <span class="arrow">↗</span>
        </li>

      </ul>
    </section>

    <!-- BEAUTY -->
    <section class="section">
      <h2>💄 English for Beauty Industry</h2>
      <ul class="list">
        <li class="item">
          <a target="_blank" href="https://quizlet.com/pl/1088791751/fluent-in-beauty-flash-cards/?i=6gk2r1&x=1jqt" rel="noreferrer">Fluent in Beauty</a>
          <span class="arrow">↗</span>
        </li>
      </ul>
    </section>

    <!-- English on the Go -->
    <section class="section">
      <h2>English on the Go</h2>
      <ul class="list">
        <li class="item">
          <a target="_blank" href="https://quizlet.com/dk/1071281363/in-a-restaurant-flash-cards/?i=6gk2r1&x=1jqt" rel="noreferrer">In a Restaurant</a>
          <span class="arrow">↗</span>
        </li>
        <li class="item">
          <a target="_blank" href="https://quizlet.com/pl/1101641548/asking-where-a-place-is-flash-cards/?i=6gk2r1&x=1jqt" rel="noreferrer">ASKING WHERE A PLACE IS</a>
          <span class="arrow">↗</span>
        </li>
        <li class="item">
          <a target="_blank" href="https://quizlet.com/pl/1101421769/where-is-it-flash-cards/?i=6gk2r1&x=1jqt" rel="noreferrer">Where is it</a>
          <span class="arrow">↗</span>
        </li>
        <li class="item">
          <a target="_blank" href="https://quizlet.com/pl/1095108963/everyday-english-dates-months-abilities-rooms-furniture-places-flash-cards/?i=6gk2r1&x=1jqt" rel="noreferrer">🧠 Everyday English: Dates, Months, Abilities, Rooms, Furniture & Places</a>
          <span class="arrow">↗</span>
        </li>
      </ul>
    </section>

    <!-- LINKING WORDS -->
    <section class="section">
      <h2>🗣️ Linking Words & Fillers</h2>
      <p class="section-desc" id="linkingDesc">Master connectors for fluent speech</p>
      <ul class="list">
        <li class="item">
          <a target="_blank" href="https://quizlet.com/pl/1086817438/linking-words-fillers-flash-cards/?i=6gk2r1&x=1jqt" rel="noreferrer">Useful Linking Words</a>
          <span class="arrow">↗</span>
        </li>
        <li class="item">
          <a target="_blank" href="https://claude.ai/public/artifacts/1d6448d0-e614-4a60-9f89-95ab70250f7d" rel="noreferrer">Linking Words - PRESENTATION</a>
          <span class="arrow">↗</span>
        </li>
      </ul>
    </section>

    <p class="footer">© 2025 Viktoriia English</p>
  </div>
</main>

<a id="ctaFloat" href="/request" aria-label="Leave a request" title="Leave a request">
  <span class="ctaIcon">📝</span>
  <span id="ctaText">LEAVE A REQUEST</span>
</a>





<!-- Bottom controls -->
<div class="controls">
  <button class="control-btn" id="langBtn" aria-label="Language">
    <span>🌍</span>
    <span id="langLabel">EN</span>
  </button>
  <button class="control-btn" id="themeBtn" aria-label="Toggle theme">
    <span id="themeIcon">🌙</span>
    <span id="themeLabel">Dark</span>
  </button>
</div>
          `,
        }}
      />

      {/* Your landing JS (theme + lang) */}
      <Script src="/landing/script.js" strategy="afterInteractive" />
    </>
  );
}
