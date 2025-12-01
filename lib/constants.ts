import {
  FactCard,
  GutScoreStatus,
  OnboardingMessage,
  StressPreset,
  StoolOption,
  TabId,
  TrendPoint,
} from './types';

export const TAB_ITEMS: Array<{
  id: TabId;
  label: string;
  icon: 'heart' | 'chat' | 'user' | 'users';
}> = [
  { id: 'health', label: 'Health', icon: 'heart' },
  { id: 'chat', label: 'Chat', icon: 'chat' },
  { id: 'profile', label: 'Profile', icon: 'user' },
  { id: 'community', label: 'Community', icon: 'users' },
];

export const GUT_STATUS_MESSAGES: Array<{
  min: number;
  max: number;
  copy: GutScoreStatus;
}> = [
  {
    min: 80,
    max: 101,
    copy: {
      label: 'Thriving',
      tone: 'excellent',
      helper: 'Excellent! Your gut ecosystem is thriving 🌟',
    },
  },
  {
    min: 60,
    max: 80,
    copy: {
      label: 'Good progress',
      tone: 'good',
      helper: 'Good progress! Keep showing up consistently 💪',
    },
  },
  {
    min: 40,
    max: 60,
    copy: {
      label: 'On the right path',
      tone: 'fair',
      helper: 'On the right path. Let’s double down on routines 📈',
    },
  },
  {
    min: 0,
    max: 40,
    copy: {
      label: 'Needs attention',
      tone: 'poor',
      helper: 'Needs attention. Start logging & hydrate 🚀',
    },
  },
];

export const TREND_POINTS: TrendPoint[] = [
  { day: 'Mon', actual: 62, baseline: 68 },
  { day: 'Tue', actual: 65, baseline: 68 },
  { day: 'Wed', actual: 68, baseline: 68 },
  { day: 'Thu', actual: 71, baseline: 68 },
  { day: 'Fri', actual: 70, baseline: 68 },
  { day: 'Sat', actual: 73, baseline: 68 },
  { day: 'Sun', actual: 75, baseline: 68 },
];

export const FACT_CARDS: FactCard[] = [
  {
    id: 'fact-1',
    category: 'Probiotics',
    icon: '🧬',
    title: 'Build Your Microbiome',
    content: 'Probiotics take 2-4 weeks to establish. Consistency is key!',
    gradient: 'linear-gradient(135deg, #A29BFE 0%, #E8F8F5 100%)',
    borderColor: '#A29BFE',
  },
  {
    id: 'fact-2',
    category: 'Nutrition',
    icon: '🌾',
    title: 'Fiber is Your Friend',
    content: '25-30g of fiber improves stool health & reduces bloating.',
    gradient: 'linear-gradient(135deg, #1DD1A1 0%, #E8F8F5 100%)',
    borderColor: '#1DD1A1',
  },
  {
    id: 'fact-3',
    category: 'Stress',
    icon: '🧠',
    title: 'Gut-Brain Connection',
    content: 'Stress triggers bloating. Try breathing exercises for relief.',
    gradient: 'linear-gradient(135deg, #06B6D4 0%, #EBF8FF 100%)',
    borderColor: '#06B6D4',
  },
  {
    id: 'fact-4',
    category: 'Hydration',
    icon: '💧',
    title: 'Water = Digestive Health',
    content: '3.5L daily prevents constipation. Track with our meter!',
    gradient: 'linear-gradient(135deg, #FDCB6E 0%, #FFF3CD 100%)',
    borderColor: '#FDCB6E',
  },
  {
    id: 'fact-5',
    category: 'Sleep',
    icon: '😴',
    title: 'Sleep Repairs Your Gut',
    content: '7-9 hours repairs gut lining & lowers inflammation.',
    gradient: 'linear-gradient(135deg, #A29BFE 0%, #FDE2FF 100%)',
    borderColor: '#A29BFE',
  },
  {
    id: 'fact-6',
    category: 'Nutrition',
    icon: '⏰',
    title: 'Eat on Schedule',
    content: 'Irregular meal times stress digestion. Keep it consistent.',
    gradient: 'linear-gradient(135deg, #1DD1A1 0%, #E8F8F5 100%)',
    borderColor: '#1DD1A1',
  },
  {
    id: 'fact-7',
    category: 'Diet',
    icon: '🚫',
    title: 'Trigger Foods',
    content: 'Ultra-processed foods & excess sugar feed bad bacteria.',
    gradient: 'linear-gradient(135deg, #FF7675 0%, #FFE5E5 100%)',
    borderColor: '#FF7675',
  },
  {
    id: 'fact-8',
    category: 'Health',
    icon: '🌈',
    title: 'Eat the Rainbow',
    content: '30+ plant types/week increases microbiome diversity.',
    gradient: 'linear-gradient(135deg, #A29BFE 0%, #1DD1A1 100%)',
    borderColor: '#A29BFE',
  },
];

export const STRESS_PRESETS: StressPreset[] = [
  { icon: '😌', label: 'Calm', value: 2, helper: 'Steady & centered' },
  { icon: '😐', label: 'OK', value: 4, helper: 'Manageable workload' },
  { icon: '😟', label: 'Stressed', value: 6, helper: 'Body feels tense' },
  { icon: '😰', label: 'Very', value: 8, helper: 'Consider slowing down' },
];

export const STOOL_OPTIONS: StoolOption[] = [
  {
    id: 1,
    name: 'Type 1 - Hard',
    description: 'Separate hard lumps',
    tone: 'poor',
    feedback: 'Hydrate & add fiber to ease digestion.',
  },
  {
    id: 2,
    name: 'Type 2 - Lumpy',
    description: 'Lumpy sausage',
    tone: 'fair',
    feedback: 'Add leafy greens to meals today.',
  },
  {
    id: 3,
    name: 'Type 3 - Cracked',
    description: 'Cracked sausage',
    tone: 'fair',
    feedback: 'Close to ideal; stay hydrated.',
  },
  {
    id: 4,
    name: 'Type 4 - IDEAL ✓',
    description: 'Smooth snake',
    tone: 'excellent',
    badge: 'Ideal',
    feedback: 'Type 4 - Ideal! Great stool health.',
  },
  {
    id: 5,
    name: 'Type 5 - Soft Blobs',
    description: 'Soft blobs',
    tone: 'fair',
    feedback: 'Add protein & fiber to meals.',
  },
  {
    id: 6,
    name: 'Type 6 - Mushy',
    description: 'Fluffy mushy',
    tone: 'poor',
    feedback: 'Consider probiotics & mindful meals.',
  },
  {
    id: 7,
    name: 'Type 7 - Liquid',
    description: 'Watery, no solid pieces',
    tone: 'poor',
    feedback: 'Needs attention. Monitor hydration & triggers.',
  },
];

export const ONBOARDING_MESSAGES: OnboardingMessage[] = [
  { day: 0, content: "Welcome to Wellness! Ready to decode your gut? Let's begin 🧬" },
  { day: 1, content: 'Hey! Your gut health journey is just starting. Feeling it?' },
  { day: 3, content: 'Three days in! Your consistency is impressing us. Keep the rhythm!' },
  { day: 7, content: 'A whole week! 🔥 Your gut is already noticing the change.' },
  { day: 14, content: 'Two weeks done! Your bloating improved 30%. That’s real progress!' },
  { day: 21, content: "21 days! You're not just tracking anymore—you're healing. 💚" },
  { day: 30, content: "One month milestone! 🎉 You've built a habit that matters. Share it?" },
];

export const CHAT_SUGGESTIONS = ['Log symptom', 'Show products', 'History'];

