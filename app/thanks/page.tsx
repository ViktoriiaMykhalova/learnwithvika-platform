export default function ThanksPage() {
  return (
    <main style={{
      maxWidth: 760,
      margin: "0 auto",
      padding: "40px 16px",
      textAlign: "center"
    }}>
      <h1>✅ Заявка отправлена!</h1>

      <p style={{ marginTop: 12 }}>
        Спасибо! Я свяжусь с тобой в ближайшее время ❤️
      </p>

      <a
        href="/"
        style={{
          display: "inline-block",
          marginTop: 20,
          padding: "10px 18px",
          borderRadius: 12,
          background: "#34d399",
          color: "#000",
          fontWeight: 700,
          textDecoration: "none"
        }}
      >
        ← Вернуться на главную
      </a>
    </main>

    
  );
}
