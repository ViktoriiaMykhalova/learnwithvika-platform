/* Theme toggle */
const root = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
const themeLabel = document.getElementById('themeLabel');
const themeIcon = document.getElementById('themeIcon');

const savedTheme = localStorage.getItem('theme') || 'dark';
root.setAttribute('data-theme', savedTheme);

if (themeLabel && themeIcon) {
  themeLabel.textContent = savedTheme === 'dark' ? 'Dark' : 'Light';
  themeIcon.textContent = savedTheme === 'dark' ? '🌙' : '🌞';
}

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);

    if (themeLabel && themeIcon) {
      themeLabel.textContent = next === 'dark' ? 'Dark' : 'Light';
      themeIcon.textContent = next === 'dark' ? '🌙' : '🌞';
    }
  });
}

/* Language toggle */
const languages = ['en', 'uk', 'ru'];
let currentLangIndex = 0;

const savedLang = localStorage.getItem('lang') || 'en';
currentLangIndex = Math.max(0, languages.indexOf(savedLang));

const langBtn = document.getElementById('langBtn');
const langLabel = document.getElementById('langLabel');

const dict = {
  en: {
    subtitle:
      "On this page you can browse my Quizlet flashcards, read about me and my lessons, and write to me in Telegram to book a free trial or check the price list.",
    priceTitle: "💰 Price List (PLN)",
    dur45: "45-minute lesson",
    dur60: "60-minute lesson",
    trial: "First lesson — free",
    p1: "for 1 lesson",
    p4: "for 4 lessons",
    p8: "for 8 lessons",
    p8with: "for 8 lessons (60 zł/lesson)",
    quizletDesc: "Interactive flashcards for daily practice",
    linkingDesc: "Master connectors for fluent speech",
    cta: "LEAVE A REQUEST",
  },
  ru: {
    subtitle:
      "Здесь вы найдёте мои карточки Quizlet, информацию о занятиях и сможете написать в Telegram, чтобы записаться на бесплатный пробный или уточнить прайс.",
    priceTitle: "💰 Прайс-лист (в злотых)",
    dur45: "Урок 45 минут",
    dur60: "Урок 60 минут",
    trial: "Первое занятие — бесплатно",
    p1: "за 1 урок",
    p4: "за 4 занятия",
    p8: "за 8 занятий",
    p8with: "за 8 занятий (60 zł за урок)",
    quizletDesc: "Интерактивные карточки для практики",
    linkingDesc: "Освойте связки для беглой речи",
    cta: "ОСТАВЬ ЗАЯВКУ",
  },
  uk: {
    subtitle:
      "Тут ви знайдете мої картки Quizlet, інформацію про заняття та зможете написати в Telegram, щоб записатися на безкоштовний пробний або дізнатися прайс.",
    priceTitle: "💰 Прайс-лист (у злотих)",
    dur45: "Урок 45 хвилин",
    dur60: "Урок 60 хвилин",
    trial: "Перше заняття — безкоштовно",
    p1: "за 1 урок",
    p4: "за 4 заняття",
    p8: "за 8 занять",
    p8with: "за 8 занять (60 zł за урок)",
    quizletDesc: "Інтерактивні картки для практики",
    linkingDesc: "Опануйте зв'язки для вільної мови",
    cta: "ЗАЛИШИТИ ЗАЯВКУ",
  },
};


function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function applyLang(lang) {
  document.documentElement.lang = lang;

  setText('subtitle', dict[lang].subtitle);
  setText('priceTitle', dict[lang].priceTitle);
  setText('dur45', dict[lang].dur45);
  setText('dur60', dict[lang].dur60);
  setText('trial1', dict[lang].trial);
  setText('trial2', dict[lang].trial);
  setText('p1_45', dict[lang].p1);
  setText('p4_45', dict[lang].p4);
  setText('p8_45', dict[lang].p8);
  setText('p1_60', dict[lang].p1);
  setText('p4_60', dict[lang].p4);
  setText('p8_60', dict[lang].p8with);
  setText('quizletDesc', dict[lang].quizletDesc);
  setText('linkingDesc', dict[lang].linkingDesc);
  setText("ctaText", dict[lang].cta);
  function applyLang(lang) {
  document.documentElement.lang = lang;
  setText('subtitle', dict[lang].subtitle);
  setText('priceTitle', dict[lang].priceTitle);
  setText('dur45', dict[lang].dur45);
  setText('dur60', dict[lang].dur60);
  setText('trial1', dict[lang].trial);
  setText('trial2', dict[lang].trial);
  setText('p1_45', dict[lang].p1);
  setText('p4_45', dict[lang].p4);
  setText('p8_45', dict[lang].p8);
  setText('p1_60', dict[lang].p1);
  setText('p4_60', dict[lang].p4);
  setText('p8_60', dict[lang].p8with);
  setText('quizletDesc', dict[lang].quizletDesc);
  setText('linkingDesc', dict[lang].linkingDesc);

  // ✅ CTA button text
  setText('ctaText', dict[lang].cta);

  localStorage.setItem('lang', lang);
  if (langLabel) langLabel.textContent = lang.toUpperCase();
}



  localStorage.setItem('lang', lang);
  if (langLabel) langLabel.textContent = lang.toUpperCase();
}

applyLang(savedLang);
if (langLabel) langLabel.textContent = savedLang.toUpperCase();

if (langBtn) {
  langBtn.addEventListener('click', () => {
    currentLangIndex = (currentLangIndex + 1) % languages.length;
    applyLang(languages[currentLangIndex]);
  });
}


