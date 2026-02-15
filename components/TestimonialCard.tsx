type Props = { name: string; text: string };

export function TestimonialCard({ name, text }: Props) {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-soft">
      <p className="text-charcoal/80">“{text}”</p>
      <p className="mt-4 text-sm font-medium text-charcoal">{name}</p>
    </article>
  );
}
