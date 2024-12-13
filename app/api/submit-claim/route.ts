import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const fileName = `claim-${Date.now()}.json`;
    const claimsDir = path.join(process.cwd(), 'claims');
    const filePath = path.join(claimsDir, fileName);

    // Ensure the claims directory exists
    await fs.mkdir(claimsDir, { recursive: true });

    // Write the claim data to a file
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));

    return new NextResponse(JSON.stringify({ success: true, fileName }), { status: 200 });
  } catch (error) {
    console.error('Error saving claim:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new NextResponse(JSON.stringify({ success: false, error: errorMessage }), { status: 500 });
  }
}