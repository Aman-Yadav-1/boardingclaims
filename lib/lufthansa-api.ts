const LUFTHANSA_API_KEY = process.env.NEXT_PUBLIC_LUFTHANSA_API_KEY;
const LUFTHANSA_SECRET = process.env.NEXT_PUBLIC_LUFTHANSA_SECRET;

let cachedAirports: any[] | null = null;

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

export async function getAirports() {
  if (cachedAirports) {
    return cachedAirports;
  }

  try {
    const accessToken = await getAccessToken();
    let allAirports: any[] = [];
    let offset = 0;
    const limit = 100;
    let hasMore = true;

    while (hasMore) {
      const response = await fetch(
        `https://api.lufthansa.com/v1/mds-references/airports?limit=${limit}&offset=${offset}&LHoperated=1`, 
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Accept': 'application/json'
          }
        }
      );
      const data = await response.json();
      
      if (data?.AirportResource?.Airports?.Airport) {
        const airports = Array.isArray(data.AirportResource.Airports.Airport) 
          ? data.AirportResource.Airports.Airport 
          : [data.AirportResource.Airports.Airport];

        const formattedAirports = airports.map((airport: any, index: number) => {
          let name = airport.AirportCode;
          
          if (airport.Names && airport.Names.Name) {
            const names = Array.isArray(airport.Names.Name) 
              ? airport.Names.Name 
              : [airport.Names.Name];
              
            const englishName = names.find((n: any) => n['@LanguageCode'] === 'EN');
            if (englishName) {
              name = englishName['$'];
            }
          }

          return {
            code: `${airport.AirportCode}-${index}`,
            name: name,
            cityCode: airport.CityCode,
            countryCode: airport.CountryCode
          };
        });

        allAirports = [...allAirports, ...formattedAirports];
        hasMore = airports.length === limit;
        offset += limit;
      } else {
        hasMore = false;
      }
    }

    cachedAirports = allAirports;
    return allAirports;

  } catch (error) {
    console.error('Error fetching airports:', error);
    return [];
  }
}