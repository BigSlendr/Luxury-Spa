import { CTAButton } from './CTAButton';

export function FloatingMobileCTA() {
  return (
    <div className="fixed bottom-3 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 rounded-2xl bg-white p-2 shadow-soft md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <CTAButton href="tel:+17185551234" variant="secondary" className="py-2">Call / Text</CTAButton>
        <CTAButton href="/contact" className="py-2">Consultation</CTAButton>
      </div>
    </div>
  );
}
