import { Subscriber } from '@/app/types/subscriber'
import sqlite3 from 'sqlite3'

function connectToDatabase() {
  return new sqlite3.Database('subscribers.db')
}

function getSubscribers() {
  const db = connectToDatabase()

  return new Promise<Subscriber[]>((resolve, reject) => {
    db.all('SELECT * FROM Subscriber', (error, rows: Subscriber[]) => {
      db.close()

      if (error) reject(error)
      else resolve(rows)
    })
  })
}

function insertSubscriber(email: string) {
  const db = connectToDatabase()

  return new Promise<void>((resolve, reject) => {
    db.run('INSERT INTO Subscriber (email) VALUES (?)', email, error => {
      db.close()

      if (error) reject(error)
      else resolve()
    })
  })
}

const db = connectToDatabase()

db.run(`
  CREATE TABLE IF NOT EXISTS Subscriber (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`)

db.close()

export { getSubscribers, insertSubscriber }
