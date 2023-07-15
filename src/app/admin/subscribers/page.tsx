import { ISubscriber } from '@/app/types/subscribers'

export default async function Subscriber() {
  const rows: ISubscriber[] = []

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
              <td>{subscriber.createdAt.toDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
