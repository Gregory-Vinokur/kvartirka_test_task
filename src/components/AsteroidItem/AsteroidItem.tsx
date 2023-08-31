import styles from './AsteroidItem.module.css';
import Image from 'next/image';
import ArrowSvg from '../../assets/img/arrow.svg';
import AsteroidImage from '../../assets/img/Asteroid.png';
import { IAsteroidItem } from '@/interfaces/IAsteroidItem';
import Link from 'next/link';
import { formatDate } from '@/utils/formatDate';
import { correctConjugation } from '@/utils/correctConjugation';

const AsteroidItem = ({
  name,
  approachDate,
  missDistance,
  diameter,
  isHazard,
  distanceUnit,
  id,
}: IAsteroidItem) => {
  const isInCart = false;
  let asteroidImageSize: { width?: number; height?: number } = {
    width: 25,
    height: 27,
  };
  if (diameter > 200) {
    asteroidImageSize = { height: 40 };
  }

  const formattedDistance = Math.floor(+missDistance);

  return (
    <div className={styles.asteroid}>
      <p className={styles.asteroidData}>{formatDate(approachDate)}</p>
      <div className={styles.info}>
        <div className={styles.infoDistance}>
          {distanceUnit === 'km' ? (
            <p>{formattedDistance.toLocaleString() + ' км'}</p>
          ) : (
            <p>
              {formattedDistance.toLocaleString()}{' '}
              {correctConjugation(formattedDistance)}
            </p>
          )}
          <ArrowSvg />
        </div>
        <Image
          className="asteroid__image_default"
          alt="asteroid"
          src={AsteroidImage}
          width={asteroidImageSize.width}
          height={asteroidImageSize.height}
        />
        <div className={styles.infoOtherStats}>
          <Link href={`/asteroids/${id}`} passHref legacyBehavior>
            <p className={styles.infoName}>{name}</p>
          </Link>
          <p className={styles.infoDiameter}>{`Ø ${Math.floor(
            diameter
          ).toLocaleString()} м`}</p>
        </div>
      </div>
      <div className={styles.asteroidOptions}>
        <button className={`${styles.order} ${isInCart && styles.orderActive}`}>
          {isInCart ? 'В Корзине' : 'Заказать'}
        </button>

        <div className={styles.hazard}>
          {isHazard && <p>&#9888;&#65039; Опасен</p>}
        </div>
      </div>
    </div>
  );
};

export default AsteroidItem;
