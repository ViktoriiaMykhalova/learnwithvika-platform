import Database from "better-sqlite3";
import path from "path";

const dbPath = path.join(process.cwd(), "db.sqlite");
const db = new Database(dbPath, {
  verbose: console.log,
});

db.exec(`
  PRAGMA encoding = "UTF-8";
`);


// Таблица заявок (leads)
db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    level TEXT,
    message TEXT,
    status TEXT DEFAULT 'NEW',
    created_at TEXT DEFAULT (datetime('now'))
  );
`);


db.exec(`
  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    product TEXT NOT NULL,
    price TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS recommendations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    level TEXT NOT NULL,
    goal TEXT NOT NULL,
    hours_per_week TEXT NOT NULL,
    preferred_format TEXT NOT NULL,
    recommended_format TEXT NOT NULL,
    suggested_intensity TEXT NOT NULL,
    best_product TEXT NOT NULL,
    focus_plan TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

export default db;