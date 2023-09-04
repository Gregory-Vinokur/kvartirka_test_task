'use client';
import styles from './AsteroidItem.module.css';
import Image from 'next/image';
import ArrowSvg from '../../assets/img/arrow.svg';
import AsteroidImage from '../../assets/img/Asteroid.png';
import { IAsteroidItem } from '@/interfaces/IAsteroidItem';
import Link from 'next/link';
import { formatDate } from '@/utils/formatDate';
import { correctConjugation } from '@/utils/correctConjugation';
import { useEffect, useState } from 'react';
import { useCart } from '@/store/cartProvider';

const AsteroidItem = (props: IAsteroidItem) => {
  const [isInCart, setIsInCart] = useState<boolean>(false);
  const [isOrdered, setIsOrdered] = useState<boolean | null>(null);
  const { addToCart, orderedItems, selectedItems } = useCart();
  const {
    name,
    approachDate,
    missDistance,
    diameter,
    isHazard,
    distanceUnit,
    id,
    showButton,
  } = props;

  let asteroidImageSize: { width?: number; height?: number } = {
    width: 25,
    height: 27,
  };
  if (diameter > 200) {
    asteroidImageSize = { height: 40 };
  }

  useEffect(() => {
    const ordered = orderedItems.some(
      (orderedAsteroid: IAsteroidItem) => orderedAsteroid.id === id
    );
    if (ordered) {
      setIsOrdered(true);
    } else {
      setIsOrdered(false);
    }
    const inCart = selectedItems.some(
      (inCartAsteroid: IAsteroidItem) => inCartAsteroid.id === id
    );
    if (inCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [id, orderedItems, selectedItems]);

  const formattedDistance = Math.floor(+missDistance);

  const handleOrder = () => {
    setIsInCart(true);
    addToCart(props);
  };

  return (
    <div className={styles.asteroid} suppressHydrationWarning={true}>
      <p className={styles.asteroidData}>{formatDate(approachDate)}</p>
      <div className={styles.info}>
        <div className={styles.infoDistance}>
          {!distanceUnit && <p>Загрузка...</p>}
          {distanceUnit &&
            (distanceUnit === 'km' ? (
              <p>{formattedDistance.toLocaleString() + ' км'}</p>
            ) : (
              <p>
                {formattedDistance.toLocaleString()}{' '}
                {correctConjugation(formattedDistance)}
              </p>
            ))}
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
        {isOrdered === false && showButton && (
          <button
            className={`${styles.order} ${isInCart && styles.orderActive}`}
            type="submit"
            onClick={handleOrder}
            disabled={isInCart}
          >
            {isInCart ? 'В Корзине' : 'Заказать'}
          </button>
        )}
        {isOrdered && showButton && (
          <button
            className={`${styles.order} ${styles.orderActive}`}
            disabled={true}
          >
            Заказ отправлен
          </button>
        )}
        <div className={styles.hazard}>
          {isHazard && <p>&#9888;&#65039; Опасен</p>}
        </div>
      </div>
    </div>
  );
};

export default AsteroidItem;
