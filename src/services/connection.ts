import { sql } from "@vercel/postgres"


async function getSubscribers() {
  const { rows } = await sql`SELECT * FROM subscriber`
  return rows
}

async function insertSubscriber(email: string) {
  // Vercel faz o tratamento desse tipo de query para evitar SQL Injection
  await sql`INSERT INTO subscriber (email) VALUES (${email})`
}

export {
  getSubscribers,
  insertSubscriber
}