'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import { getGutStatus } from '@/lib/utils';

interface Props {
  score: number;
  delta: number;
}

const GutScoreGauge = ({ score, delta }: Props) => {
  const radius = 70;
  const innerRadius = 60;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * innerRadius;
  const progress = (score / 100) * circumference;
  const status = getGutStatus(score);

  return (
    <div className="relative flex flex-col items-center gap-4 rounded-3xl bg-white p-6 shadow-md">
      <svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
        className="drop-shadow-sm"
      >
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A29BFE" />
            <stop offset="50%" stopColor="#00B894" />
            <stop offset="100%" stopColor="#1DD1A1" />
          </linearGradient>
        </defs>
        <circle
          cx={radius}
          cy={radius}
          r={innerRadius}
          stroke="var(--border-medium)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeLinecap="round"
        />
        <motion.circle
          cx={radius}
          cy={radius}
          r={innerRadius}
          stroke="url(#gaugeGradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - progress }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        <circle cx={radius} cy={radius} r={innerRadius - 8} fill="white" />
        <foreignObject
          x={radius - 80}
          y={radius - 60}
          width="160"
          height="120"
          className="text-center"
        >
          <div className="flex flex-col items-center justify-center gap-1 text-center">
            <span className="text-5xl font-bold text-[color:var(--status-excellent)]">
              {score}
            </span>
            <span className="text-base text-tertiary">/100</span>
            <span className="text-lg font-semibold text-[color:var(--status-excellent)]">
              {status.label}
            </span>
            <span
              className={clsx(
                'text-sm font-medium',
                delta > 0 && 'text-[color:var(--status-excellent)]',
                delta < 0 && 'text-[color:var(--status-poor)]',
                delta === 0 && 'text-tertiary',
              )}
            >
              {delta > 0 && `↑ +${delta} vs last week`}
              {delta < 0 && `↓ ${Math.abs(delta)} vs last week`}
              {delta === 0 && '→ Same as last week'}
            </span>
          </div>
        </foreignObject>
      </svg>
      <p className="text-center text-sm text-secondary">{status.helper}</p>
    </div>
  );
};

export default GutScoreGauge;

