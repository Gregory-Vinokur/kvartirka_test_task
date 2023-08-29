import styles from './AsteroidList.module.css';
import AsteroidItem from '../AsteroidItem/AsteroidItem';

const AsteroidList = () => {
  return (
    <div className={styles.asteroidList}>
      <h3 className={styles.asteroidListTitle}>Ближайшие подлёты астероидов</h3>
      <div className={styles.asteroidListDist}>
        <a>в километрах</a> |{' '}
        <a className={styles.inactive}>в лунных орбитах</a>
      </div>
      <div className={styles.asteroidItems}>
        <AsteroidItem />
        <AsteroidItem />
        <AsteroidItem />
        <AsteroidItem />
        <AsteroidItem />
      </div>
    </div>
  );
};

export default AsteroidList;
