const LUFTHANSA_API_KEY = process.env.NEXT_PUBLIC_LUFTHANSA_API_KEY;
const LUFTHANSA_SECRET = process.env.NEXT_PUBLIC_LUFTHANSA_SECRET;

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
    const data = await response.json();
    console.log('API Response:', data); // Debug the response structure

    if (data && data.AirportResource && data.AirportResource.Airports) {
      return data.AirportResource.Airports.Airport.map((airport: any) => ({
        code: airport.AirportCode,
        name: airport.Names?.Name?.find((name: any) => name['@LanguageCode'] === 'en')?.$ || airport.AirportCode
      }));
    } else {
      console.error('Invalid API response structure:', data);
      return [];
    }
  } catch (error) {
    console.error('Error fetching airports:', error);
    return [];
  }
}
