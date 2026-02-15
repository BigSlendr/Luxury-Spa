import { CTAButton } from '@/components/CTAButton';
import { ProviderCard } from '@/components/ProviderCard';
import { providers } from '@/data/siteData';

export default function ProvidersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
      <h1 className="text-4xl font-semibold">Our Providers</h1>
      <p className="mt-3 max-w-2xl text-charcoal/75">Experienced clinicians delivering refined outcomes through individualized treatment design.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {providers.map((provider) => <ProviderCard key={provider.name} {...provider} />)}
      </div>
      <section className="mt-14 rounded-3xl bg-white p-8 shadow-soft">
        <h2 className="text-3xl font-semibold">Medical-grade standards</h2>
        <p className="mt-3 text-charcoal/75">Sterilization protocols, licensed oversight, and patient-first safety review are integrated into every appointment.</p>
      </section>
      <div className="mt-8"><CTAButton href="/contact">Request a Private Consultation</CTAButton></div>
    </div>
  );
}
