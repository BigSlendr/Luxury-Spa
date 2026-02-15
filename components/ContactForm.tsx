'use client';

import { FormEvent, useState } from 'react';

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  contactMethod: string;
  interest: string;
  availability: string;
  message: string;
};

const initialForm: FormData = {
  fullName: '',
  phone: '',
  email: '',
  contactMethod: 'text',
  interest: 'Botox',
  availability: 'Weekdays',
  message: ''
};

export function ContactForm({ subject }: { subject?: string }) {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = () => {
    const nextErrors: Partial<FormData> = {};
    if (!form.fullName.trim()) nextErrors.fullName = 'Full name is required.';
    if (!form.phone.trim()) nextErrors.phone = 'Phone is required.';
    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    try {
      setStatus('submitting');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, subject })
      });
      if (!response.ok) throw new Error('Failed');
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow-soft">
      <h2 className="text-2xl font-semibold">Request a Private Consultation</h2>
      <p className="mt-2 text-sm text-charcoal/70">Trusted by licensed medical professionals. Your information stays private.</p>
      <div className="mt-5 space-y-4">
        <label className="block text-sm">Full name*
          <input value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} className="mt-1 w-full rounded-xl border border-charcoal/20 px-3 py-2" aria-invalid={!!errors.fullName} aria-describedby="fullName-error" />
          {errors.fullName && <span id="fullName-error" className="text-xs text-red-600">{errors.fullName}</span>}
        </label>
        <label className="block text-sm">Phone*
          <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1 w-full rounded-xl border border-charcoal/20 px-3 py-2" aria-invalid={!!errors.phone} aria-describedby="phone-error" />
          {errors.phone && <span id="phone-error" className="text-xs text-red-600">{errors.phone}</span>}
        </label>
        <label className="block text-sm">Email (optional)
          <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 w-full rounded-xl border border-charcoal/20 px-3 py-2" />
        </label>
        <fieldset>
          <legend className="text-sm">Preferred contact method</legend>
          <div className="mt-2 flex gap-4 text-sm">
            {['text', 'call'].map((method) => (
              <label key={method} className="flex items-center gap-2">
                <input type="radio" checked={form.contactMethod === method} onChange={() => setForm({ ...form, contactMethod: method })} />
                {method.toUpperCase()}
              </label>
            ))}
          </div>
        </fieldset>
        <label className="block text-sm">Primary interest
          <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} className="mt-1 w-full rounded-xl border border-charcoal/20 px-3 py-2">
            {['Botox', 'Fillers', 'Laser', 'Microneedling', 'Hydrafacial', 'Body Contouring'].map((interest) => <option key={interest}>{interest}</option>)}
          </select>
        </label>
        <label className="block text-sm">Availability
          <select value={form.availability} onChange={(e) => setForm({ ...form, availability: e.target.value })} className="mt-1 w-full rounded-xl border border-charcoal/20 px-3 py-2">
            {['Weekdays', 'Weekends', 'Mornings', 'Evenings'].map((availability) => <option key={availability}>{availability}</option>)}
          </select>
        </label>
        <label className="block text-sm">Message (optional)
          <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1 min-h-24 w-full rounded-xl border border-charcoal/20 px-3 py-2" />
        </label>
      </div>
      <button type="submit" className="mt-5 w-full rounded-2xl bg-sage px-4 py-3 text-sm font-medium text-white hover:bg-sage/90 disabled:opacity-60" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Submitting...' : 'Request Consultation'}
      </button>
      {status === 'success' && <p className="mt-3 text-sm text-green-700">Thank you. We’ll contact you shortly with next steps.</p>}
      {status === 'error' && <p className="mt-3 text-sm text-red-600">Something went wrong. Please call or text us directly.</p>}
    </form>
  );
}
