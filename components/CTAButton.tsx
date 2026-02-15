import Link from 'next/link';
import { ReactNode } from 'react';

type Props = { href: string; children: ReactNode; variant?: 'primary' | 'secondary'; className?: string };

export function CTAButton({ href, children, variant = 'primary', className = '' }: Props) {
  const styles =
    variant === 'primary'
      ? 'bg-sage text-white hover:bg-sage/90 focus-visible:ring-sage'
      : 'border border-charcoal/20 bg-white hover:bg-cream focus-visible:ring-charcoal';

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
