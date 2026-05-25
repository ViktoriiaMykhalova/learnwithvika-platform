import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';

const env = readFileSync('.env.local', 'utf8');
const match = env.match(/DATABASE_URL=(.+)/);
const DATABASE_URL = match[1].trim();

const sql = neon(DATABASE_URL);

await sql`CREATE TABLE IF NOT EXISTS leads(id SERIAL PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL, level TEXT, message TEXT, status TEXT DEFAULT 'NEW', created_at TIMESTAMP DEFAULT NOW())`;
await sql`CREATE TABLE IF NOT EXISTS orders(id SERIAL PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL, product TEXT NOT NULL, price TEXT NOT NULL, created_at TIMESTAMP DEFAULT NOW())`;
await sql`CREATE TABLE IF NOT EXISTS recommendations(id SERIAL PRIMARY KEY, name TEXT NOT NULL, level TEXT NOT NULL, goal TEXT NOT NULL, hours_per_week TEXT NOT NULL, preferred_format TEXT NOT NULL, recommended_format TEXT NOT NULL, suggested_intensity TEXT NOT NULL, best_product TEXT NOT NULL, focus_plan TEXT NOT NULL, created_at TIMESTAMP DEFAULT NOW())`;

console.log('✅ Tables created!');