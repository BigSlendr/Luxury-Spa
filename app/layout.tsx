import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingMobileCTA } from '@/components/FloatingMobileCTA';

export const metadata: Metadata = {
  title: 'Meridian Aesthetics Studio',
  description: 'Premium med spa consultation-focused website demo.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingMobileCTA />
      </body>
    </html>
  );
}
