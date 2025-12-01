import type { HealthLog } from './types';
import { clamp } from './utils';

export const calculateGutScore = (logs: HealthLog[]): number => {
  if (!logs?.length) return 0;
  const today = logs[logs.length - 1];

  let score = 100;

  score -= (today.bloating || 0) * 2.5;
  score -= (today.constipation || 0) * 3.0;
  score -= (today.acidity || 0) * 2.0;
  score -= (today.stressLevel || 0) * 1.5;
  score -= Math.max(0, 8 - (today.sleepHours || 0)) * 1.5;
  if ((today.exerciseMinutes || 0) < 15) score -= 5;

  const last7 = logs.slice(-7);
  if (last7.filter(Boolean).length >= 5) score += 5;

  let streak = 0;
  for (let i = logs.length - 1; i >= 0; i -= 1) {
    if (logs[i]) streak += 1;
    else break;
  }
  score += Math.min(streak, 7);

  if ((today.waterIntake || 0) > 3) score += 3;
  if ((today.mealQuality || 0) >= 4) score += 2;
  if ((today.exerciseMinutes || 0) > 30) score += 3;

  return clamp(score);
};

export const getScoreDelta = (logs: HealthLog[]): number => {
  if (logs.length < 8) return 0;
  const latest = logs[logs.length - 1]?.gutScore ?? 0;
  const lastWeek = logs[logs.length - 8]?.gutScore ?? latest;
  return Math.round(latest - lastWeek);
};

