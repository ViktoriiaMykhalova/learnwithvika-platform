"use client";

import { useState } from "react";

export default function ProductPage() {
  const [loading, setLoading] = useState(false);

  const handleBuy = async () => {
    setLoading(true);

    const res = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Test User",
        email: "test@mail.com",
        product: "English B1-B2 Pack",
        price: "99",
      }),
    });

    const data = await res.json();
    console.log(data);

    setLoading(false);

    if (data.ok) {
      alert("Покупка успешна!");
    } else {
      alert("Ошибка при покупке");
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "700px", margin: "0 auto" }}>
      <h1>English B1–B2 Pack</h1>
      <p>Полный сборник материалов для изучения английского языка.</p>
      <p>Цена: 99 zł</p>

      <button
        onClick={handleBuy}
        disabled={loading}
        style={{
          padding: "12px 20px",
          borderRadius: "8px",
          border: "none",
          background: "black",
          color: "white",
          cursor: "pointer",
        }}
      >
        {loading ? "Loading..." : "Купить"}
      </button>
    </div>
  );
}