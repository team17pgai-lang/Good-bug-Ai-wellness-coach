import { GUT_STATUS_MESSAGES } from './constants';
import type { GutScoreStatus } from './types';

export const clamp = (value: number, min = 0, max = 100) =>
  Math.min(Math.max(value, min), max);

export const formatTime = (date = new Date()) =>
  date.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
  });

export const formatDateLabel = (iso: string) =>
  new Date(iso).toLocaleDateString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });

export const getGutStatus = (score: number): GutScoreStatus => {
  const bucket =
    GUT_STATUS_MESSAGES.find(
      ({ min, max }) => score >= min && score < max,
    ) ?? GUT_STATUS_MESSAGES[GUT_STATUS_MESSAGES.length - 1];
  return bucket.copy;
};

export const toneToColor = (tone: GutScoreStatus['tone']) => {
  switch (tone) {
    case 'excellent':
      return 'var(--status-excellent)';
    case 'good':
      return 'var(--status-good)';
    case 'fair':
      return 'var(--status-fair)';
    case 'poor':
      return 'var(--status-poor)';
    default:
      return 'var(--status-neutral)';
  }
};

