import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (code) {
    // Exchange the authorization code for an access token
    const tokenResponse = await fetch('https://api.lufthansa.com/v1/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: process.env.LUFTHANSA_CLIENT_ID!,
        client_secret: process.env.LUFTHANSA_CLIENT_SECRET!,
        code,
        redirect_uri: 'https://boardingclaims.com/api/auth/callback'
      })
    });

    const tokenData = await tokenResponse.json();
    
    // Store the access token securely
    // Redirect back to the claim form
    return NextResponse.redirect(new URL('/claim-form', request.url));
  }

  return NextResponse.json({ error: 'No authorization code provided' }, { status: 400 });
}
