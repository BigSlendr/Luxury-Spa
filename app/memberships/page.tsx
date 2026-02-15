import { ComparisonTable } from '@/components/ComparisonTable';
import { CTAButton } from '@/components/CTAButton';
import { MembershipTierCard } from '@/components/MembershipTierCard';
import { memberships } from '@/data/siteData';

export default function MembershipsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
      <h1 className="text-4xl font-semibold">Memberships</h1>
      <p className="mt-3 max-w-2xl text-charcoal/75">Memberships support consistent care, savings, and elevated booking access for long-term aesthetic goals.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {memberships.map((membership) => <MembershipTierCard key={membership.tier} {...membership} />)}
      </div>
      <div className="mt-10"><ComparisonTable /></div>
      <div className="mt-8"><CTAButton href="/contact?subject=Membership%20Information">Request Membership Info</CTAButton></div>
    </div>
  );
}
