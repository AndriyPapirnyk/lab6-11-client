import type { Car } from '../context/CarsContext';

export interface CartItem {
  car: Car;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}
