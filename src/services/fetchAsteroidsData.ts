export const fetchAsteroidsData = async (page: number) => {
  const today = new Date();
  const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
  const currentDate = new Date(today.getTime() + page * oneDayInMilliseconds);
  const formattedDate = currentDate.toISOString().split('T')[0];
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/asteroids?date=${formattedDate}`,
      {
        cache: 'no-store',
      }
    );
    return response.json();
  } catch (error) {
    console.error('Error fetching data from server', error);
  }
};