import styles from './AsteroidDetails.module.css';
import AsteroidImage from '../../assets/img/Asteroid.png';
import Image from 'next/image';
import Link from 'next/link';
import { IAsteroidItem } from '@/interfaces/IAsteroidItem';

type AsteroidDetailsProps = {
  asteroid: IAsteroidItem;
};

const AsteroidDetails = ({ asteroid }: AsteroidDetailsProps) => {
  return (
    <div className={styles.container}>
      <div>
        <Image alt="asteroid" src={AsteroidImage} width={60} height={70} />
      </div>
      <div className={styles.details}>
        <h1>{asteroid.name}</h1>
        <p>{`Ø ${Math.floor(asteroid.diameter).toLocaleString('ru-RU')} м`}</p>
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
