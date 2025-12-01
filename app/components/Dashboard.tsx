'use client';

import { useMemo, useState } from 'react';
import { ChevronLeft, MoreHorizontal } from 'lucide-react';
import GutScoreGauge from './GutScoreGauge';
import TrendChart from './TrendChart';
import FactCarousel from './FactCarousel';
import WaterMeter from './WaterMeter';
import StressSlider from './StressSlider';
import StoolSelector from './StoolSelector';
import {
  FACT_CARDS,
  STRESS_PRESETS,
  STOOL_OPTIONS,
  TREND_POINTS,
} from '@/lib/constants';
import type { HealthLog } from '@/lib/types';
import { getGutStatus } from '@/lib/utils';

interface Props {
  logs: HealthLog[];
  score: number;
  delta: number;
}

const Dashboard = ({ logs, score, delta }: Props) => {
  const status = useMemo(() => getGutStatus(score), [score]);
  const latestLog = logs.at(-1);
  const [waterIntake, setWaterIntake] = useState(2.5);
  const [stress, setStress] = useState(6);
  const [stool, setStool] = useState(4);
  const [sleepHours, setSleepHours] = useState(6);
  const [mealRating, setMealRating] = useState(4);
  const [activityMinutes, setActivityMinutes] = useState(15);
  const [submitState, setSubmitState] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const handleSubmit = async () => {
    setSubmitState('loading');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitState('success');
      setTimeout(() => setSubmitState('idle'), 2000);
    } catch (error) {
      setSubmitState('error');
      setTimeout(() => setSubmitState('idle'), 2000);
    }
  };

  const renderSubmitLabel = () => {
    if (submitState === 'loading') return 'Logging…';
    if (submitState === 'success') return '✓ Logged';
    if (submitState === 'error') return 'Retry';
    return 'Log & Update Score';
  };

  return (
    <div className="space-y-5 pb-6">
      <header className="sticky top-0 z-40 flex items-center justify-between bg-cream/95 px-4 py-4 backdrop-blur">
        <button
          type="button"
          className="rounded-full border border-[color:var(--border-light)] p-2 shadow-xs"
        >
          <ChevronLeft className="h-4 w-4 text-primary" />
        </button>
        <div className="text-center">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wide">
            Gut Health
          </p>
          <p className="text-base font-bold text-primary">
            {score}/100 — {status.label}
          </p>
          <p className="text-xs text-tertiary">Last updated • 2 hours ago</p>
        </div>
        <button
          type="button"
          className="rounded-full border border-[color:var(--border-light)] p-2 shadow-xs"
        >
          <MoreHorizontal className="h-4 w-4 text-primary" />
        </button>
      </header>

      <section className="px-4">
        <GutScoreGauge score={score} delta={delta} />
      </section>

      <section className="space-y-2 px-4">
        <TrendChart data={TREND_POINTS} />
        {latestLog && (
          <p className="text-center text-xs text-secondary">
            If trend continues: 85/100 in 10 days based on your last log (
            {latestLog.date})
          </p>
        )}
      </section>

      <section className="px-4">
        <FactCarousel cards={FACT_CARDS} />
      </section>

      <section className="space-y-4 px-4">
        <div>
          <h2 className="text-sm font-semibold text-primary">Quick Log</h2>
          <p className="text-xs text-secondary">
            Capture hydration, stress, stool & lifestyle in under a minute.
          </p>
        </div>
        <WaterMeter value={waterIntake} goal={3.5} onUpdate={setWaterIntake} />
        <StressSlider value={stress} onChange={setStress} presets={STRESS_PRESETS} />
        <StoolSelector value={stool} onChange={setStool} options={STOOL_OPTIONS} />

        <div className="grid grid-cols-3 gap-3 rounded-2xl border border-[color:var(--border-light)] bg-white p-4 shadow-sm">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-primary">😴 Sleep</p>
            <select
              value={sleepHours}
              onChange={(event) => setSleepHours(Number(event.target.value))}
              className="w-full rounded-xl border border-[color:var(--border-medium)] bg-cream px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--status-neutral)]"
            >
              {Array.from({ length: 13 }, (_, index) => index).map((hour) => (
                <option key={hour} value={hour}>
                  {hour} hrs
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-primary">🍽️ Meals</p>
            <div className="flex justify-center gap-1">
              {Array.from({ length: 5 }, (_, index) => {
                const rating = index + 1;
                return (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => setMealRating(rating)}
                    className="text-xl"
                  >
                    {rating <= mealRating ? '⭐️' : '☆'}
                  </button>
                );
              })}
            </div>
            <p className="text-center text-xs text-secondary">{mealRating}/5</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-primary">🏃 Activity</p>
            <div className="flex items-center justify-between rounded-xl border border-[color:var(--border-medium)] bg-cream px-2 py-2">
              <button
                type="button"
                onClick={() => setActivityMinutes(Math.max(0, activityMinutes - 5))}
                className="rounded-full bg-white px-2 py-1 text-sm shadow-xs"
              >
                −
              </button>
              <span className="text-sm font-semibold">{activityMinutes} min</span>
              <button
                type="button"
                onClick={() => setActivityMinutes(Math.min(180, activityMinutes + 5))}
                className="rounded-full bg-white px-2 py-1 text-sm shadow-xs"
              >
                +
              </button>
            </div>
            <p className="text-center text-xs text-secondary">Goal 30 min</p>
          </div>
        </div>
      </section>

      <div className="px-4">
        <button
          type="button"
          onClick={handleSubmit}
          className="sticky bottom-20 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#A29BFE] via-[#00B894] to-[#1DD1A1] px-4 py-4 text-base font-semibold text-white shadow-lg transition active:scale-95"
          style={{
            opacity: submitState === 'loading' ? 0.8 : 1,
          }}
          disabled={submitState === 'loading'}
        >
          {submitState === 'loading' && (
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/50 border-t-white" />
          )}
          {renderSubmitLabel()}
        </button>
        {submitState === 'error' && (
          <p className="pt-2 text-center text-xs text-[color:var(--status-poor)]">
            Something went wrong. Please try again.
          </p>
        )}
        {submitState === 'success' && (
          <p className="pt-2 text-center text-xs text-[color:var(--status-excellent)]">
            Entry saved! Gut score recalculated.
          </p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

