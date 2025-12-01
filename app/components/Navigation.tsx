'use client';

import { motion } from 'framer-motion';
import { Heart, MessageCircle, User, Users, type LucideIcon } from 'lucide-react';
import clsx from 'clsx';
import type { TabId } from '@/lib/types';

type IconKey = 'heart' | 'chat' | 'user' | 'users';

const ICONS: Record<IconKey, LucideIcon> = {
  heart: Heart,
  chat: MessageCircle,
  user: User,
  users: Users,
};

interface NavigationProps {
  items: Array<{ id: TabId; label: string; icon: IconKey }>;
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

const Navigation = ({ items, activeTab, onTabChange }: NavigationProps) => {
  return (
    <nav className="sticky bottom-0 z-50 bg-white/95 shadow-lg">
      <div className="mx-auto flex max-w-md items-center justify-between px-4 py-2">
        {items.map((item) => {
          const Icon = ICONS[item.icon];
          const isActive = item.id === activeTab;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onTabChange(item.id)}
              className={clsx(
                'relative flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl py-2 text-xs font-medium transition-all',
                isActive ? 'text-[color:var(--status-excellent)]' : 'text-tertiary',
              )}
            >
              <Icon
                className={clsx(
                  'h-5 w-5 transition-colors',
                  isActive ? 'text-[color:var(--status-excellent)]' : 'text-tertiary',
                )}
              />
              <span>{item.label}</span>
              {isActive && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-[color:var(--status-excellent)]"
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;

