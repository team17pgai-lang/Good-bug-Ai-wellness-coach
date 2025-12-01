'use client';

import clsx from 'clsx';
import type { StressPreset } from '@/lib/types';

interface Props {
  value: number;
  onChange: (value: number) => void;
  presets: StressPreset[];
}

const valueToEmoji = (value: number) => {
  if (value <= 2) return '😌';
  if (value <= 4) return '😐';
  if (value <= 6) return '😟';
  if (value <= 8) return '😰';
  return '😵';
};

const valueLabel = (value: number) => {
  if (value <= 2) return 'Calm';
  if (value <= 4) return 'Easy';
  if (value <= 6) return 'Moderate Stress';
  if (value <= 8) return 'High Stress';
  return 'Critical';
};

const StressSlider = ({ value, onChange, presets }: Props) => {
  return (
    <div className="space-y-3 rounded-2xl border border-[color:var(--border-light)] bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-primary">Stress Level</p>
        <span className="text-xs text-secondary">{value}/10</span>
      </div>
      <div className="flex items-center justify-between text-sm font-semibold text-primary">
        <span>Calm</span>
        <span className="text-[color:var(--status-fair)]">
          {value}/10 — {valueLabel(value)}
        </span>
        <span>High</span>
      </div>
      <div className="relative flex items-center">
        <input
          type="range"
          min={0}
          max={10}
          step={1}
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          className="h-3 w-full appearance-none rounded-full"
          style={{
            background:
              'linear-gradient(90deg, #06B6D4 0%, #FDCB6E 50%, #FF7675 100%)',
          }}
        />
        <div
          className="pointer-events-none absolute -top-7 flex h-7 w-7 items-center justify-center rounded-full border border-white bg-white text-base shadow-md"
          style={{ left: `${(value / 10) * 100}%`, transform: 'translateX(-50%)' }}
        >
          {valueToEmoji(value)}
        </div>
      </div>
      <div className="flex justify-between text-[10px] text-secondary">
        {[0, 25, 50, 75, 100].map((tick) => (
          <span key={tick}>{tick}%</span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {presets.map((preset) => (
          <button
            key={preset.label}
            type="button"
            onClick={() => onChange(preset.value)}
            className={clsx(
              'flex flex-1 items-center justify-center gap-1 rounded-full border px-3 py-2 text-xs font-semibold transition',
              value === preset.value
                ? 'border-[color:var(--status-excellent)] bg-[color:var(--bg-teal)] text-[color:var(--status-excellent)]'
                : 'border-[color:var(--border-medium)] text-secondary',
            )}
          >
            <span>{preset.icon}</span>
            {preset.label}
          </button>
        ))}
      </div>
      <p className="text-xs text-secondary">
        You&apos;re {valueLabel(value).toLowerCase()}. More than your average (4/10).
      </p>
    </div>
  );
};

export default StressSlider;

