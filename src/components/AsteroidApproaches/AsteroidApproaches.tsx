import { IApproaches } from '@/interfaces/IApproaches';
import styles from './AsteroidApproaches.module.css';
import { formatFullDate } from '@/utils/formatFullDate';

const AsteroidApproaches = ({ approaches }: { approaches: IApproaches[] }) => {
  return (
    <div className={styles.asteroidApproaches}>
      <h2 className={styles.title}>Сближения с Землёй:</h2>
      <ul className={styles.approachList}>
        {approaches.map((approach, index) => (
          <li className={styles.approachItem} key={index}>
            <h3 className={styles.approachTitle}>Сближение {index + 1}</h3>
            <p className={styles.approachDesc}>
              <span className={styles.desc}>Скорость относительно Земли:</span>{' '}
              {Math.floor(approach.velocity).toLocaleString('ru-RU')} км/с
            </p>
            <p className={styles.approachDesc}>
              <span className={styles.desc}>Дата максимального сближения:</span>{' '}
              {formatFullDate(approach.approachTime)}
            </p>
            <p className={styles.approachDesc}>
              <span className={styles.desc}>Расстояние до Земли:</span>{' '}
              {Math.floor(approach.distance).toLocaleString('ru-RU')} км
            </p>
            <p className={styles.approachDesc}>
              <span className={styles.desc}>Орбита:</span>{' '}
              {approach.orbitingBody}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AsteroidApproaches;
