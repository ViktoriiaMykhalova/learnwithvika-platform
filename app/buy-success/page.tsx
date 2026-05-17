export default function BuySuccessPage() {
  return (
    <main
      style={{
        maxWidth: 760,
        margin: "0 auto",
        padding: "40px 16px",
        textAlign: "center",
      }}
    >
      <h1>🎉 Спасибо за покупку!</h1>

      <p style={{ marginTop: 12 }}>
        Ваш заказ успешно оформлен. Мы свяжемся с вами при необходимости.
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
          textDecoration: "none",
        }}
      >
        ← Вернуться на главную
      </a>
    </main>
  );
}