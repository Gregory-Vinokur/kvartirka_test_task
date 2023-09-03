import { ICartContext } from "@/interfaces/ICartContext";
import { createContext } from "react";

const CartContext = createContext<ICartContext>({
  selectedItems: [],
  orderedItems: [],
  distanceUnit: 'km',
  orderAsteroids: () => { },
  addToCart: () => { },
  switchDistanceUnit: () => { },
});

export default CartContext;