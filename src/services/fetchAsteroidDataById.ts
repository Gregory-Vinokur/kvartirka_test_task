export const fetchAsteroidDataById = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/asteroids/${id}`,
      {
        cache: 'no-store',
      }
    );
    return response.json();
  } catch (error) {
    console.error('Error fetching data from server', error);
  }
};