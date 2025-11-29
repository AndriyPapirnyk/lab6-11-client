import { useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../../store/cartSlice';
import type { CartItem as CartItemType } from '../../store/types';
import './CartItem.scss';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(updateQuantity({ id: item.car._id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.car._id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeFromCart(item.car._id));
    }
  };

  const totalPrice = item.car.price * item.quantity;

  return (
    <div className="cart-item">
      <div className="cart-item__image">
        <img src={item.car.image} alt={item.car.name} />
      </div>

      <div className="cart-item__info">
        <h3 className="cart-item__name">{item.car.name}</h3>
      </div>

      <div className="cart-item__controls">
        <button className="cart-item__btn" onClick={handleDecrement}>
          -
        </button>
        <span className="cart-item__quantity">{item.quantity}</span>
        <button className="cart-item__btn" onClick={handleIncrement}>
          +
        </button>
      </div>

      <div className="cart-item__price">
        ${totalPrice.toLocaleString()}
      </div>
    </div>
  );
}
