import Link from 'next/link';
import { CTAButton } from '@/components/CTAButton';
import { FAQAccordion } from '@/components/FAQAccordion';
import { MembershipTierCard } from '@/components/MembershipTierCard';
import { ProviderCard } from '@/components/ProviderCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { TreatmentCard } from '@/components/TreatmentCard';
import { faqItems, featuredTreatments, memberships, providers, testimonials } from '@/data/siteData';

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
      <section className="rounded-3xl bg-white p-8 shadow-soft md:p-14">
        <p className="text-xs uppercase tracking-[0.25em] text-sage">Staten Island, NY</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">Refined aesthetic medicine for confident, natural results.</h1>
        <p className="mt-4 max-w-2xl text-lg text-charcoal/75">Personalized, medically guided treatments in a discreet studio designed around your comfort and goals.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <CTAButton href="/contact">Request a Private Consultation</CTAButton>
          <CTAButton href="tel:+17185551234" variant="secondary">Call / Text</CTAButton>
        </div>
        <ul className="mt-8 grid gap-2 text-sm text-charcoal/75 sm:grid-cols-3">
          <li>✓ Board-certified oversight</li>
          <li>✓ FDA-cleared devices</li>
          <li>✓ Personalized plans</li>
        </ul>
      </section>

      <section className="mt-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold">Loved by patients</h2>
          <p className="text-sm text-charcoal/70">★★★★★ 4.9 average • 320+ reviews (placeholder)</p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => <TestimonialCard key={item.name} {...item} />)}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold">Featured treatments</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTreatments.map((item) => <TreatmentCard key={item.name} name={item.name} desc={item.desc} />)}
        </div>
      </section>

      <section className="mt-16 rounded-3xl bg-white p-8 shadow-soft">
        <h2 className="text-3xl font-semibold">Your consultation experience</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {['Intake', 'Assessment', 'Plan', 'Treatment'].map((step, i) => (
            <div key={step} className="rounded-2xl border border-charcoal/10 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-sage">Step {i + 1}</p>
              <p className="mt-2 font-medium">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold">Results preview</h2>
          <CTAButton href="/results" variant="secondary">View Results</CTAButton>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => <div key={i} className="aspect-[4/3] rounded-2xl bg-white shadow-soft" />)}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold">Meet your providers</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {providers.slice(0, 3).map((provider) => <ProviderCard key={provider.name} {...provider} />)}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold">Membership options</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {memberships.map((membership) => <MembershipTierCard key={membership.tier} {...membership} />)}
        </div>
        <div className="mt-6"><CTAButton href="/contact?subject=Membership%20Details" variant="secondary">Request Details</CTAButton></div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold">Frequently asked questions</h2>
        <div className="mt-6"><FAQAccordion items={faqItems} /></div>
      </section>

      <section className="mt-16 rounded-3xl bg-charcoal px-8 py-10 text-white md:flex md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-semibold">Start with a private consultation</h2>
          <p className="mt-2 text-white/80">Discreet care. Clinical precision. Personalized plan.</p>
        </div>
        <div className="mt-5 flex flex-wrap gap-3 md:mt-0">
          <CTAButton href="/contact" className="bg-sage">Request Consultation</CTAButton>
          <Link href="tel:+17185551234" className="rounded-2xl border border-white/30 px-4 py-3 text-sm">Call / Text</Link>
        </div>
      </section>
    </div>
  );
}
