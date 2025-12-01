'use client';

import clsx from 'clsx';
import type { StoolOption } from '@/lib/types';

interface Props {
  value: number;
  onChange: (value: number) => void;
  options: StoolOption[];
}

const toneClasses: Record<StoolOption['tone'], string> = {
  excellent: 'bg-[color:var(--bg-teal)] text-[color:var(--status-excellent)]',
  good: 'bg-[color:var(--bg-blue)] text-[color:var(--status-good)]',
  fair: 'bg-[color:var(--bg-amber)] text-[color:var(--status-fair)]',
  poor: 'bg-[color:var(--bg-red)] text-[color:var(--status-poor)]',
  neutral: 'bg-[color:var(--bg-purple)] text-[color:var(--status-neutral)]',
};

const StoolSelector = ({ value, onChange, options }: Props) => {
  const selected = options.find((option) => option.id === value);

  return (
    <div className="space-y-2 rounded-2xl border border-[color:var(--border-light)] bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-primary">Stool Quality</p>
        <span className="text-xs text-secondary">Tap to select</span>
      </div>
      <div className="scrollbar-hidden flex gap-3 overflow-x-auto py-1">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            className={clsx(
              'min-w-[140px] flex-shrink-0 rounded-2xl border px-3 py-3 text-left transition',
              toneClasses[option.tone],
              value === option.id
                ? 'border-black/10 shadow-md'
                : 'border-transparent opacity-80',
            )}
          >
            <div className="flex items-center justify-between text-sm font-semibold">
              <span>{option.name}</span>
              {option.badge && (
                <span className="rounded-full bg-white/60 px-2 py-0.5 text-[10px] uppercase text-primary">
                  {option.badge}
                </span>
              )}
            </div>
            <p className="text-xs text-primary">{option.description}</p>
          </button>
        ))}
      </div>
      {selected && (
        <p className="text-xs text-secondary">
          {selected.feedback || 'Consider more fiber.'}
        </p>
      )}
    </div>
  );
};

export default StoolSelector;

