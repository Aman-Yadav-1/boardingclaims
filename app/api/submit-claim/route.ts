import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  const data = await request.json();
  const fileName = `claim-${Date.now()}.json`;
  const filePath = path.join(process.cwd(), 'claims', fileName);
  
  await writeFile(filePath, JSON.stringify(data, null, 2));
  
  return new Response(JSON.stringify({ success: true, fileName }));
}
