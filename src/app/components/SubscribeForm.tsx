'use client'

import { FormEventHandler, useState } from 'react'
import { ApiResponse } from '../types/subscribers'


export default function SubscribeForm() {
  const [email, setEmail] = useState('')

  const handleSubmit: FormEventHandler = async e => {
    e.preventDefault()

    const response: ApiResponse = await fetch('/api/subscribers', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json'}
    }).then(res => res.json())

    if (response.createdAt) {
      setEmail('')
      alert('Email cadastrado com sucesso!')
    } else {
      alert('Algo deu errado!')
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
