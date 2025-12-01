import { NextResponse } from 'next/server';
import { SAMPLE_HEALTH_LOGS } from '@/lib/mockData';
import { calculateGutScore } from '@/lib/scoring';

export async function GET() {
  return NextResponse.json({ logs: SAMPLE_HEALTH_LOGS });
}

export async function POST(request: Request) {
  const body = await request.json();
  const updatedLogs = [...SAMPLE_HEALTH_LOGS, body];
  const gutScore = calculateGutScore(updatedLogs);
  return NextResponse.json({ status: 'ok', gutScore });
}

