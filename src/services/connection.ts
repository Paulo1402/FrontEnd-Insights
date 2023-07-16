import { ISubscriber } from '@/app/types/subscribers'
import sqlite3 from 'sqlite3'

function connectToDatabase() {
  return new sqlite3.Database('subscribers.db')
}

function getSubscribers() {
  const db = connectToDatabase()

  return new Promise<ISubscriber[]>((resolve, reject) => {
    db.all('SELECT * FROM Subscriber', (error, rows: ISubscriber[]) => {
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

// const data = [
//   {
//     id: 0,
//     email: 'paulobenatto02@gmail.com',
//     createdAt: '2023-07-16'
//   }
// ]

// let id = 0

// function getSubscribers() {
//   return data
// }

// function insertSubscriber(email: string) {
//   id++

//   data.push(
//     {
//       id,
//       email,
//       createdAt: new Date().toDateString()
//     }
//   )

//   console.log(data)
// }

export {
  getSubscribers,
  insertSubscriber
}