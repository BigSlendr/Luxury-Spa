type Props = { tier: string; perks: string[] };

export function MembershipTierCard({ tier, perks }: Props) {
  return (
    <article className="rounded-2xl border border-charcoal/10 bg-white p-6 shadow-soft">
      <h3 className="text-2xl font-semibold">{tier}</h3>
      <ul className="mt-4 space-y-2 text-sm text-charcoal/75">
        {perks.map((perk) => (
          <li key={perk}>• {perk}</li>
        ))}
      </ul>
    </article>
  );
}
