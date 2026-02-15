'use client';

import { useMemo, useState } from 'react';
import { FilterPills } from './FilterPills';

type Item = {
  id: number;
  treatment: string;
  timeframe: string;
  goals: string;
  plan: string;
  category: string;
};

export function ResultsGallery({ items }: { items: Item[] }) {
  const [filter, setFilter] = useState('All');
  const [activeItem, setActiveItem] = useState<Item | null>(null);
  const categories = ['All', ...new Set(items.map((item) => item.category))];

  const filtered = useMemo(() => items.filter((item) => filter === 'All' || item.category === filter), [items, filter]);

  return (
    <>
      <FilterPills options={categories} active={filter} onChange={setFilter} />
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="aspect-[4/3] rounded-2xl border border-charcoal/10 bg-white p-5 text-left shadow-soft transition hover:-translate-y-1"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-sage">Before / After</p>
            <h3 className="mt-2 text-lg font-semibold">{item.treatment}</h3>
            <p className="mt-2 text-sm text-charcoal/70">Timeframe: {item.timeframe}</p>
          </button>
        ))}
      </div>

      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/50 p-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-soft">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-sage">{activeItem.category}</p>
                <h3 className="text-2xl font-semibold">{activeItem.treatment}</h3>
              </div>
              <button onClick={() => setActiveItem(null)} className="rounded-full p-2 hover:bg-cream" aria-label="Close modal">✕</button>
            </div>
            <p className="mt-4 text-sm"><strong>Timeframe:</strong> {activeItem.timeframe}</p>
            <p className="mt-3 text-sm"><strong>Patient goals:</strong> {activeItem.goals}</p>
            <p className="mt-3 text-sm"><strong>Plan:</strong> {activeItem.plan}</p>
          </div>
        </div>
      )}
    </>
  );
}
