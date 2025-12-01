'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import type { FactCard } from '@/lib/types';

interface Props {
  cards: FactCard[];
}

const FactCarousel = ({ cards }: Props) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveCard = useCallback(() => {
    const container = listRef.current;
    if (!container) return;
    const midPoint = container.scrollLeft + container.clientWidth / 2;
    const children = Array.from(container.children);
    let closestIdx = 0;
    let minDistance = Infinity;

    children.forEach((child, index) => {
      const element = child as HTMLElement;
      const center = element.offsetLeft + element.offsetWidth / 2;
      const distance = Math.abs(center - midPoint);
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = index;
      }
    });
    setActiveIndex(closestIdx);
  }, []);

  useEffect(() => {
    const handle = () => updateActiveCard();
    const node = listRef.current;
    if (!node) return;
    node.addEventListener('scroll', handle, { passive: true });
    handle();
    return () => node.removeEventListener('scroll', handle);
  }, [updateActiveCard]);

  const scrollToCard = (index: number) => {
    const container = listRef.current;
    const element = container?.children[index] as HTMLElement | undefined;
    if (!container || !element) return;
    container.scrollTo({
      left: element.offsetLeft - container.clientWidth / 2 + element.offsetWidth / 2,
      behavior: 'smooth',
    });
  };

  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2 px-1">
        <span className="text-lg">💡</span>
        <div>
          <p className="text-sm font-semibold text-primary">Gut Facts You Should Know</p>
          <p className="text-xs text-secondary">Swipe for quick wellness tips</p>
        </div>
      </div>
      <div
        ref={listRef}
        className="snap-carousel scrollbar-hidden flex gap-4 overflow-x-auto px-1 py-2"
      >
        {cards.map((card, index) => (
          <button
            key={card.id}
            type="button"
            onClick={() => scrollToCard(index)}
            className={clsx(
              'snap-card w-[280px] flex-shrink-0 rounded-2xl border px-6 py-5 text-left transition-all',
              'shadow-sm',
              index === activeIndex
                ? 'scale-105 border-2'
                : 'scale-95 border border-transparent opacity-80 blur-[0.2px]',
            )}
            style={{
              backgroundImage: card.gradient,
              borderColor: index === activeIndex ? card.borderColor : 'transparent',
            }}
          >
            <span className="inline-flex items-center rounded-full bg-white/30 px-3 py-1 text-xs font-semibold text-white">
              {card.category}
            </span>
            <div className="py-3 text-3xl">{card.icon}</div>
            <p className="text-base font-semibold text-primary">{card.title}</p>
            <p className="text-sm text-secondary">{card.content}</p>
            <div className="pt-4 text-xs italic text-secondary">
              <p>Tap to learn more</p>
              <p>Swipe for more facts</p>
            </div>
          </button>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2">
        {cards.map((card, index) => (
          <span
            key={card.id}
            className={clsx(
              'rounded-full transition-all',
              index === activeIndex
                ? 'h-2 w-2 bg-[color:var(--status-excellent)]'
                : 'h-1.5 w-1.5 bg-[color:var(--border-medium)]',
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default FactCarousel;

