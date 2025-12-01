import { NextResponse } from 'next/server';
import { ONBOARDING_MESSAGES } from '@/lib/constants';

export async function GET() {
  return NextResponse.json({
    nudges: ONBOARDING_MESSAGES.map((message) => ({
      message: message.content,
      day: message.day,
      type: 'milestone',
    })),
  });
}

