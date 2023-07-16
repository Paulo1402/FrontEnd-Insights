'use client'

import { FormEvent, useState } from 'react'

export default function SubscribeForm() {
  const [email, setEmail] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const response: { created: boolean; error?: { code: string } } =
      await fetch('/api/subscribers', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' }
      }).then(res => res.json())

    try {
      if (response.created) {
        setEmail('')
        alert('Email cadastrado com sucesso!')
      } else {
        switch (response.error?.code) {
          case 'SQLITE_CONSTRAINT':
            alert('Email já cadastrado!')
            break
          default:
            alert('Algo deu errado!')
        }
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form
      className="flex justify-center gap-4 p-4 flex-wrap"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Seu e-mail principal"
        className="bg-slate-800 p-3 rounded w-auto sm:w-1/2"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button className="bg-sky-700 p-3 rounded hover:bg-sky-800">
        Se inscrever
      </button>
    </form>
  )
}
