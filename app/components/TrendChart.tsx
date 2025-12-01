'use client';

import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { TrendPoint } from '@/lib/types';

interface Props {
  data: TrendPoint[];
}

const TrendTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  const value = payload[0].value;
  return (
    <div className="rounded-xl border border-[color:var(--border-light)] bg-white px-3 py-2 text-xs shadow-sm">
      <p className="font-semibold text-primary">
        {label} — {value}/100
      </p>
    </div>
  );
};

const TrendChart = ({ data }: Props) => (
  <div className="h-48 rounded-3xl bg-white p-4 shadow-md">
    <div className="flex items-center justify-between pb-2">
      <div>
        <p className="text-sm font-semibold text-primary">7-Day Trend</p>
        <p className="text-xs text-secondary">Swipe for more weeks</p>
      </div>
      <span className="text-xs font-medium text-[color:var(--status-good)]">
        Forecast → 85/100
      </span>
    </div>
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 8, right: 0, bottom: 0, left: -30 }}>
        <defs>
          <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1DD1A1" stopOpacity={0.35} />
            <stop offset="100%" stopColor="#1DD1A1" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
        <XAxis dataKey="day" axisLine={false} tickLine={false} />
        <YAxis
          ticks={[0, 25, 50, 75, 100]}
          axisLine={false}
          tickLine={false}
          width={28}
        />
        <Tooltip content={<TrendTooltip />} cursor={{ stroke: '#E8EAED' }} />
        <Area
          type="monotone"
          dataKey="actual"
          stroke="#1DD1A1"
          strokeWidth={3}
          fill="url(#trendGradient)"
          dot={{ r: 4, fill: '#1DD1A1' }}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="baseline"
          stroke="#C4CDD5"
          strokeDasharray="4 4"
          strokeWidth={2}
          dot={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default TrendChart;

