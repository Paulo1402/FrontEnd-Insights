import { ISubscriber } from '@/app/types/subscribers'

export default async function Subscriber() {
  const rows: ISubscriber[] = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/subscribers`,
    {
      next: {
        revalidate: 0
      }
    }
  )
    .then(res => res.json())
    .catch(err => console.log(err))

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
