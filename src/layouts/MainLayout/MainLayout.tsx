import Image from 'next/image';
import styles from './MainLayout.module.css';
import Earth from '../../assets/img/planeta_zemlia_kosmos_1.png';
import EarthLowQuality from '../../assets/img/Earth_low_quality.jpg';
import { CartProvider } from '@/store/cartProvider';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.pageTitleContainer}>
          <h1 className={styles.pageTitle}>Armagedon 2023</h1>
          <p className={styles.pageTitleDesc}>ООО “Команда им. Б. Уиллиса”.</p>
          <p className={styles.pageTitleDesc}>
            Взрываем астероиды с 1998 года.
          </p>
        </div>
        <section className={styles.asteroidSection}>
          <div className={styles.earthImage}>
            <Image
              src={Earth}
              alt="Planet Earth"
              placeholder="blur"
              blurDataURL={EarthLowQuality.src}
            />
          </div>
          <CartProvider>{children}</CartProvider>
        </section>
      </main>
      <footer className={styles.footer}>© Все права и планета защищены</footer>
    </>
  );
};

export default MainLayout;
