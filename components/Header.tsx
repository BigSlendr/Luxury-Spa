import Link from 'next/link';
import { navLinks } from '@/data/siteData';
import { CTAButton } from './CTAButton';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-charcoal/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 lg:px-6">
        <Link href="/" className="text-sm font-semibold tracking-[0.2em] text-charcoal">MERIDIAN AESTHETICS STUDIO</Link>
        <nav className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-charcoal/80 transition hover:text-charcoal">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="tel:+17185551234" className="hidden text-sm text-charcoal/75 hover:text-charcoal sm:inline">Call / Text</a>
          <CTAButton href="/contact">Request Consultation</CTAButton>
        </div>
      </div>
    </header>
  );
}
