import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Consultation request received:', body);

    // TODO: Swap this console log for email delivery via Resend or Formspree.
    // TODO: Add persistence / CRM integration as needed.

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
