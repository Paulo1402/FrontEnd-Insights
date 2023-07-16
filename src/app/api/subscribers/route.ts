import { NextResponse } from 'next/server'
import { getSubscribers, insertSubscriber} from '@/services/connection'


export async function GET() {
  const subscribers = (await getSubscribers()).map(
    (subscriber) => {
      return {
        id: subscriber.id,
        email: subscriber.email,
        createdAt: subscriber.createdat
      }
    }
  )

  return NextResponse.json(subscribers)
}

export async function POST(request: Request) {
  const body: {email: string} = await request.json()

  try {
    await insertSubscriber(body.email)
    return NextResponse.json({ created: true })
  } catch (error: any) {
    return NextResponse.json({ created: false, error: error })
  }
}
