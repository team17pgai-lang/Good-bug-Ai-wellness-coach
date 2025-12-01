import { HealthLog, ChatMessage } from './types';
import { formatTime } from './utils';

export const SAMPLE_HEALTH_LOGS: HealthLog[] = [
  {
    date: '2025-11-25',
    bloating: 4,
    constipation: 2,
    acidity: 3,
    stressLevel: 5,
    sleepHours: 7,
    exerciseMinutes: 20,
    waterIntake: 2.8,
    mealQuality: 4,
    stoolType: 4,
    streak: 5,
    consistency: 18,
    gutScore: 68,
    change: 5,
  },
  {
    date: '2025-11-26',
    bloating: 3,
    constipation: 2,
    acidity: 2,
    stressLevel: 4,
    sleepHours: 7.5,
    exerciseMinutes: 25,
    waterIntake: 3.2,
    mealQuality: 4,
    stoolType: 4,
    streak: 6,
    consistency: 19,
    gutScore: 71,
    change: 3,
  },
  {
    date: '2025-11-27',
    bloating: 2,
    constipation: 1,
    acidity: 2,
    stressLevel: 3,
    sleepHours: 8,
    exerciseMinutes: 32,
    waterIntake: 3.5,
    mealQuality: 5,
    stoolType: 4,
    streak: 7,
    consistency: 20,
    gutScore: 75,
    change: 4,
  },
];

export const SAMPLE_CHAT_MESSAGES: ChatMessage[] = [
  {
    id: 'msg-1',
    author: 'bot',
    content: "Hi! I'm Wellness, your gut companion. What's happening today?",
    timestamp: formatTime(),
  },
  {
    id: 'msg-2',
    author: 'user',
    content: 'Feeling bloated after dinner. Lots of stress at work.',
    timestamp: formatTime(),
  },
  {
    id: 'msg-3',
    author: 'bot',
    content:
      'Bloating + stress + poor sleep = classic dysbiosis pattern. Familiar?',
    timestamp: formatTime(),
    recommendation: {
      id: 'synbiotic-mix',
      name: 'Synbiotic Mix',
      price: '₹1,299',
      why: 'Balances gut flora in 4 weeks',
      rating: '4.8 · 320 reviews',
    },
  },
];

