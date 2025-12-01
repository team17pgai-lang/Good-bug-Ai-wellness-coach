import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({
    reply:
      'Hydration + stress is showing up. Try logging a breathing break? Synbiotic Mix also rebuilds balance in 4 weeks.',
    echo: body?.message,
  });
}

