'use client';

import { useMemo, useState } from 'react';
import Dashboard from './components/Dashboard';
import Chat from './components/Chat';
import Profile from './components/Profile';
import Community from './components/Community';
import Navigation from './components/Navigation';
import { SAMPLE_HEALTH_LOGS } from '@/lib/mockData';
import { TAB_ITEMS } from '@/lib/constants';
import type { TabId } from '@/lib/types';
import { calculateGutScore, getScoreDelta } from '@/lib/scoring';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<TabId>('health');

  const gutScore = useMemo(
    () => Math.round(calculateGutScore(SAMPLE_HEALTH_LOGS)),
    [],
  );
  const gutDelta = useMemo(() => getScoreDelta(SAMPLE_HEALTH_LOGS), []);

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'chat':
        return <Chat />;
      case 'profile':
        return <Profile />;
      case 'community':
        return <Community />;
      default:
        return (
          <Dashboard logs={SAMPLE_HEALTH_LOGS} score={gutScore} delta={gutDelta} />
        );
    }
  };

  return (
    <main className="mx-auto min-h-screen max-w-md bg-cream font-sans text-primary">
      <div className="flex min-h-screen flex-col">
        <section className="flex-1 overflow-y-auto pb-24">{renderActiveTab()}</section>
        <Navigation
          items={TAB_ITEMS}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
    </main>
  );
}

