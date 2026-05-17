// app/leads/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";

type Lead = {
  id: number;
  name: string;
  email: string;
  level: string | null;
  message: string | null;
  status: string;
  created_at: string;
};

function formatDate(s: string) {
  // created_at приходит как "2026-02-10 14:54:16"
  // покажем красиво, без фанатизма
  return s?.replace(" ", "  •  ") ?? "";
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [q, setQ] = useState("");
  const [status, setStatus] = useState<"ALL" | "NEW">("ALL");

  async function load() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/leads", { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      setLeads(Array.isArray(data?.leads) ? data.leads : []);
    } catch (e: any) {
      setError(e?.message ?? "Failed to load");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();

    return leads.filter((l) => {
      const matchesStatus = status === "ALL" ? true : l.status === "NEW";

      const haystack = [
        l.name,
        l.email,
        l.level ?? "",
        l.message ?? "",
        l.status,
        l.created_at,
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery = query ? haystack.includes(query) : true;

      return matchesStatus && matchesQuery;
    });
  }, [leads, q, status]);

  return (
    <main style={{ padding: 24, maxWidth: 1100, margin: "0 auto" }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>Заявки (Leads)</h1>
      <p style={{ marginTop: 0, color: "#666" }}>
        Источник: <code>/api/leads</code> (SQLite)
      </p>

      {/* Toolbar */}
      <div
        style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          alignItems: "center",
          margin: "16px 0 18px",
        }}
      >
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Поиск: имя, email, уровень, сообщение…"
          style={{
            flex: "1 1 320px",
            padding: "10px 12px",
            border: "1px solid #ddd",
            borderRadius: 10,
          }}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as any)}
          style={{
            padding: "10px 12px",
            border: "1px solid #ddd",
            borderRadius: 10,
            background: "white",
          }}
        >
          <option value="ALL">Все статусы</option>
          <option value="NEW">Только NEW</option>
        </select>

        <button
          onClick={load}
          style={{
            padding: "10px 14px",
            border: "1px solid #111",
            borderRadius: 10,
            background: "#111",
            color: "white",
            cursor: "pointer",
          }}
        >
          Обновить
        </button>
      </div>

      {/* States */}
      {loading && <p>Загружаю заявки…</p>}

      {error && (
        <div
          style={{
            padding: 12,
            border: "1px solid #ffb4b4",
            background: "#fff0f0",
            borderRadius: 10,
            color: "#8a1f1f",
          }}
        >
          Ошибка: {error}
        </div>
      )}

      {!loading && !error && filtered.length === 0 && (
        <p>Пока нет заявок (или фильтры всё скрыли).</p>
      )}

      {/* Table */}
      {!loading && !error && filtered.length > 0 && (
        <div
          style={{
            overflowX: "auto",
            border: "1px solid #eee",
            borderRadius: 12,
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#fafafa" }}>
                {["ID", "Имя", "Email", "Уровень", "Сообщение", "Статус", "Дата"]
                  .map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: "left",
                        padding: 12,
                        borderBottom: "1px solid #eee",
                        fontSize: 13,
                        color: "#444",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {h}
                    </th>
                  ))}
              </tr>
            </thead>

            <tbody>
              {filtered.map((l) => (
                <tr key={l.id}>
                  <td style={{ padding: 12, borderBottom: "1px solid #f1f1f1" }}>
                    {l.id}
                  </td>
                  <td style={{ padding: 12, borderBottom: "1px solid #f1f1f1" }}>
                    {l.name}
                  </td>
                  <td style={{ padding: 12, borderBottom: "1px solid #f1f1f1" }}>
                    <a href={`mailto:${l.email}`}>{l.email}</a>
                  </td>
                  <td style={{ padding: 12, borderBottom: "1px solid #f1f1f1" }}>
                    {l.level ?? "—"}
                  </td>
                  <td style={{ padding: 12, borderBottom: "1px solid #f1f1f1" }}>
                    {l.message ?? "—"}
                  </td>
                  <td style={{ padding: 12, borderBottom: "1px solid #f1f1f1" }}>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "4px 10px",
                        borderRadius: 999,
                        border: "1px solid #ddd",
                        fontSize: 12,
                      }}
                    >
                      {l.status}
                    </span>
                  </td>
                  <td style={{ padding: 12, borderBottom: "1px solid #f1f1f1" }}>
                    {formatDate(l.created_at)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
