import styles from './AsteroidItem.module.css';
import Image from 'next/image';
import ArrowSvg from '../../assets/img/arrow.svg';
import AsteroidImage from '../../assets/img/Asteroid.png';
import Link from 'next/link';

const AsteroidItem = () => {
  const isInCart = false;
  const isHazard = false;
  return (
    <div className={styles.asteroid}>
      <p className={styles.asteroidData}>12 сентября 2023</p>
      <div className={styles.info}>
        <div className={styles.infoDistance}>
          <p>5 652 334 км</p>
          <ArrowSvg />
        </div>
        <Image
          className="asteroid__image_default"
          alt="asteroid"
          src={AsteroidImage}
        />
        <div className={styles.infoOtherStats}>
          <a className={styles.infoName}>2021 FQ</a>
          <p className={styles.infoDiameter}>{`Ø 85 м`}</p>
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
