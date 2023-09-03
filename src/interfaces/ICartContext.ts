import { IAsteroidItem } from "./IAsteroidItem";

export interface ICartContext {
  selectedItems: IAsteroidItem[];
  orderedItems: IAsteroidItem[];
  distanceUnit: string;
  orderAsteroids: () => void;
  addToCart: (asteroidData: IAsteroidItem) => void;
  switchDistanceUnit: () => void;
}