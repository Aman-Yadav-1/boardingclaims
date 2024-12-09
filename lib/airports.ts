export async function fetchAirports() {
  try {
    // Example using free API
    const response = await fetch('https://api.example.com/airports');
    const airports = await response.json();
    return airports;
  } catch (error) {
    console.error('Error fetching airports:', error);
    return [];
  }
}
