import AsteroidApproaches from '@/components/AsteroidApproaches/AsteroidApproaches';
import AsteroidDetails from '@/components/AsteroidDetails/AsteroidDetails';
import { fetchAsteroidDataById } from '@/services/fetchAsteroidDataById';
import styles from './page.module.css';

export const dynamic = 'force-dynamic';

type AsteroidPageProps = {
  params: {
    id: string;
  };
};

async function AsteroidPage({ params: { id } }: AsteroidPageProps) {
  const { asteroid, approaches } = await fetchAsteroidDataById(id);
  return (
    <div className={styles.asteroidPage}>
      <AsteroidDetails asteroid={asteroid} />
      <AsteroidApproaches approaches={approaches} />
    </div>
  );
}

export default AsteroidPage;
