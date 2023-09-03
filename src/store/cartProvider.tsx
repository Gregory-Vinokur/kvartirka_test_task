'use client';
import { useContext, useState } from 'react';
import CartContext from './cartContext';
import { IAsteroidItem } from '@/interfaces/IAsteroidItem';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [selectedItems, setSelectedItems] = useState<Array<IAsteroidItem>>([]);
  const [orderedItems, setOrderedItems] = useState<Array<IAsteroidItem>>([]);
  const [distanceUnit, setDistanceUnit] = useState<string>('km');

  const switchDistanceUnit = () => {
    setDistanceUnit((prevUnit) => {
      const newUnit = prevUnit === 'km' ? 'lunar' : 'km';
      return newUnit;
    });
  };

  const addToCart = (asteroidData: IAsteroidItem) => {
    setSelectedItems([...selectedItems, asteroidData]);
  };

  const orderAsteroids = () => {
    setOrderedItems(selectedItems);
    setSelectedItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        selectedItems,
        orderedItems,
        distanceUnit,
        switchDistanceUnit,
        addToCart,
        orderAsteroids,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
