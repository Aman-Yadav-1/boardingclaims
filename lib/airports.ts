const LUFTHANSA_API_KEY = process.env.LUFTHANSA_API_KEY;
const LUFTHANSA_SECRET = process.env.LUFTHANSA_SECRET;

async function getAccessToken() {
  const credentials = Buffer.from(`${LUFTHANSA_API_KEY}:${LUFTHANSA_SECRET}`).toString('base64');
  
  const response = await fetch('https://api.lufthansa.com/v1/oauth/token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
  });
  
  const data = await response.json();
  return data.access_token;
}

export async function fetchAirports() {
  try {
    const accessToken = await getAccessToken();
    const response = await fetch('https://api.lufthansa.com/v1/references/airports', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json'
      }
    });
    return await response.json();
  } catch (error) {
    console.error('Error fetching airports:', error);
    return [];
  }
}
