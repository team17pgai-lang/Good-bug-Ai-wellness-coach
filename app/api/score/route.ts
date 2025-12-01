import { NextResponse } from 'next/server';
import { SAMPLE_HEALTH_LOGS } from '@/lib/mockData';
import { calculateGutScore, getScoreDelta } from '@/lib/scoring';

export async function GET() {
  const score = calculateGutScore(SAMPLE_HEALTH_LOGS);
  const change = getScoreDelta(SAMPLE_HEALTH_LOGS);
  return NextResponse.json({
    score,
    change,
    trend: 'Upward',
    nextMilestone: '85/100 in 10 days',
  });
}

