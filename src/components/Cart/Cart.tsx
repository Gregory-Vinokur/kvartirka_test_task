'use client';
import Link from 'next/link';
import styles from './Cart.module.css';
import { useCart } from '@/store/cartProvider';
import { getAsteroidNounForm } from '@/utils/getAsteroidNounForm';

const Cart = () => {
  const { selectedItems } = useCart();
  const asteroidCount = selectedItems.length;
  const asteroidNounForm = getAsteroidNounForm(asteroidCount);
  return (
    <div className={styles.cart}>
      <div className={styles.cartText}>
        <p className={styles.cartTextTitle}>Корзина</p>
        <p className={styles.cartTextLength}>
          {selectedItems.length} {asteroidNounForm}
        </p>
      </div>
      <Link href="/cart" legacyBehavior>
        <button className={styles.cartButton} disabled={!selectedItems.length}>
          Отправить
        </button>
      </Link>
    </div>
  );
};

export default Cart;
