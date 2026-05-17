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

export default function AdminPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  const sorted = useMemo(() => {
    return [...leads].sort((a, b) => b.id - a.id);
  }, [leads]);

  async function loadLeads() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/leads", { cache: "no-store" });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data?.error || "Failed to load leads");
      }

      setLeads(data.leads || []);
    } catch (e: any) {
      setError(e?.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadLeads();
  }, []);

  return (
    <main style={{ maxWidth: 1100, margin: "40px auto", padding: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, margin: 0 }}>Admin: Leads</h1>

        <button
          onClick={loadLeads}
          style={{ padding: "10px 14px", fontWeight: 700, cursor: "pointer" }}
        >
          Обновить
        </button>

        <div style={{ marginLeft: "auto", opacity: 0.7 }}>
          Всего заявок: <b>{sorted.length}</b>
        </div>
      </div>

      <p style={{ marginTop: 8, opacity: 0.75 }}>
        Источник данных: <code>/api/leads</code> (SQLite через твой backend).
      </p>

      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: "crimson" }}>Ошибка: {error}</p>}

      {!loading && !error && (
        <div style={{ overflowX: "auto", marginTop: 14 }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              border: "1px solid #ddd",
            }}
          >
            <thead>
              <tr style={{ background: "#f6f6f6" }}>
                <th style={th}>ID</th>
                <th style={th}>Имя</th>
                <th style={th}>Email</th>
                <th style={th}>Уровень</th>
                <th style={th}>Сообщение</th>
                <th style={th}>Статус</th>
                <th style={th}>Дата</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((l) => (
                <tr key={l.id}>
                  <td style={td}>{l.id}</td>
                  <td style={td}>{l.name}</td>
                  <td style={td}>{l.email}</td>
                  <td style={td}>{l.level || "-"}</td>
                  <td style={td}>{l.message || "-"}</td>
                  <td style={td}>{l.status}</td>
                  <td style={td}>{l.created_at}</td>
                </tr>
              ))}

              {sorted.length === 0 && (
                <tr>
                  <td style={td} colSpan={7}>
                    Пока нет заявок.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}

const th: React.CSSProperties = {
  textAlign: "left",
  padding: 10,
  borderBottom: "1px solid #ddd",
  fontWeight: 800,
};

const td: React.CSSProperties = {
  padding: 10,
  borderBottom: "1px solid #eee",
  verticalAlign: "top",
};
