'use client';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import { useCart } from '@/store/cartProvider';
import { IAsteroidItem } from '@/interfaces/IAsteroidItem';
import AsteroidItem from '@/components/AsteroidItem/AsteroidItem';

function CartPage() {
  const { selectedItems, orderAsteroids, distanceUnit } = useCart();

  // useEffect(() => {
  //   return () => {
  //     orderAsteroids();
  //   };
  // }, [orderAsteroids]);

  return (
    <div className={styles.cartPage}>
      <h3 className={styles.cartInfo}>Заказ отправлен!</h3>
      <div className={styles.cartItems}>
        {selectedItems.map((asteroid: IAsteroidItem) => (
          <AsteroidItem
            key={asteroid.id}
            id={asteroid.id}
            name={asteroid.name}
            approachDate={asteroid.approachDate}
            missDistance={asteroid.missDistance}
            diameter={asteroid.diameter}
            isHazard={asteroid.isHazard}
            distanceUnit={distanceUnit}
            showButton={false}
          />
        ))}
      </div>
    </div>
  );
}

export default CartPage;
