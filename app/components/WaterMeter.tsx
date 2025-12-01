'use client';

import { motion } from 'framer-motion';

interface Props {
  value: number;
  goal: number;
  onUpdate: (value: number) => void;
}

const WaterMeter = ({ value, goal, onUpdate }: Props) => {
  const percent = Math.min((value / goal) * 100, 100);
  const radius = 50;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  const changeBy = (delta: number) => {
    onUpdate(Number(Math.max(0, value + delta).toFixed(1)));
  };

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-[color:var(--border-light)] bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-primary">Water Intake</p>
        <span className="text-xs text-secondary">Goal {goal}L</span>
      </div>
      <div className="flex items-center gap-4">
        <svg width={120} height={120} className="drop-shadow-sm">
          <defs>
            <linearGradient id="waterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A29BFE" />
              <stop offset="100%" stopColor="#1DD1A1" />
            </linearGradient>
          </defs>
          <circle
            cx={60}
            cy={60}
            r={radius}
            stroke="var(--border-light)"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <motion.circle
            cx={60}
            cy={60}
            r={radius}
            stroke="url(#waterGradient)"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 0.6 }}
          />
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="text-xl font-bold text-[color:var(--status-excellent)]"
          >
            {value.toFixed(1)}L
          </text>
          <text
            x="50%"
            y="60%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="10"
            fill="var(--text-tertiary)"
          >
            / {goal}L
          </text>
        </svg>
        <div className="flex flex-1 flex-col gap-3">
          <p className="text-sm text-secondary">
            You&apos;re on track! Goal: {goal}L daily
          </p>
          <div className="flex gap-2">
            {[-0.5, 0.5, 1].map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => changeBy(amount)}
                className="flex-1 rounded-full border border-[color:var(--border-medium)] px-3 py-2 text-xs font-semibold text-primary transition hover:border-[color:var(--status-excellent)]"
              >
                {amount > 0 ? `+${amount}L` : `${amount}L`}
              </button>
            ))}
          </div>
          <div className="h-2 rounded-full bg-[color:var(--border-light)]">
            <motion.div
              className="h-full rounded-full bg-[color:var(--status-excellent)]"
              initial={{ width: 0 }}
              animate={{ width: `${percent}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterMeter;

