import { Subscriber } from '@/app/types/subscriber'

export const metadata = {
  title: 'Inscrições | Front-end Insights'
}

export const dynamic = 'force-dynamic'

export default async function Subscriber() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/subscribers`,
    {
      next: {
        revalidate: 0
      },
      cache: 'no-cache'
    }
  )

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const rows: Subscriber[] = await response.json()

  return (
    <main>
      <h1 className="text-2xl font-bold mb-8">Lista de inscritos</h1>
      <table className="w-full text-center">
        <thead className="border-b-[1px]">
          <tr className="[&>*]:py-4">
            <th>ID</th>
            <th>Email</th>
            <th>Criado em</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(subscriber => (
            <tr key={subscriber.id} className="[&>*]:p-4">
              <td>{subscriber.id}</td>
              <td className="text-left">{subscriber.email}</td>
              <td>{subscriber.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
