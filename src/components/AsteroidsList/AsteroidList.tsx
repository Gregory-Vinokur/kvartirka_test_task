'use client';
import styles from './AsteroidList.module.css';
import AsteroidItem from '../AsteroidItem/AsteroidItem';
import {
  AsteroidsListDataType,
  IAsteroidData,
} from '@/interfaces/IAsteroidData';
import { useCallback, useEffect, useRef, useState } from 'react';
import { fetchAsteroidsData } from '@/services/fetchAsteroidsData';
import ProgressBar from '../ProgressBar/ProgressBar';
import throttle from '@/utils/throttle';

const AsteroidList = ({ asteroids }: AsteroidsListDataType) => {
  const [distanceUnit, setDistanceUnit] = useState('km');
  const [loadedAsteroids, setLoadedAsteroids] = useState(asteroids);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const switchDistanceUnit = () => {
    setDistanceUnit((prevUnit) => (prevUnit === 'km' ? 'lunar' : 'km'));
  };

  const loadMoreAsteroids = useCallback(async () => {
    setIsLoading(true);

    const newAsteroids = await fetchAsteroidsData(page);

    setIsLoading(false);

    setLoadedAsteroids((prevAsteroids) => [...prevAsteroids, ...newAsteroids]);

    setPage((prevPage) => prevPage + 1);
  }, [page]);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const handleScroll = throttle(() => {
      if (
        container.scrollTop + container.clientHeight >=
          container.scrollHeight &&
        !isLoading
      ) {
        loadMoreAsteroids();
      }
    }, 350);

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading, loadMoreAsteroids]);

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
      <div ref={containerRef} className={styles.asteroidItems}>
        {loadedAsteroids.map((asteroid: IAsteroidData) => (
          <AsteroidItem
            key={asteroid.id}
            id={asteroid.id}
            name={asteroid.name}
            approachDate={asteroid.approachDate}
            missDistance={asteroid.missDistance[distanceUnit as 'lunar' | 'km']}
            diameter={asteroid.diameter}
            isHazard={asteroid.isHazard}
            distanceUnit={distanceUnit}
          />
        ))}
        {isLoading && <ProgressBar />}
      </div>
    </div>
  );
};

export default AsteroidList;
