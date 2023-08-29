import Link from 'next/link';
import styles from './Cart.module.css';

const Cart = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.cartText}>
        <p className={styles.cartTextTitle}>Корзина</p>
        <p className={styles.cartTextLength}>0 астероидов</p>
      </div>
      <Link href="/cart" legacyBehavior>
        <button className={styles.cartButton}>Отправить</button>
      </Link>
    </div>
  );
};

export default Cart;
