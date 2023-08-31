import { IAsteroidData } from '@/interfaces/IAsteroidData';
import styles from './AsteroidDetails.module.css';
import AsteroidImage from '../../assets/img/Asteroid.png';
import Image from 'next/image';
import Link from 'next/link';

const AsteroidDetails = ({ asteroid }: { asteroid: IAsteroidData }) => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <Link href={'/'}>
          <button className={styles.button}>Назад</button>
        </Link>
      </div>
      <div>
        <Image alt="asteroid" src={AsteroidImage} width={60} height={70} />
      </div>
      <div className={styles.details}>
        <h1>{asteroid.name}</h1>
        <p>{`Ø ${Math.floor(asteroid.diameter).toLocaleString()} м`}</p>
        {asteroid.isHazard ? (
          <p>&#9888;&#65039; Опасен</p>
        ) : (
          <p>&#127800; Не опасен</p>
        )}
      </div>
    </div>
  );
};

export default AsteroidDetails;
