import styles from './page.module.css';
import Image from 'next/image';
import Earth from '../assets/img/planeta_zemlia_kosmos_1.png';
import AsteroidList from './../components/AsteroidsList/AsteroidList';
import Cart from './../components/Cart/Cart';

const fetchData = async (page: number) => {
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

export default async function Home() {
  const asteroids = await fetchData(0);
  return (
    <main className={styles.main}>
      <div className={styles.pageTitleContainer}>
        <h1 className={styles.pageTitle}>Armagedon 2023</h1>
        <p className={styles.pageTitleDesc}>ООО “Команда им. Б. Уиллиса”.</p>
        <p className={styles.pageTitleDesc}>Взрываем астероиды с 1998 года.</p>
      </div>
      <section className={styles.asteroidSection}>
        <div>
          <Image src={Earth} alt="Planet Earth" />
        </div>
        <AsteroidList asteroids={asteroids} />
        <Cart />
      </section>
    </main>
  );
}
