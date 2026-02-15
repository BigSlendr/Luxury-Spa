type Props = { name: string; desc: string; category?: string };

export function TreatmentCard({ name, desc, category }: Props) {
  return (
    <article className="rounded-2xl border border-charcoal/10 bg-white p-6 shadow-soft transition hover:-translate-y-1">
      {category && <p className="text-xs uppercase tracking-[0.2em] text-sage">{category}</p>}
      <h3 className="mt-2 text-xl font-semibold">{name}</h3>
      <p className="mt-2 text-sm text-charcoal/70">{desc}</p>
    </article>
  );
}
