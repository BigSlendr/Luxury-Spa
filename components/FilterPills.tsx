'use client';

type Props = { options: string[]; active: string; onChange: (option: string) => void };

export function FilterPills({ options, active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`rounded-full px-4 py-2 text-sm transition ${
            active === option ? 'bg-charcoal text-white' : 'bg-white text-charcoal hover:bg-cream'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
