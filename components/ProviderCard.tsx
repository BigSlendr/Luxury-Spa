type Props = { name: string; credential: string; specialty: string; approach: string };

export function ProviderCard({ name, credential, specialty, approach }: Props) {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-soft">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="mt-1 text-sm uppercase tracking-[0.2em] text-sage">{credential}</p>
      <p className="mt-3 text-sm text-charcoal/80"><strong>Specialty:</strong> {specialty}</p>
      <p className="mt-2 text-sm text-charcoal/70">{approach}</p>
    </article>
  );
}
