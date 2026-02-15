'use client';

import { useState } from 'react';

type Item = { question: string; answer: string };

export function FAQAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={item.question} className="overflow-hidden rounded-2xl border border-charcoal/10 bg-white">
          <button
            className="flex w-full items-center justify-between px-5 py-4 text-left"
            onClick={() => setOpen(open === index ? null : index)}
            aria-expanded={open === index}
          >
            <span className="font-medium">{item.question}</span>
            <span className="text-xl">{open === index ? '−' : '+'}</span>
          </button>
          {open === index && <p className="px-5 pb-5 text-sm text-charcoal/70">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
}
