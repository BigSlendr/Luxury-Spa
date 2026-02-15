import { ResultsGallery } from '@/components/ResultsGallery';
import { resultsItems } from '@/data/siteData';

export default function ResultsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
      <h1 className="text-4xl font-semibold">Results Gallery</h1>
      <p className="mt-3 max-w-2xl text-charcoal/75">Preview treatment outcomes and open each case for goals and plan details.</p>
      <div className="mt-8"><ResultsGallery items={resultsItems} /></div>
      <p className="mt-8 text-sm text-charcoal/70">Disclaimer: Individual results vary based on anatomy, lifestyle, and adherence to aftercare.</p>
    </div>
  );
}
