import AsteroidList from './../components/AsteroidsList/AsteroidList';
import Cart from './../components/Cart/Cart';
import { fetchAsteroidsData } from '@/services/fetchAsteroidsData';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const asteroids = await fetchAsteroidsData(0);
  return (
    <>
      <AsteroidList asteroids={asteroids} />
      <Cart />
    </>
  );
}
