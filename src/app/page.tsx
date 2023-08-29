import styles from './page.module.css';
import Image from 'next/image';
import Earth from '../assets/img/planeta_zemlia_kosmos_1.png';
import AsteroidList from './../components/AsteroidsList/AsteroidList';
import Cart from './../components/Cart/Cart';

export default function Home() {
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
        <AsteroidList />
        <Cart />
      </section>
    </main>
  );
}
