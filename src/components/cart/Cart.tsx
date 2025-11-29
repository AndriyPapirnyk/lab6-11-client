import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../../store/store';
import CartItem from '../cartItem/CartItem';
import PrimaryButton from '../ui/PrimaryButton';
import './Cart.scss';

export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.car.price * item.quantity,
    0
  );

  const handleContinue = () => {
    navigate('/cart/checkout');
  };

  const handleBackToCatalog = () => {
    navigate('/catalog');
  };

  if (cartItems.length === 0) {
    return (
      <section className="cart">
        <h1 className="cart__title">Shopping Cart</h1>
        <div className="cart__empty">
          <p>Your cart is empty</p>
          <div onClick={handleBackToCatalog}>
            <PrimaryButton type={1} text="Go to Catalog" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="cart">
      <h1 className="cart__title">Shopping Cart</h1>

      <div className="cart__items">
        {cartItems.map((item) => (
          <CartItem key={item.car._id} item={item} />
        ))}
      </div>

      <div className="cart__total">
        <span className="cart__total-label">Total amount:</span>
        <span className="cart__total-price">${totalAmount.toLocaleString()}</span>
      </div>

      <div className="cart__actions">
        <div onClick={handleBackToCatalog}>
          <PrimaryButton type={2} text="Back to Catalog" />
        </div>
        <div onClick={handleContinue}>
          <PrimaryButton type={1} text="Continue" />
        </div>
      </div>
    </section>
  );
}
