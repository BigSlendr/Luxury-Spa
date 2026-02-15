export function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-charcoal/10 bg-white shadow-soft">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead className="bg-cream">
          <tr>
            <th className="px-4 py-3">Feature</th>
            <th className="px-4 py-3">Glow</th>
            <th className="px-4 py-3">Sculpt</th>
            <th className="px-4 py-3">Elite</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-charcoal/10"><td className="px-4 py-3">Member Savings</td><td className="px-4 py-3">5%</td><td className="px-4 py-3">10%</td><td className="px-4 py-3">15%</td></tr>
          <tr className="border-t border-charcoal/10"><td className="px-4 py-3">Priority Booking</td><td className="px-4 py-3">—</td><td className="px-4 py-3">✓</td><td className="px-4 py-3">✓✓</td></tr>
          <tr className="border-t border-charcoal/10"><td className="px-4 py-3">VIP Concierge</td><td className="px-4 py-3">—</td><td className="px-4 py-3">—</td><td className="px-4 py-3">✓</td></tr>
        </tbody>
      </table>
    </div>
  );
}
