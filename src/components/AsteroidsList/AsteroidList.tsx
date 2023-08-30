'use client';
import styles from './AsteroidList.module.css';
import AsteroidItem from '../AsteroidItem/AsteroidItem';
import {
  AsteroidsListDataType,
  IAsteroidData,
} from '@/interfaces/IAsteroidData';
import { useState } from 'react';

const AsteroidList = ({ asteroids }: AsteroidsListDataType) => {
  const [distanceUnit, setDistanceUnit] = useState('km');

  const switchDistanceUnit = () => {
    setDistanceUnit((prevUnit) => (prevUnit === 'km' ? 'lunar' : 'km'));
  };

  return (
    <div className={styles.asteroidList}>
      <h3 className={styles.asteroidListTitle}>Ближайшие подлёты астероидов</h3>
      <div className={styles.asteroidListDist}>
        <a
          onClick={switchDistanceUnit}
          className={distanceUnit === 'lunar' ? styles.inactive : ''}
        >
          в километрах
        </a>{' '}
        |{' '}
        <a
          onClick={switchDistanceUnit}
          className={distanceUnit === 'km' ? styles.inactive : ''}
        >
          в лунных орбитах
        </a>
      </div>
      <div className={styles.asteroidItems}>
        {asteroids.map((asteroid: IAsteroidData) => (
          <AsteroidItem
            key={asteroid.id}
            name={asteroid.name}
            approachDate={asteroid.approachDate}
            missDistance={asteroid.missDistance[distanceUnit as 'lunar' | 'km']}
            diameter={asteroid.diameter}
            isHazard={asteroid.isHazard}
            distanceUnit={distanceUnit}
          />
        ))}
      </div>
    </div>
  );
};

export default AsteroidList;
