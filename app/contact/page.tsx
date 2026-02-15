import { ContactForm } from '@/components/ContactForm';

export default function ContactPage({ searchParams }: { searchParams: { subject?: string } }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
      <div className="grid gap-8 md:grid-cols-2">
        <section className="rounded-2xl bg-white p-8 shadow-soft">
          <h1 className="text-4xl font-semibold">Contact Meridian</h1>
          <p className="mt-4 text-charcoal/75">Call or text: <a href="tel:+17185551234" className="underline">(718) 555-1234</a></p>
          <p className="mt-2 text-charcoal/75">Address: Staten Island, NY (placeholder)</p>
          <p className="mt-2 text-charcoal/75">Hours: Mon–Fri 9am–7pm, Sat 10am–4pm</p>
          <p className="mt-2 text-charcoal/75">Parking: Reserved lot + street parking (placeholder)</p>
          <h2 className="mt-6 text-xl font-semibold">What to expect</h2>
          <p className="mt-2 text-charcoal/75">A private consultation, candid treatment guidance, and a custom timeline aligned to your comfort.</p>
          <p className="mt-6 text-sm text-charcoal/60">Disclaimer: Services are provided under licensed medical supervision. Results vary.</p>
        </section>
        <ContactForm subject={searchParams.subject} />
      </div>
    </div>
  );
}
