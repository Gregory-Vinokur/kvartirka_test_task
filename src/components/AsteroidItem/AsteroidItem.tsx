import styles from './AsteroidItem.module.css';
import Image from 'next/image';
import ArrowSvg from '../../assets/img/arrow.svg';
import AsteroidImage from '../../assets/img/Asteroid.png';
import { IAsteroidItem } from '@/interfaces/IAsteroidItem';

const AsteroidItem = ({
  name,
  approachDate,
  missDistance,
  diameter,
  isHazard,
  distanceUnit,
}: IAsteroidItem) => {
  const isInCart = false;
  let asteroidImageSize: { width?: number; height?: number } = {
    width: 25,
    height: 27,
  };
  if (diameter > 200) {
    asteroidImageSize = { height: 40 };
  }

  function addThousandSeparators(inputString: string) {
    return inputString.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' км';
  }

  function formatDate(inputDate: string) {
    const monthsCodes = [
      'янв',
      'фев',
      'мар',
      'апр',
      'май',
      'июн',
      'июл',
      'авг',
      'сен',
      'окт',
      'ноя',
      'дек',
    ];

    const dateParts = inputDate.split('-');
    const day = dateParts[2];
    const monthIndex = parseInt(dateParts[1], 10) - 1;
    const month = monthsCodes[monthIndex];
    const year = dateParts[0];

    return `${day} ${month} ${year}`;
  }

  const formattedDistance = Math.floor(+missDistance);

  function correctConjugation(): string {
    if (formattedDistance === 1) {
      return 'лунная орбита';
    } else if (formattedDistance >= 2 && formattedDistance <= 4) {
      return 'лунные орбиты';
    } else if (formattedDistance >= 5 && formattedDistance <= 20) {
      return 'лунных орбит';
    } else if (formattedDistance % 10 === 1) {
      return 'лунная орбита';
    } else if (formattedDistance % 10 >= 2 && formattedDistance % 10 <= 4) {
      return 'лунные орбиты';
    } else {
      return 'лунных орбит';
    }
  }

  return (
    <div className={styles.asteroid}>
      <p className={styles.asteroidData}>{formatDate(approachDate)}</p>
      <div className={styles.info}>
        <div className={styles.infoDistance}>
          {distanceUnit === 'km' ? (
            <p>{addThousandSeparators(formattedDistance.toString())}</p>
          ) : (
            <p>
              {formattedDistance.toLocaleString()} {correctConjugation()}
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
          <a className={styles.infoName}>{name}</a>
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
