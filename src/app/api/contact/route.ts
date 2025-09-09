export const runtime = 'edge';
export const dynamic = 'force-dynamic';

import type { NextRequest } from 'next/server';

export async function GET() {
  return new Response('Contact endpoint is alive', {
    status: 200,
    headers: { 'content-type': 'text/plain' },
  });
}

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const name = String(form.get('name') || '');
  const email = String(form.get('email') || '');

  if (!name || !email) {
    return new Response(JSON.stringify({ ok: false, error: 'Missing fields' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }

  console.log('New contact submission', { name, email });

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
}
