export type TabId = 'health' | 'chat' | 'profile' | 'community';

export interface TrendPoint {
  day: string;
  actual: number;
  baseline: number;
}

export interface FactCard {
  id: string;
  category: string;
  icon: string;
  title: string;
  content: string;
  gradient: string;
  borderColor: string;
}

export interface HealthLog {
  date: string;
  bloating: number;
  constipation: number;
  acidity: number;
  stressLevel: number;
  sleepHours: number;
  exerciseMinutes: number;
  waterIntake: number;
  mealQuality: number;
  stoolType: number;
  streak: number;
  consistency: number;
  gutScore: number;
  change: number;
}

export interface GutScoreStatus {
  label: string;
  tone: 'excellent' | 'good' | 'fair' | 'poor';
  helper: string;
}

export interface StressPreset {
  icon: string;
  label: string;
  value: number;
  helper: string;
}

export interface StoolOption {
  id: number;
  name: string;
  description: string;
  tone: 'excellent' | 'good' | 'fair' | 'poor' | 'neutral';
  badge?: string;
  feedback: string;
}

export interface WaterGoal {
  current: number;
  goal: number;
}

export interface QuickMetric {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit?: string;
}

export interface ProductRecommendation {
  id: string;
  name: string;
  price: string;
  why: string;
  rating: string;
}

export interface ChatMessage {
  id: string;
  author: 'user' | 'bot';
  content: string;
  timestamp: string;
  recommendation?: ProductRecommendation;
}

export interface OnboardingMessage {
  day: number;
  content: string;
}

