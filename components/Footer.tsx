import { CTAButton } from './CTAButton';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-charcoal/10 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3 lg:px-6">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">Meridian Aesthetics Studio</h3>
          <p className="mt-3 text-sm text-charcoal/70">Staten Island, NY (placeholder address)</p>
          <p className="text-sm text-charcoal/70">Mon–Fri 9am–7pm • Sat 10am–4pm</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">Medical Disclaimer</h3>
          <p className="mt-3 text-sm text-charcoal/70">Information on this site is educational and does not replace medical advice. Individual results vary.</p>
        </div>
        <div className="md:text-right">
          <p className="text-sm text-charcoal/70">Ready to begin?</p>
          <div className="mt-3 inline-flex">
            <CTAButton href="/contact">Request a Private Consultation</CTAButton>
          </div>
        </div>
      </div>
    </footer>
  );
}
