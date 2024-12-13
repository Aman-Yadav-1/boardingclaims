const LUFTHANSA_API_BASE = 'https://api.lufthansa.com/v1';
const LUFTHANSA_API_KEY = process.env.NEXT_PUBLIC_LUFTHANSA_API_KEY;
const LUFTHANSA_SECRET = process.env.NEXT_PUBLIC_LUFTHANSA_SECRET;

export const lufthansaApi = {
  async getAirports() {
    const token = await this.getAccessToken();
    const response = await fetch(`${LUFTHANSA_API_BASE}/references/airports`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }
    });
    const data = await response.json();
    console.log('API Response:', data); // Add this to debug the response structure
    
    if (data && data.AirportResource && data.AirportResource.Airports) {
      return data.AirportResource.Airports.Airport.map((airport: any) => ({
        code: airport.AirportCode,
        name: airport.Names?.Name?.[0]?._ || airport.Names?.Name?.$ || airport.AirportCode
      }));
    }
    return [];
  },

  async getAccessToken() {
    const credentials = Buffer.from(`${LUFTHANSA_API_KEY}:${LUFTHANSA_SECRET}`).toString('base64');
    const response = await fetch(`${LUFTHANSA_API_BASE}/oauth/token`, {
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
};