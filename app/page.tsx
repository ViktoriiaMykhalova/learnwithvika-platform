"use client";
import { useEffect } from "react";

const LWV_T = {
  en: {
    'lwv-eyebrow': 'LearnWithVika · AI-Powered English',
    'lwv-hero-title': 'Learn English<br><em>the smart way</em>',
    'lwv-hero-desc': '<strong>Viktoriia Mykhalova</strong> — English tutor, Software Engineering student, CEO of SOLVION educational direction, and founder of the LearnWithVika AI-powered learning platform.<br><br>1.5+ years of teaching focused on speaking, practical grammar, AI-assisted learning, and modern interactive education for <strong>A1–B2 students</strong>.',
    'lwv-cta1': '✦ Take placement test', 'lwv-cta2': '🎯 Book your free lesson',
    'lwv-s1': 'Levels covered', 'lwv-s2': 'AI platform', 'lwv-s3': 'Languages spoken',
    'lwv-nav-cta': 'Take placement test →',
    'lwv-badge-role': 'English Tutor · SOLVION CEO · LearnWithVika Founder',
    'lwv-about-label': 'About me',
    'lwv-about-title': 'Not just a tutor —<br><em>a tech-savvy mentor</em>',
    'lwv-ap1': 'I\'m a <strong>Software Engineering student</strong> and English tutor who builds AI-powered educational tools while teaching real students every day.',
    'lwv-ap2': 'As <strong>CEO of SOLVION</strong> educational direction and founder of LearnWithVika — I combine modern technology with real, effective English teaching.',
    'lwv-ap3': 'My approach: <strong>friendly, interactive, speaking-focused</strong> — no boring theory, just real English that works.',
    'lwv-about-cta': '📝 Book free trial',
    'lwv-for-label': 'For who', 'lwv-for-title': 'This is for <em>you</em> if...',
    'lwv-f1t': 'Planning to travel', 'lwv-f1d': 'Need practical English for airports, hotels, restaurants and everyday life abroad.',
    'lwv-f2t': 'Working internationally', 'lwv-f2d': 'Want to communicate confidently with colleagues and clients in English.',
    'lwv-f3t': 'Student or teenager', 'lwv-f3d': 'Preparing for exams or want to finally start speaking without fear.',
    'lwv-f4t': 'Beauty industry pro', 'lwv-f4d': 'Work with international clients and need industry-specific English.',
    'lwv-f5t': 'IT professional', 'lwv-f5d': 'Need English for tech communication, documentation, international projects.',
    'lwv-f6t': 'Afraid to speak', 'lwv-f6d': 'Understand everything but freeze when speaking. We fix that — safely and gently.',
    'lwv-price-label': 'Pricing', 'lwv-price-title': 'Simple, <em>transparent</em> pricing',
    'lwv-pb1': 'Individual · Packages', 'lwv-pn1': 'Individual lessons', 'lwv-pd1': 'Personal lessons with Viktoriia. Speaking, grammar, real-life English. First lesson is free.', 'lwv-pu1': 'zł', 'lwv-pnote1': '4-lesson package · 70 zł/lesson',
    'lwv-pf1a': 'First lesson free', 'lwv-pf1b': '8-lesson pack: 480 zł (60 zł each)', 'lwv-pf1c': 'Personal approach', 'lwv-pf1d': 'Flexible scheduling', 'lwv-pf1e': 'Speaking & grammar focus', 'lwv-p1cta': 'Book free trial',
    'lwv-pb2': '⭐ Group · B1 level', 'lwv-pn2': 'B1 Mini-group', 'lwv-pd2': 'Small group of 3–4 students at B1 level. Interactive, communicative, affordable.', 'lwv-pu2': 'zł', 'lwv-pnote2': 'per person per lesson · max 3–4 students',
    'lwv-pf2a': 'B1 CEFR level', 'lwv-pf2b': 'Max 3–4 students per group', 'lwv-pf2c': 'Speaking practice in group', 'lwv-pf2d': 'Grammar & vocabulary', 'lwv-pf2e': 'AI materials included', 'lwv-p2cta': 'Join the group',
    'lwv-pb3': 'Digital · Self-study', 'lwv-pn3': 'B1–B2 Pack', 'lwv-pd3': 'Grammar revision, vocabulary, speaking prompts and useful phrases for everyday English.', 'lwv-pu3': 'zł', 'lwv-pnote3': 'one-time purchase · instant access',
    'lwv-pf3a': 'Grammar revision', 'lwv-pf3b': 'Vocabulary flashcards', 'lwv-pf3c': 'Speaking prompts', 'lwv-pf3d': 'Useful phrases PDF', 'lwv-p3cta': 'Buy now 🚀',
    'lwv-rev-label': 'Student reviews', 'lwv-rev-title': 'Real words from <em>real students</em> ❤️',
    'lwv-r1': '"I am so grateful to Vika! When I first started, speaking English felt like a huge challenge. She helped me improve my grammar, vocabulary and prepared me for interviews. I felt confident during the interview for an HR Manager position at an American company. I got the job!"',
    'lwv-r1n': 'Student', 'lwv-r1l': 'Job interview prep · Got the job! 🎉',
    'lwv-r2': '"I came at A2 level half a year ago and now the fear of speaking is completely gone. I still make mistakes but I\'m no longer afraid to start a conversation and people understand me!"',
    'lwv-r2n': 'Student', 'lwv-r2l': 'A2 → B1 · 6 months',
    'lwv-r3': '"Lessons are easy-going and enjoyable 🙌 No boring theory — everything is clear, lively and practical. The tutor always supports you, explains until you get it and motivates you not to quit 💙"',
    'lwv-r3n': 'Student', 'lwv-r3l': 'Regular student',
    'lwv-r4': '"I really enjoyed the trial lesson and I\'m excited to continue our classes. Thank you so much!"',
    'lwv-r4n': 'Student', 'lwv-r4l': 'After first trial lesson',
    'lwv-r5': '"I love the flashcards with words and phrases — I memorize faster and immediately see how to use them in context. After these lessons you actually want to speak!"',
    'lwv-r5n': 'Student', 'lwv-r5l': 'Regular student',
    'lwv-r6': '"Lessons are calm and stress-free. You explain everything clearly, the atmosphere is pleasant, studying is interesting and easy."',
    'lwv-r6n': 'Student', 'lwv-r6l': 'Regular student',
    'lwv-cta-title': 'Ready to start<br><em>speaking English?</em>',
    'lwv-cta-sub': 'Take a free placement test and get your personalized learning plan today.',
    'lwv-cta-main': '✦ Start with free test', 'lwv-cta-contact': 'Contact Viktoriia',
  },
  ua: {
    'lwv-eyebrow': 'LearnWithVika · AI-навчання англійської',
    'lwv-hero-title': 'Вчи англійську<br><em>по-сучасному</em>',
    'lwv-hero-desc': '<strong>Вікторія Михальова</strong> — репетитор англійської, студентка Software Engineering, CEO освітнього напряму SOLVION та засновниця AI-платформи LearnWithVika.<br><br>1.5+ роки навчання: speaking, граматика, AI-асистент, сучасна інтерактивна освіта для студентів рівнів <strong>A1–B2</strong>.',
    'lwv-cta1': '✦ Пройти тест рівня', 'lwv-cta2': '🎯 Записатись на пробне  безкоштовне заняття',
    'lwv-s1': 'Рівні навчання', 'lwv-s2': 'AI платформа', 'lwv-s3': 'Мов знаю',
    'lwv-nav-cta': 'Пройти тест рівня →',
    'lwv-badge-role': 'Репетитор · CEO SOLVION · Засновниця LearnWithVika',
    'lwv-about-label': 'Про мене',
    'lwv-about-title': 'Не просто репетитор —<br><em>tech-ментор</em>',
    'lwv-ap1': 'Я <strong>студентка Software Engineering</strong> і репетитор англійської, яка розробляє AI-інструменти для навчання і щодня працює з реальними студентами.',
    'lwv-ap2': 'Як <strong>CEO SOLVION</strong> та засновниця LearnWithVika — поєдную сучасні технології з реальним, ефективним навчанням англійської.',
    'lwv-ap3': 'Мій підхід: <strong>дружній, інтерактивний, з фокусом на speaking</strong> — ніякої нудної теорії, тільки реальна англійська.',
    'lwv-about-cta': '📝 Записатись на пробне',
    'lwv-for-label': 'Для кого', 'lwv-for-title': 'Це для <em>тебе</em>, якщо...',
    'lwv-f1t': 'Плануєш подорожі', 'lwv-f1d': 'Потрібна практична англійська для аеропортів, готелів і щоденного спілкування за кордоном.',
    'lwv-f2t': 'Працюєш з іноземцями', 'lwv-f2d': 'Хочеш впевнено спілкуватися з колегами та клієнтами англійською.',
    'lwv-f3t': 'Студент або підліток', 'lwv-f3d': 'Готуєшся до іспитів або хочеш нарешті почати говорити без страху.',
    'lwv-f4t': 'Beauty-спеціаліст', 'lwv-f4d': 'Працюєш з іноземними клієнтами — потрібна галузева лексика.',
    'lwv-f5t': 'IT-спеціаліст', 'lwv-f5d': 'Потрібна англійська для технічної комунікації та міжнародних проєктів.',
    'lwv-f6t': 'Боїшся говорити', 'lwv-f6d': 'Розумієш усе, але губишся в розмові. Виправимо це разом — безпечно і поступово.',
    'lwv-price-label': 'Ціни', 'lwv-price-title': 'Простий і <em>прозорий</em> прайс',
    'lwv-pb1': 'Індивідуально · Пакети', 'lwv-pn1': 'Індивідуальні заняття', 'lwv-pd1': 'Особисті заняття з Вікторією. Speaking, граматика, реальна англійська. Перше заняття безкоштовно.', 'lwv-pu1': 'zł', 'lwv-pnote1': 'пакет 4 заняття · 70 zł/заняття',
    'lwv-pf1a': 'Перше заняття безкоштовно', 'lwv-pf1b': 'Пакет 8 занять: 480 zł (60 zł кожне)', 'lwv-pf1c': 'Персональний підхід', 'lwv-pf1d': 'Гнучкий розклад', 'lwv-pf1e': 'Speaking та граматика', 'lwv-p1cta': 'Записатись на пробне',
    'lwv-pb2': '⭐ Група · Рівень B1', 'lwv-pn2': 'Міні-група B1', 'lwv-pd2': 'Невелика група 3–4 студентів рівня B1. Інтерактивно, комунікативно, доступно.', 'lwv-pu2': 'zł', 'lwv-pnote2': 'за особу за заняття · макс. 3–4 студенти',
    'lwv-pf2a': 'Рівень B1 за CEFR', 'lwv-pf2b': 'Макс. 3–4 студенти в групі', 'lwv-pf2c': 'Speaking практика в групі', 'lwv-pf2d': 'Граматика та лексика', 'lwv-pf2e': 'AI матеріали включено', 'lwv-p2cta': 'Записатись до групи',
    'lwv-pb3': 'Цифровий · Самонавчання', 'lwv-pn3': 'B1–B2 Pack', 'lwv-pd3': 'Граматика, лексика, speaking завдання та корисні фрази для щоденної англійської.', 'lwv-pu3': 'zł', 'lwv-pnote3': 'разова покупка · миттєвий доступ',
    'lwv-pf3a': 'Граматика', 'lwv-pf3b': 'Картки лексики', 'lwv-pf3c': 'Speaking завдання', 'lwv-pf3d': 'Корисні фрази PDF', 'lwv-p3cta': 'Купити 🚀',
    'lwv-rev-label': 'Відгуки студентів', 'lwv-rev-title': 'Реальні слова від <em>реальних студентів</em> ❤️',
    'lwv-r1': '"Я дуже вдячна Віці за допомогу! Коли я починала, говорити англійською здавалося величезним викликом. Вікторія допомогла мені покращити граматику і підготувала до співбесід. Я отримала роботу HR Manager в американській компанії!"',
    'lwv-r1n': 'Студентка', 'lwv-r1l': 'Підготовка до інтерв\'ю · Отримала роботу! 🎉',
    'lwv-r2': '"Я прийшла з рівнем A2 пів року тому, а зараз страх говорити зовсім пропав. Говорю ще з помилками, але вже не боюся вступати в діалог і мене розуміють!"',
    'lwv-r2n': 'Студент', 'lwv-r2l': 'A2 → B1 · 6 місяців',
    'lwv-r3': '"Заняття проходять легко і з задоволенням 🙌 Ніякої нудної теорії — все зрозуміло, жваво і по справі. Репетитор завжди підтримує і мотивує не кидати 💙"',
    'lwv-r3n': 'Студент', 'lwv-r3l': 'Постійний студент',
    'lwv-r4': '"Дуже сподобалось пробне заняття і я в захваті від продовження навчання. Дякую!"',
    'lwv-r4n': 'Студентка', 'lwv-r4l': 'Після пробного заняття',
    'lwv-r5': '"Дуже допомагають картки зі словами — завдяки ним швидше запам\'ятовую і одразу бачу як використовувати в контексті. Після таких занять хочеться говорити!"',
    'lwv-r5n': 'Студентка', 'lwv-r5l': 'Постійна студентка',
    'lwv-r6': '"Заняття проходять спокійно і без напруги. Ти пояснюєш все зрозуміло і доступно, атмосфера приємна, навчатися цікаво і легко."',
    'lwv-r6n': 'Студентка', 'lwv-r6l': 'Постійна студентка',
    'lwv-cta-title': 'Готова почати<br><em>говорити англійською?</em>',
    'lwv-cta-sub': 'Пройди безкоштовний тест і отримай персональний план навчання вже сьогодні.',
    'lwv-cta-main': '✦ Почати з тесту', 'lwv-cta-contact': 'Написати Вікторії',
  },
  ru: {
    'lwv-eyebrow': 'LearnWithVika · AI-обучение английскому',
    'lwv-hero-title': 'Учи английский<br><em>по-современному</em>',
    'lwv-hero-desc': '<strong>Виктория Михальова</strong> — репетитор английского, студентка Software Engineering, CEO образовательного направления SOLVION и основательница AI-платформы LearnWithVika.<br><br>1.5+ лет обучения: speaking, грамматика, AI-ассистент, современное интерактивное обучение для студентов уровней <strong>A1–B2</strong>.',
    'lwv-cta1': '✦ Пройти тест уровня', 'lwv-cta2': '🎯 Записаться пробный бесплатный урок',
    'lwv-s1': 'Уровни обучения', 'lwv-s2': 'AI платформа', 'lwv-s3': 'Языков знаю',
    'lwv-nav-cta': 'Пройти тест →',
    'lwv-badge-role': 'Репетитор · CEO SOLVION · Основательница LearnWithVika',
    'lwv-about-label': 'Обо мне',
    'lwv-about-title': 'Не просто репетитор —<br><em>tech-ментор</em>',
    'lwv-ap1': 'Я <strong>студентка Software Engineering</strong> и репетитор английского, которая разрабатывает AI-инструменты для обучения и каждый день работает с реальными студентами.',
    'lwv-ap2': 'Как <strong>CEO SOLVION</strong> и основательница LearnWithVika — объединяю современные технологии с реальным, эффективным обучением английскому.',
    'lwv-ap3': 'Мой подход: <strong>дружелюбный, интерактивный, с фокусом на speaking</strong> — никакой скучной теории, только реальный английский.',
    'lwv-about-cta': '📝 Записаться на пробное',
    'lwv-for-label': 'Для кого', 'lwv-for-title': 'Это для <em>тебя</em>, если...',
    'lwv-f1t': 'Планируешь путешествия', 'lwv-f1d': 'Нужен практический английский для аэропортов, отелей и повседневного общения за границей.',
    'lwv-f2t': 'Работаешь с иностранцами', 'lwv-f2d': 'Хочешь уверенно общаться с коллегами и клиентами на английском.',
    'lwv-f3t': 'Студент или подросток', 'lwv-f3d': 'Готовишься к экзаменам или хочешь наконец начать говорить без страха.',
    'lwv-f4t': 'Beauty-специалист', 'lwv-f4d': 'Работаешь с иностранными клиентами — нужна отраслевая лексика.',
    'lwv-f5t': 'IT-специалист', 'lwv-f5d': 'Нужен английский для технической коммуникации и международных проектов.',
    'lwv-f6t': 'Боишься говорить', 'lwv-f6d': 'Всё понимаешь, но теряешься в разговоре. Исправим это вместе — безопасно и постепенно.',
    'lwv-price-label': 'Цены', 'lwv-price-title': 'Простой и <em>прозрачный</em> прайс',
    'lwv-pb1': 'Индивидуально · Пакеты', 'lwv-pn1': 'Индивидуальные занятия', 'lwv-pd1': 'Личные занятия с Викторией. Speaking, грамматика, реальный английский. Первое занятие бесплатно.', 'lwv-pu1': 'zł', 'lwv-pnote1': 'пакет 4 занятия · 70 zł/занятие',
    'lwv-pf1a': 'Первое занятие бесплатно', 'lwv-pf1b': 'Пакет 8 занятий: 480 zł (60 zł каждое)', 'lwv-pf1c': 'Личный подход', 'lwv-pf1d': 'Гибкое расписание', 'lwv-pf1e': 'Speaking и грамматика', 'lwv-p1cta': 'Записаться на пробное',
    'lwv-pb2': '⭐ Группа · Уровень B1', 'lwv-pn2': 'Мини-группа B1', 'lwv-pd2': 'Небольшая группа 3–4 студентов уровня B1. Интерактивно, коммуникативно, доступно.', 'lwv-pu2': 'zł', 'lwv-pnote2': 'с человека за занятие · макс. 3–4 студента',
    'lwv-pf2a': 'Уровень B1 по CEFR', 'lwv-pf2b': 'Макс. 3–4 студента в группе', 'lwv-pf2c': 'Speaking практика в группе', 'lwv-pf2d': 'Грамматика и лексика', 'lwv-pf2e': 'AI материалы включены', 'lwv-p2cta': 'Записаться в группу',
    'lwv-pb3': 'Цифровой · Самообучение', 'lwv-pn3': 'B1–B2 Pack', 'lwv-pd3': 'Грамматика, лексика, speaking задания и полезные фразы для повседневного английского.', 'lwv-pu3': 'zł', 'lwv-pnote3': 'разовая покупка · мгновенный доступ',
    'lwv-pf3a': 'Грамматика', 'lwv-pf3b': 'Карточки лексики', 'lwv-pf3c': 'Speaking задания', 'lwv-pf3d': 'Полезные фразы PDF', 'lwv-p3cta': 'Купить 🚀',
    'lwv-rev-label': 'Отзывы студентов', 'lwv-rev-title': 'Реальные слова от <em>реальных студентов</em> ❤️',
    'lwv-r1': '"Я очень благодарна Вике за помощь! Когда я только начинала, говорить по-английски казалось огромным испытанием. Вика помогла мне улучшить грамматику и подготовила к собеседованиям. Я получила работу HR Manager в американской компании!"',
    'lwv-r1n': 'Студентка', 'lwv-r1l': 'Подготовка к интервью · Получила работу! 🎉',
    'lwv-r2': '"Я пришла с уровнем A2 полгода назад, и сейчас страх говорить полностью пропал. Говорю ещё с ошибками, но уже не боюсь вступать в диалог и меня понимают!"',
    'lwv-r2n': 'Студент', 'lwv-r2l': 'A2 → B1 · 6 месяцев',
    'lwv-r3': '"Занятия проходят легко и с удовольствием 🙌 Никакой скучной теории — всё понятно, живо и по делу. Репетитор всегда поддерживает и мотивирует не бросать 💙"',
    'lwv-r3n': 'Студент', 'lwv-r3l': 'Постоянный студент',
    'lwv-r4': '"Занятие прошло легко и с удовольствием. Очень понравился формат, хочу продолжать. Спасибо!"',
    'lwv-r4n': 'Студентка', 'lwv-r4l': 'После пробного занятия',
    'lwv-r5': '"Очень помогают карточки со словами — благодаря ним быстрее запоминаю и сразу вижу как использовать в контексте. После таких занятий хочется говорить!"',
    'lwv-r5n': 'Студентка', 'lwv-r5l': 'Постоянная студентка',
    'lwv-r6': '"Занятия проходят спокойно, без напряжения. Ты объясняешь всё понятно и доступно, атмосфера приятная, учиться интересно и легко."',
    'lwv-r6n': 'Студентка', 'lwv-r6l': 'Постоянная студентка',
    'lwv-cta-title': 'Готова начать<br><em>говорить по-английски?</em>',
    'lwv-cta-sub': 'Пройди бесплатный тест и получи персональный план обучения уже сегодня.',
    'lwv-cta-main': '✦ Начать с теста', 'lwv-cta-contact': 'Написать Виктории',
  }
};

export default function HomePage() {

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const btn = (e.target as Element).closest('.lwv-lang-btn') as HTMLElement | null;
      if (!btn) return;
      document.querySelectorAll('.lwv-lang-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const lang = btn.getAttribute('data-lang') as 'en' | 'ua' | 'ru';
      const t = LWV_T[lang];
      if (!t) return;
      Object.keys(t).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = (t as Record<string, string>)[id];
      });
    };
    document.addEventListener('click', handler);

    // Theme init
    const saved = localStorage.getItem('lwv-theme');
    const preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    const theme = saved || preferred;
    document.documentElement.setAttribute('data-theme', theme);
    const btn = document.getElementById('lwv-theme-btn');
    if(btn) btn.textContent = theme==='light' ? '🌙 Dark' : '☀️ Light';

    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="/landing/style.css" />

      <style>{`
        * { box-sizing: border-box; }

        .lwv-lang-bar { display: none !important; }
        .lwv-nav-langs { display: flex; gap: 6px; margin-left: 12px; }
        .lwv-lang-btn {
          padding: 4px 14px; border-radius: 100px; font-size: 12px; font-weight: 600;
          border: 1px solid rgba(200,133,90,0.25); background: transparent;
          color: #9a7860; cursor: pointer; transition: all 0.2s;
          font-family: 'DM Sans', system-ui;
        }
        .lwv-lang-btn.active, .lwv-lang-btn:hover {
          background: #c8855a; color: #fff; border-color: #c8855a;
        }

        .lwv-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 9999;
          padding: 12px 32px; display: flex; align-items: center; justify-content: space-between;
          background: rgba(14,7,4,0.92); backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(200,133,90,0.12);
        }
        .lwv-logo {
          font-family: 'Playfair Display', serif; font-size: 19px; font-weight: 700;
          color: #f5ede3; text-decoration: none;
        }
        .lwv-logo span { color: #c8855a; }
        .lwv-nav-links { display: flex; gap: 24px; align-items: center; }
        .lwv-nav-links a {
          color: #9a7860; font-size: 13px; font-weight: 500;
          text-decoration: none; transition: color 0.2s; cursor: pointer;
          font-family: 'DM Sans', system-ui;
        }
        .lwv-nav-links a:hover { color: #f5ede3; }
        .lwv-nav-cta {
          background: #c8855a !important; color: #fff !important;
          padding: 9px 20px; border-radius: 100px; font-size: 13px !important;
          font-weight: 600 !important;
        }
        .lwv-nav-cta:hover { background: #e8a87c !important; }

        .lwv-hero {
          min-height: 100vh; display: grid; grid-template-columns: 1fr 1fr;
          padding-top: 64px; overflow: hidden;
          background: #0e0704;
          margin-bottom: -4px;
        }
        .lwv-hero-left {
          padding: 60px 48px 60px 40px; display: flex; flex-direction: column;
          justify-content: center; position: relative;
          background: linear-gradient(135deg, #0e0704 0%, #1c0f08 100%);
        }
        .lwv-hero-left::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse 70% 60% at 30% 50%, rgba(200,133,90,0.1), transparent 70%);
          pointer-events: none;
        }
        .lwv-hero-right { position: relative; overflow: hidden; }
        .lwv-hero-photo {
          width: 100%; height: 100%; object-fit: cover; object-position: center 20%;
          display: block;
        }
        .lwv-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(90deg, #1c0f08 0%, transparent 25%, transparent 75%, rgba(14,7,4,0.4) 100%);
        }

        .lwv-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(200,133,90,0.12); border: 1px solid rgba(200,133,90,0.3);
          padding: 7px 14px; border-radius: 100px;
          font-size: 11px; font-weight: 600; color: #e8a87c;
          letter-spacing: 0.06em; text-transform: uppercase;
          margin-bottom: 20px; width: fit-content; position: relative; z-index: 1;
          font-family: 'DM Sans', system-ui;
        }
        .lwv-eyebrow::before {
          content: ''; width: 5px; height: 5px; border-radius: 50%;
          background: #c8855a; flex-shrink: 0;
          animation: lwvPulse 2s ease-in-out infinite;
        }
        @keyframes lwvPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }

        .lwv-hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(40px, 5vw, 68px); line-height: 1.05;
          font-weight: 900; letter-spacing: -2px; margin-bottom: 16px;
          position: relative; z-index: 1; color: #f5ede3;
        }
        .lwv-hero-title em { font-style: italic; color: #c8855a; }

        .lwv-hero-desc {
          font-size: 15px; color: #9a7860; line-height: 1.75;
          max-width: 480px; margin-bottom: 32px; font-weight: 300;
          position: relative; z-index: 1;
          font-family: 'DM Sans', system-ui;
        }
        .lwv-hero-desc strong { color: #f5ede3; font-weight: 600; }

        .lwv-ctas { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 40px; position: relative; z-index: 1; }

        .lwv-btn-primary {
          background: #c8855a; color: #fff; padding: 14px 28px;
          border-radius: 100px; font-size: 14px; font-weight: 600;
          border: none; cursor: pointer; transition: all 0.25s;
          text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
          font-family: 'DM Sans', system-ui;
        }
        .lwv-btn-primary:hover { background: #e8a87c; transform: translateY(-2px); box-shadow: 0 16px 32px rgba(200,133,90,0.3); }

        .lwv-btn-secondary {
          background: transparent; color: #f5ede3; padding: 14px 28px;
          border-radius: 100px; font-size: 14px; font-weight: 500;
          border: 1px solid rgba(200,133,90,0.35); cursor: pointer; transition: all 0.25s;
          text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
          font-family: 'DM Sans', system-ui;
        }
        .lwv-btn-secondary:hover { border-color: #c8855a; background: rgba(200,133,90,0.08); }

        .lwv-stats { display: flex; gap: 32px; flex-wrap: wrap; position: relative; z-index: 1; }
        .lwv-stat { border-left: 2px solid #c8855a; padding-left: 14px; }
        .lwv-stat-num {
          font-family: 'Playfair Display', serif; font-size: 28px;
          font-weight: 700; color: #f5ede3; line-height: 1;
        }
        .lwv-stat-label { font-size: 11px; color: #9a7860; margin-top: 3px; font-family: 'DM Sans', system-ui; }

        .lwv-section { padding: 72px 40px; }
        .lwv-container { max-width: 1100px; margin: 0 auto; }
        .lwv-section-label {
          font-size: 11px; font-weight: 700; letter-spacing: 0.15em;
          text-transform: uppercase; color: #c8855a; margin-bottom: 12px;
          font-family: 'DM Sans', system-ui;
        }
        .lwv-section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(30px, 4vw, 48px); font-weight: 700;
          line-height: 1.1; letter-spacing: -1px; margin-bottom: 14px; color: #f5ede3;
        }
        .lwv-section-title em { font-style: italic; color: #c8855a; }
        .lwv-divider {
          width: 48px; height: 3px;
          background: linear-gradient(90deg, #c8855a, #e8a87c);
          border-radius: 2px; margin: 16px 0 32px;
        }

        /* ABOUT */
        .lwv-about { background: #1c0f08; }
        .lwv-about-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;
        }
        .lwv-about-photo-wrap {
          position: relative; border-radius: 24px; overflow: hidden; aspect-ratio: 3/4;
        }
        .lwv-about-photo { width: 100%; height: 100%; object-fit: cover; object-position: top; display: block; }
        .lwv-about-badge {
          position: absolute; bottom: 20px; left: 20px; right: 20px;
          background: rgba(14,7,4,0.85); backdrop-filter: blur(12px);
          border: 1px solid rgba(200,133,90,0.25); border-radius: 16px; padding: 16px;
        }
        .lwv-about-badge-name {
          font-family: 'Playfair Display', serif; font-size: 18px;
          font-weight: 700; margin-bottom: 4px; color: #f5ede3;
        }
        .lwv-about-badge-role { font-size: 12px; color: #9a7860; line-height: 1.5; font-family: 'DM Sans', system-ui; }
        .lwv-tag-row { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 20px; }
        .lwv-tag {
          background: rgba(255,255,255,0.05); border: 1px solid rgba(200,133,90,0.15);
          color: #9a7860; padding: 4px 11px; border-radius: 100px; font-size: 11px;
          font-family: 'DM Sans', system-ui;
        }
        .lwv-langs { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 16px; }
        .lwv-lang {
          padding: 6px 14px; border-radius: 100px; font-size: 12px; font-weight: 600;
          background: #4a2810; border: 1px solid rgba(200,133,90,0.25);
          color: #f5ede3; font-family: 'DM Sans', system-ui;
        }
        .lwv-about-text p {
          color: #9a7860; font-size: 15px; line-height: 1.8;
          margin-bottom: 14px; font-weight: 300; font-family: 'DM Sans', system-ui;
        }
        .lwv-about-text p strong { color: #f5ede3; font-weight: 600; }

        /* FOR WHO */
        .lwv-for { background: #0e0704; }
        .lwv-for-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 32px;
        }
        .lwv-for-card {
          background: #1c0f08; border: 1px solid rgba(200,133,90,0.15);
          border-radius: 18px; padding: 22px; transition: all 0.25s;
        }
        .lwv-for-card:hover { border-color: #c8855a; transform: translateY(-3px); background: #2e1a0e; }
        .lwv-for-icon { font-size: 26px; margin-bottom: 10px; }
        .lwv-for-title { font-size: 15px; font-weight: 600; margin-bottom: 6px; color: #f5ede3; font-family: 'DM Sans', system-ui; }
        .lwv-for-desc { font-size: 13px; color: #9a7860; line-height: 1.6; font-weight: 300; font-family: 'DM Sans', system-ui; }

        /* PRICING */
        .lwv-pricing { background: #1c0f08; }
        .lwv-pricing-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 32px;
        }
        .lwv-price-card {
          background: #2e1a0e; border: 1px solid rgba(200,133,90,0.15);
          border-radius: 22px; padding: 26px; transition: all 0.25s;
          display: flex; flex-direction: column;
        }
        .lwv-price-card.featured {
          background: linear-gradient(135deg, #4a2810, #2e1a0e);
          border-color: #c8855a;
        }
        .lwv-price-card:hover { transform: translateY(-4px); border-color: #c8855a; }
        .lwv-price-badge {
          display: inline-block; background: rgba(200,133,90,0.15);
          border: 1px solid rgba(200,133,90,0.35); color: #e8a87c;
          padding: 4px 12px; border-radius: 100px; font-size: 11px; font-weight: 700;
          letter-spacing: 0.06em; margin-bottom: 12px; width: fit-content;
          font-family: 'DM Sans', system-ui;
        }
        .lwv-price-name {
          font-family: 'Playfair Display', serif; font-size: 20px;
          font-weight: 700; margin-bottom: 6px; color: #f5ede3;
        }
        .lwv-price-desc {
          font-size: 13px; color: #9a7860; margin-bottom: 18px;
          line-height: 1.5; font-weight: 300; flex: 1;
          font-family: 'DM Sans', system-ui;
        }
        .lwv-price-amount {
          font-family: 'Playfair Display', serif; font-size: 36px;
          font-weight: 700; line-height: 1; margin-bottom: 4px; color: #f5ede3;
        }
        .lwv-price-amount span { font-size: 14px; font-weight: 400; color: #9a7860; }
        .lwv-price-note { font-size: 12px; color: #9a7860; margin-bottom: 18px; font-family: 'DM Sans', system-ui; }
        .lwv-price-features { list-style: none; margin-bottom: 22px; }
        .lwv-price-features li {
          font-size: 13px; color: #9a7860; padding: 5px 0;
          border-bottom: 1px solid rgba(200,133,90,0.07);
          display: flex; gap: 7px; align-items: center; font-weight: 300;
          font-family: 'DM Sans', system-ui;
        }
        .lwv-price-features li::before { content: '✓'; color: #c8855a; font-weight: 700; font-size: 11px; flex-shrink: 0; }

        /* REVIEWS */
        .lwv-reviews { background: #0e0704; }
        .lwv-reviews-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 32px;
        }
        .lwv-review-card {
          background: #1c0f08; border: 1px solid rgba(200,133,90,0.12);
          border-radius: 18px; padding: 22px; display: flex; flex-direction: column; gap: 12px;
        }
        .lwv-review-stars { color: #d4a45a; font-size: 13px; }
        .lwv-review-text {
          font-size: 13px; line-height: 1.7; color: #f5ede3;
          font-weight: 300; font-style: italic; flex: 1;
          font-family: 'DM Sans', system-ui;
        }
        .lwv-review-author {
          display: flex; align-items: center; gap: 10px;
          padding-top: 10px; border-top: 1px solid rgba(200,133,90,0.1);
        }
        .lwv-review-avatar {
          width: 32px; height: 32px; border-radius: 50%;
          background: linear-gradient(135deg, #c8855a, #4a2810);
          display: flex; align-items: center; justify-content: center;
          font-size: 13px; font-weight: 700; color: #fff; flex-shrink: 0;
        }
        .lwv-review-name { font-size: 13px; font-weight: 600; color: #f5ede3; font-family: 'DM Sans', system-ui; }
        .lwv-review-level { font-size: 11px; color: #9a7860; font-family: 'DM Sans', system-ui; }

        /* CTA */
        .lwv-cta-section {
          padding: 80px 40px; text-align: center; position: relative; overflow: hidden;
          background: linear-gradient(135deg, #4a2810, #1c0f08);
        }
        .lwv-cta-section::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,133,90,0.18), transparent 70%);
          pointer-events: none;
        }
        .lwv-cta-section > * { position: relative; z-index: 1; }
        .lwv-cta-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(30px, 5vw, 56px); font-weight: 700;
          line-height: 1.1; margin-bottom: 16px; letter-spacing: -1px; color: #f5ede3;
        }
        .lwv-cta-title em { font-style: italic; color: #e8a87c; }
        .lwv-cta-sub {
          font-size: 16px; color: #9a7860; margin-bottom: 32px; font-weight: 300;
          font-family: 'DM Sans', system-ui;
        }
        .lwv-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

        /* FOOTER */
        .lwv-footer {
          background: #0e0704; padding: 28px 40px;
          border-top: 1px solid rgba(200,133,90,0.08);
          display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;
        }
        .lwv-footer-logo {
          font-family: 'Playfair Display', serif; font-size: 16px; font-weight: 700; color: #f5ede3;
        }
        .lwv-footer-logo span { color: #c8855a; }
        .lwv-footer-links { display: flex; gap: 18px; flex-wrap: wrap; }
        .lwv-footer-links a {
          font-size: 12px; color: #9a7860; text-decoration: none; transition: color 0.2s;
          font-family: 'DM Sans', system-ui;
        }
        .lwv-footer-links a:hover { color: #c8855a; }
        .lwv-footer-copy { font-size: 11px; color: #9a7860; font-family: 'DM Sans', system-ui; }

        @media(max-width:900px){
          .lwv-nav {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            width: 100% !important;
            z-index: 9999 !important;
            padding: 10px 16px !important;
            background: rgba(14,7,4,0.97) !important;
            backdrop-filter: blur(20px) !important;
          }
          .lwv-logo { font-size: 15px; }
          .lwv-nav-links { display: none; }
          .lwv-nav-langs { margin-left: 0; }
          .lwv-lang-btn { padding: 3px 9px !important; font-size: 11px !important; }
          .lwv-hero {
            grid-template-columns: 1fr;
            min-height: auto;
            padding-top: 60px;
            margin-bottom: 0;
          }
          .lwv-hero-right { height: 75vw; min-height: 280px; order: 1; }
          .lwv-hero-left { padding: 28px 20px 32px; order: 2; min-height: auto; }
          .lwv-hero-photo { object-position: center 20%; }
          .lwv-section { padding: 52px 20px; }
          .lwv-about-grid { grid-template-columns: 1fr; gap: 36px; }
          .lwv-for-grid { grid-template-columns: 1fr; }
          .lwv-pricing-grid { grid-template-columns: 1fr; }
          .lwv-reviews-grid { grid-template-columns: 1fr; }
          .lwv-footer { flex-direction: column; text-align: center; padding: 24px 20px; }
          .lwv-cta-section { padding: 60px 20px; }
        }
        .lwv-nav-desktop-link { display: inline-flex !important; }
        @media(max-width:900px){ .lwv-nav-desktop-link { display: none !important; } }
      `}</style>

      <nav className="lwv-nav" style={{position:'fixed',top:0,left:0,right:0,zIndex:99999,padding:'12px 32px',display:'flex',alignItems:'center',justifyContent:'space-between',background:'#0e0704',borderBottom:'1px solid rgba(200,133,90,0.12)'}}>
        <a href="/" className="lwv-logo" style={{fontFamily:"'Playfair Display',serif",fontSize:19,fontWeight:700,color:'#f5ede3',textDecoration:'none'}}>
          Learn<span style={{color:'#c8855a'}}>With</span>Vika
        </a>
        <div style={{display:'flex',gap:24,alignItems:'center'}}>
          <a onClick={()=>document.getElementById('lwv-about')?.scrollIntoView({behavior:'smooth'})} style={{color:'#9a7860',fontSize:13,cursor:'pointer',textDecoration:'none',fontFamily:"'DM Sans',system-ui"}} className="lwv-nav-desktop-link">About</a>
          <a onClick={()=>document.getElementById('lwv-for')?.scrollIntoView({behavior:'smooth'})} style={{color:'#9a7860',fontSize:13,cursor:'pointer',textDecoration:'none',fontFamily:"'DM Sans',system-ui"}} className="lwv-nav-desktop-link">For who</a>
          <a onClick={()=>document.getElementById('lwv-pricing')?.scrollIntoView({behavior:'smooth'})} style={{color:'#9a7860',fontSize:13,cursor:'pointer',textDecoration:'none',fontFamily:"'DM Sans',system-ui"}} className="lwv-nav-desktop-link">Pricing</a>
          <button id="lwv-theme-btn" onClick={()=>{
  const html = document.documentElement;
  const isLight = html.getAttribute('data-theme')==='light';
  const next = isLight ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('lwv-theme', next);
  const btn = document.getElementById('lwv-theme-btn');
  if(btn) btn.textContent = next==='light' ? '🌙 Dark' : '☀️ Light';
}} className="lwv-nav-desktop-link" style={{background:'transparent',border:'1px solid rgba(200,133,90,0.3)',color:'#f5ede3',padding:'8px 18px',borderRadius:100,fontSize:13,cursor:'pointer',fontFamily:"'DM Sans',system-ui",fontWeight:600}}>🌙 Dark</button>
        </div>
        <div style={{display:'flex',gap:6}}>
          <button className="lwv-lang-btn active" data-lang="en" style={{padding:'4px 12px',borderRadius:100,fontSize:12,fontWeight:600,border:'1px solid rgba(200,133,90,0.25)',background:'transparent',color:'#9a7860',cursor:'pointer',fontFamily:"'DM Sans',system-ui"}}>EN</button>
          <button className="lwv-lang-btn" data-lang="ua" style={{padding:'4px 12px',borderRadius:100,fontSize:12,fontWeight:600,border:'1px solid rgba(200,133,90,0.25)',background:'transparent',color:'#9a7860',cursor:'pointer',fontFamily:"'DM Sans',system-ui"}}>UA</button>
          <button className="lwv-lang-btn" data-lang="ru" style={{padding:'4px 12px',borderRadius:100,fontSize:12,fontWeight:600,border:'1px solid rgba(200,133,90,0.25)',background:'transparent',color:'#9a7860',cursor:'pointer',fontFamily:"'DM Sans',system-ui"}}>RU</button>
        </div>
      </nav>

      <div
        dangerouslySetInnerHTML={{
          __html: `
<!-- LANG BAR -->

<!-- HERO -->
<section class="lwv-hero">
  <div class="lwv-hero-left">
    <div class="lwv-eyebrow" id="lwv-eyebrow">LearnWithVika · AI-Powered English</div>
    <h1 class="lwv-hero-title" id="lwv-hero-title">Learn English<br><em>the smart way</em></h1>
    <p class="lwv-hero-desc" id="lwv-hero-desc">
      <strong>Viktoriia Mykhalova</strong> — English tutor, Software Engineering student,
      CEO of SOLVION educational direction, and founder of the LearnWithVika AI-powered learning platform.<br><br>
      1.5+ years of teaching focused on speaking, practical grammar, AI-assisted learning,
      and modern interactive education for <strong>A1–B2 students</strong>.
    </p>
    <div class="lwv-ctas">
      <a href="/placement-test" class="lwv-btn-primary" id="lwv-cta1">✦ Take placement test</a>
      <a href="/request" class="lwv-btn-secondary" id="lwv-cta2">🎯 Book your free lesson</a>
    </div>
    <div class="lwv-stats">
      <div class="lwv-stat"><div class="lwv-stat-num">A1–B2</div><div class="lwv-stat-label" id="lwv-s1">Levels covered</div></div>
      <div class="lwv-stat"><div class="lwv-stat-num">AI</div><div class="lwv-stat-label" id="lwv-s2">Powered platform</div></div>
      <div class="lwv-stat"><div class="lwv-stat-num">6+</div><div class="lwv-stat-label" id="lwv-s3">Languages spoken</div></div>
    </div>
  </div>
  <div class="lwv-hero-right">
    <img class="lwv-hero-photo" src="/landing/vika-hero.jpg" alt="Viktoriia Mykhalova" />
    <div class="lwv-hero-overlay"></div>
  </div>
</section>

<!-- ABOUT -->
<section class="lwv-section lwv-about" id="lwv-about">
  <div class="lwv-container">
    <div class="lwv-about-grid">
      <div class="lwv-about-photo-wrap">
        <img class="lwv-about-photo" src="/landing/vika-about.jpg" alt="Viktoriia" />
        <div class="lwv-about-badge">
          <div class="lwv-about-badge-name">Viktoriia Mykhalova</div>
          <div class="lwv-about-badge-role" id="lwv-badge-role">English Tutor · SOLVION CEO · LearnWithVika Founder</div>
        </div>
      </div>
      <div class="lwv-about-text">
        <div class="lwv-section-label" id="lwv-about-label">About me</div>
        <h2 class="lwv-section-title" id="lwv-about-title">Not just a tutor —<br><em>a tech-savvy mentor</em></h2>
        <div class="lwv-divider"></div>
        <p id="lwv-ap1">I'm a <strong>Software Engineering student</strong> and English tutor who builds AI-powered educational tools while teaching real students every day.</p>
        <p id="lwv-ap2">As <strong>CEO of SOLVION</strong> educational direction and founder of LearnWithVika — I combine modern technology with real, effective English teaching.</p>
        <p id="lwv-ap3">My approach: <strong>friendly, interactive, speaking-focused</strong> — no boring theory, just real English that works.</p>
        <div class="lwv-tag-row">
          <span class="lwv-tag">🤖 AI Tools</span>
          <span class="lwv-tag">💬 Speaking</span>
          <span class="lwv-tag">📐 Grammar</span>
          <span class="lwv-tag">✈️ Travel English</span>
          <span class="lwv-tag">💼 Work English</span>
          <span class="lwv-tag">💻 IT English</span>
          <span class="lwv-tag">💄 Beauty Industry</span>
          <span class="lwv-tag">👥 Mini-groups</span>
        </div>
        <p style="font-size:12px;color:#c8855a;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;margin-top:20px;margin-bottom:8px;">I speak</p>
        <div class="lwv-langs">
          <span class="lwv-lang">🇬🇧 English</span>
          <span class="lwv-lang">🇺🇦 Ukrainian</span>
          <span class="lwv-lang">🇷🇺 Russian</span>
          <span class="lwv-lang">🇵🇱 Polish</span>
          <span class="lwv-lang">🇨🇿 Czech</span>
          <span class="lwv-lang">🇸🇰 Slovak</span>
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:24px">
          <a href="https://t.me/englishwith_viky" target="_blank" class="lwv-btn-secondary" style="font-size:13px;padding:11px 20px">✈️ Telegram</a>
          <a href="/request" class="lwv-btn-primary" style="font-size:13px;padding:11px 20px" id="lwv-about-cta">📝 Book free trial</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FOR WHO -->
<section class="lwv-section lwv-for" id="lwv-for">
  <div class="lwv-container">
    <div class="lwv-section-label" id="lwv-for-label">For who</div>
    <h2 class="lwv-section-title" id="lwv-for-title">This is for <em>you</em> if...</h2>
    <div class="lwv-divider"></div>
    <div class="lwv-for-grid">
      <div class="lwv-for-card"><div class="lwv-for-icon">✈️</div><div class="lwv-for-title" id="lwv-f1t">Planning to travel</div><div class="lwv-for-desc" id="lwv-f1d">Need practical English for airports, hotels, restaurants and everyday life abroad.</div></div>
      <div class="lwv-for-card"><div class="lwv-for-icon">💼</div><div class="lwv-for-title" id="lwv-f2t">Working internationally</div><div class="lwv-for-desc" id="lwv-f2d">Want to communicate confidently with colleagues and clients in English.</div></div>
      <div class="lwv-for-card"><div class="lwv-for-icon">🎓</div><div class="lwv-for-title" id="lwv-f3t">Student or teenager</div><div class="lwv-for-desc" id="lwv-f3d">Preparing for exams or want to finally start speaking without fear.</div></div>
      <div class="lwv-for-card"><div class="lwv-for-icon">💄</div><div class="lwv-for-title" id="lwv-f4t">Beauty industry pro</div><div class="lwv-for-desc" id="lwv-f4d">Work with international clients and need industry-specific English.</div></div>
      <div class="lwv-for-card"><div class="lwv-for-icon">💻</div><div class="lwv-for-title" id="lwv-f5t">IT professional</div><div class="lwv-for-desc" id="lwv-f5d">Need English for tech communication, documentation, international projects.</div></div>
      <div class="lwv-for-card"><div class="lwv-for-icon">😰</div><div class="lwv-for-title" id="lwv-f6t">Afraid to speak</div><div class="lwv-for-desc" id="lwv-f6d">Understand everything but freeze when speaking. We fix that — safely and gently.</div></div>
    </div>
  </div>
</section>

<!-- PRICING -->
<section class="lwv-section lwv-pricing" id="lwv-pricing">
  <div class="lwv-container">
    <div class="lwv-section-label" id="lwv-price-label">Pricing</div>
    <h2 class="lwv-section-title" id="lwv-price-title">Simple, <em>transparent</em> pricing</h2>
    <div class="lwv-divider"></div>
    <div class="lwv-pricing-grid">
      <div class="lwv-price-card">
        <div class="lwv-price-badge" id="lwv-pb1">Individual · Packages</div>
        <div class="lwv-price-name" id="lwv-pn1">Individual lessons</div>
        <div class="lwv-price-desc" id="lwv-pd1">Personal lessons with Viktoriia. Speaking, grammar, real-life English. First lesson is free.</div>
        <div class="lwv-price-amount">280 <span id="lwv-pu1">zł</span></div>
        <div class="lwv-price-note" id="lwv-pnote1">4-lesson package · 70 zł/lesson</div>
        <ul class="lwv-price-features">
          <li id="lwv-pf1a">First lesson free</li>
          <li id="lwv-pf1b">8-lesson pack: 480 zł (60 zł each)</li>
          <li id="lwv-pf1c">Personal approach</li>
          <li id="lwv-pf1d">Flexible scheduling</li>
          <li id="lwv-pf1e">Speaking & grammar focus</li>
        </ul>
        <a href="/request" class="lwv-btn-secondary" style="text-align:center;justify-content:center" id="lwv-p1cta">Book free trial</a>
      </div>
      <div class="lwv-price-card featured">
        <div class="lwv-price-badge" id="lwv-pb2">⭐ Group · B1 level</div>
        <div class="lwv-price-name" id="lwv-pn2">B1 Mini-group</div>
        <div class="lwv-price-desc" id="lwv-pd2">Small group of 3–4 students at B1 level. Interactive, communicative, affordable.</div>
        <div class="lwv-price-amount">50 <span id="lwv-pu2">zł</span></div>
        <div class="lwv-price-note" id="lwv-pnote2">per person per lesson · max 3–4 students</div>
        <ul class="lwv-price-features">
          <li id="lwv-pf2a">B1 CEFR level</li>
          <li id="lwv-pf2b">Max 3–4 students per group</li>
          <li id="lwv-pf2c">Speaking practice in group</li>
          <li id="lwv-pf2d">Grammar & vocabulary</li>
          <li id="lwv-pf2e">AI materials included</li>
        </ul>
        <a href="/request" class="lwv-btn-primary" style="text-align:center;justify-content:center" id="lwv-p2cta">Join the group</a>
      </div>
      <div class="lwv-price-card">
        <div class="lwv-price-badge" id="lwv-pb3">Digital · Self-study</div>
        <div class="lwv-price-name" id="lwv-pn3">B1–B2 Pack</div>
        <div class="lwv-price-desc" id="lwv-pd3">Grammar revision, vocabulary, speaking prompts and useful phrases for everyday English.</div>
        <div class="lwv-price-amount">99 <span id="lwv-pu3">zł</span></div>
        <div class="lwv-price-note" id="lwv-pnote3">one-time purchase · instant access</div>
        <ul class="lwv-price-features">
          <li id="lwv-pf3a">Grammar revision</li>
          <li id="lwv-pf3b">Vocabulary flashcards</li>
          <li id="lwv-pf3c">Speaking prompts</li>
          <li id="lwv-pf3d">Useful phrases PDF</li>
        </ul>
        <a href="/product" class="lwv-btn-secondary" style="text-align:center;justify-content:center" id="lwv-p3cta">Buy now 🚀</a>
      </div>
    </div>
  </div>
</section>

<!-- REVIEWS -->
<section class="lwv-section lwv-reviews" id="lwv-reviews">
  <div class="lwv-container">
    <div class="lwv-section-label" id="lwv-rev-label">Student reviews</div>
    <h2 class="lwv-section-title" id="lwv-rev-title">Real words from <em>real students</em> ❤️</h2>
    <div class="lwv-divider"></div>
    <div class="lwv-reviews-grid">
      <div class="lwv-review-card">
        <div class="lwv-review-stars">★★★★★</div>
        <div class="lwv-review-text" id="lwv-r1">"I am so grateful to Vika! When I first started, speaking English felt like a huge challenge. She helped me improve my grammar, vocabulary and prepared me for interviews. I felt confident during the interview for an HR Manager position at an American company. I got the job!"</div>
        <div class="lwv-review-author"><div class="lwv-review-avatar">A</div><div><div class="lwv-review-name" id="lwv-r1n">Student</div><div class="lwv-review-level" id="lwv-r1l">Job interview prep · Got the job! 🎉</div></div></div>
      </div>
      <div class="lwv-review-card">
        <div class="lwv-review-stars">★★★★★</div>
        <div class="lwv-review-text" id="lwv-r2">"I came at A2 level half a year ago and now the fear of speaking is completely gone. I still make mistakes but I'm no longer afraid to start a conversation and people understand me!"</div>
        <div class="lwv-review-author"><div class="lwv-review-avatar">S</div><div><div class="lwv-review-name" id="lwv-r2n">Student</div><div class="lwv-review-level" id="lwv-r2l">A2 → B1 · 6 months</div></div></div>
      </div>
      <div class="lwv-review-card">
        <div class="lwv-review-stars">★★★★★</div>
        <div class="lwv-review-text" id="lwv-r3">"Lessons are easy-going and enjoyable 🙌 No boring theory — everything is clear, lively and practical. The tutor always supports you, explains until you get it and motivates you not to quit 💙"</div>
        <div class="lwv-review-author"><div class="lwv-review-avatar">K</div><div><div class="lwv-review-name" id="lwv-r3n">Student</div><div class="lwv-review-level" id="lwv-r3l">Regular student</div></div></div>
      </div>
      <div class="lwv-review-card">
        <div class="lwv-review-stars">★★★★★</div>
        <div class="lwv-review-text" id="lwv-r4">"I really enjoyed the trial lesson and I'm excited to continue our classes. Thank you so much!"</div>
        <div class="lwv-review-author"><div class="lwv-review-avatar">M</div><div><div class="lwv-review-name" id="lwv-r4n">Student</div><div class="lwv-review-level" id="lwv-r4l">After first trial lesson</div></div></div>
      </div>
      <div class="lwv-review-card">
        <div class="lwv-review-stars">★★★★★</div>
        <div class="lwv-review-text" id="lwv-r5">"I love the flashcards with words and phrases — I memorize faster and immediately see how to use them in context. After these lessons you actually want to speak and apply everything in practice."</div>
        <div class="lwv-review-author"><div class="lwv-review-avatar">O</div><div><div class="lwv-review-name" id="lwv-r5n">Student</div><div class="lwv-review-level" id="lwv-r5l">Regular student</div></div></div>
      </div>
      <div class="lwv-review-card">
        <div class="lwv-review-stars">★★★★★</div>
        <div class="lwv-review-text" id="lwv-r6">"Lessons are calm and stress-free. You explain everything clearly and accessibly, the atmosphere is pleasant, studying is interesting and easy. Overall, a very good impression."</div>
        <div class="lwv-review-author"><div class="lwv-review-avatar">N</div><div><div class="lwv-review-name" id="lwv-r6n">Student</div><div class="lwv-review-level" id="lwv-r6l">Regular student</div></div></div>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="lwv-cta-section">
  <h2 class="lwv-cta-title" id="lwv-cta-title">Ready to start<br><em>speaking English?</em></h2>
  <p class="lwv-cta-sub" id="lwv-cta-sub">Take a free placement test and get your personalized learning plan today.</p>
  <div class="lwv-cta-btns">
    <a href="/placement-test" class="lwv-btn-primary" style="font-size:15px;padding:16px 32px" id="lwv-cta-main">✦ Start with free test</a>
    <a href="/request" class="lwv-btn-secondary" style="font-size:15px;padding:16px 32px" id="lwv-cta-contact">Contact Viktoriia</a>
  </div>
</section>

<!-- FOOTER -->
<footer class="lwv-footer">
  <div class="lwv-footer-logo">Learn<span>With</span>Vika</div>
  <div class="lwv-footer-links">
    <a href="/placement-test">Placement test</a>
    <a href="/recommendation">AI recommendation</a>
    <a href="/product">Digital products</a>
    <a href="/request">Contact</a>
    <a href="https://t.me/englishwith_viky" target="_blank">Telegram</a>
    <a href="https://www.instagram.com/victtorygonch" target="_blank">Instagram</a>
  </div>
  <div class="lwv-footer-copy">© 2025 LearnWithVika · Viktoriia Mykhalova</div>

          `,
        }}
      />
    </>
  );
}
