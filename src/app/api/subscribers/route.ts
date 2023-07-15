import { NextResponse } from "next/server";
import localStorage from "local-storage";

export async function GET(request: Request) {
  return NextResponse.json('Hello World!')
}

export async function POST(request: Request) {
  const body = await request.json()

  localStorage('email', body.email)

  try {
    
  } catch (err) { 
    
  }

  return NextResponse.json({ createdAt: new Date()})
}