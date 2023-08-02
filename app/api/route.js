import { NextResponse } from 'next/server'
import { Pool } from 'pg'

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
})
 
export async function GET() {
  const rows = await pool.query("select * from customers")
  return NextResponse.json({ "data": rows.rows})
}
