import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../ui/PrimaryButton';
import './Success.scss';

export default function Success() {
  const navigate = useNavigate();

  const handleBackToCatalog = () => {
    navigate('/catalog');
  };

  return (
    <section className="success">
      <div className="success__content">
        <div className="success__icon">
          <svg viewBox="0 0 52 52" className="success__checkmark">
            <circle className="success__checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
            <path className="success__checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
          </svg>
        </div>

        <h1 className="success__title">Success!</h1>

        <p className="success__message">
          Your order was sent to processing!
          <br />
          Check your email box for further information.
        </p>

        <div onClick={handleBackToCatalog}>
          <PrimaryButton type={1} text="Go back to Catalog" />
        </div>
      </div>
    </section>
  );
}
