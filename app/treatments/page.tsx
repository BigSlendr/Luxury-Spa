'use client';

import { useMemo, useState } from 'react';
import { CTAButton } from '@/components/CTAButton';
import { FilterPills } from '@/components/FilterPills';
import { featuredTreatments } from '@/data/siteData';

export default function TreatmentsPage() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Injectables', 'Skin', 'Laser', 'Body'];
  const filtered = useMemo(() => featuredTreatments.filter((item) => filter === 'All' || item.category === filter), [filter]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
      <section>
        <p className="text-xs uppercase tracking-[0.2em] text-sage">Treatments</p>
        <h1 className="mt-3 text-4xl font-semibold">Personalized aesthetic treatments with medical oversight.</h1>
        <p className="mt-4 max-w-2xl text-charcoal/75">Explore category-focused options and request a private consultation to build your plan.</p>
      </section>
      <section className="mt-8"><FilterPills options={categories} active={filter} onChange={setFilter} /></section>
      <section className="mt-8 space-y-6">
        {filtered.map((treatment) => (
          <article key={treatment.name} className="rounded-2xl bg-white p-8 shadow-soft">
            <p className="text-xs uppercase tracking-[0.2em] text-sage">{treatment.category}</p>
            <h2 className="mt-2 text-3xl font-semibold">{treatment.name}</h2>
            <p className="mt-3 text-charcoal/75"><strong>What it is:</strong> {treatment.desc}</p>
            <p className="mt-2 text-charcoal/75"><strong>Benefits:</strong> Natural refinement, confidence, and skin health continuity.</p>
            <p className="mt-2 text-charcoal/75"><strong>Typical downtime:</strong> Minimal to moderate depending on protocol.</p>
            <p className="mt-2 text-charcoal/75"><strong>Who it’s for:</strong> Adults seeking subtle, professional aesthetic care.</p>
            <p className="mt-2 text-charcoal/75"><strong>What to expect:</strong> Consultation, candidacy review, treatment mapping, and follow-up.</p>
            <div className="mt-5"><CTAButton href="/contact">Request a Private Consultation</CTAButton></div>
          </article>
        ))}
      </section>
    </div>
  );
}
