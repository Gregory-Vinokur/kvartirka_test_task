'use client';
import Link from 'next/link';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import AsteroidDetails from '@/components/AsteroidDetails/AsteroidDetails';
import { useCart } from '@/store/cartProvider';
import { IAsteroidItem } from '@/interfaces/IAsteroidItem';

function CartPage() {
  const { selectedItems, orderAsteroids } = useCart();

  useEffect(() => {
    return () => {
      orderAsteroids();
    };
  }, [orderAsteroids]);

  return (
    <div className={styles.cartPage}>
      <h3 className={styles.cartInfo}>Заказ отправлен!</h3>
      {selectedItems.map((asteroid: IAsteroidItem) => (
        <AsteroidDetails
          key={asteroid.id}
          asteroid={asteroid}
          showButton={false}
        />
      ))}
      <Link href={'/'}>
        <button className={styles.button}>Назад</button>
      </Link>
    </div>
  );
}

export default CartPage;
