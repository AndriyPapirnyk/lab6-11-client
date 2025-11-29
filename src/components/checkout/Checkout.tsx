import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../store/cartSlice';
import PrimaryButton from '../ui/PrimaryButton';
import FormError from '../ui/FormError/FormError';
import './Checkout.scss';
import { useState } from 'react';

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters')
    .matches(/^[a-zA-Z\s]+$/, 'First name can only contain letters')
    .required('First name is a required field'),

  lastName: Yup.string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters')
    .matches(/^[a-zA-Z\s]+$/, 'Last name can only contain letters')
    .required('Last name is a required field'),

  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Email is incorrect'
    )
    .required('Email is a required field'),

  phone: Yup.string()
    .matches(
      /^[\d\s\-\+\(\)]+$/,
      'Phone number can only contain numbers and symbols (+, -, (, ), space)'
    )
    .min(10, 'Phone number must be at least 10 characters')
    .max(20, 'Phone number must be less than 20 characters')
    .required('Phone number is a required field'),

  address: Yup.string()
    .min(10, 'Address must be at least 10 characters')
    .max(200, 'Address must be less than 200 characters')
    .required('Address is a required field'),
});

export default function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showError, setShowError] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted:', values);
      dispatch(clearCart());
      navigate('/cart/success');
    },
  });

  const handleGoBack = () => {
    navigate('/cart');
  };

  const getAllErrors = () => {
    const errors = Object.entries(formik.errors)
      .filter(([key]) => formik.touched[key as keyof typeof formik.touched])
      .map(([_, value]) => value);

    return errors.length > 0 ? errors.join('. ') : '';
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formik.handleSubmit(e);

    if (Object.keys(formik.errors).length > 0) {
      setShowError(true);
    }
  };

  const errorMessage = getAllErrors();

  return (
    <section className="checkout">
      <h1 className="checkout__title">Checkout</h1>

      <form className="checkout__form" onSubmit={handleSubmit}>
        <div className="checkout__row">
          <div className="checkout__field">
            <label htmlFor="firstName" className="checkout__label">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className={`checkout__input ${
                formik.touched.firstName && formik.errors.firstName ? 'checkout__input--error' : ''
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
          </div>

          <div className="checkout__field">
            <label htmlFor="lastName" className="checkout__label">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className={`checkout__input ${
                formik.touched.lastName && formik.errors.lastName ? 'checkout__input--error' : ''
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
          </div>
        </div>

        <div className="checkout__row">
          <div className="checkout__field">
            <label htmlFor="email" className="checkout__label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={`checkout__input ${
                formik.touched.email && formik.errors.email ? 'checkout__input--error' : ''
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>

          <div className="checkout__field">
            <label htmlFor="phone" className="checkout__label">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className={`checkout__input ${
                formik.touched.phone && formik.errors.phone ? 'checkout__input--error' : ''
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
          </div>
        </div>

        <div className="checkout__field">
          <label htmlFor="address" className="checkout__label">
            Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            className={`checkout__input ${
              formik.touched.address && formik.errors.address ? 'checkout__input--error' : ''
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
        </div>

        {showError && errorMessage && (
          <FormError
            message={`Change a few things up and try submitting again. ${errorMessage}`}
            onClose={() => setShowError(false)}
          />
        )}

        <div className="checkout__actions">
          <div onClick={handleGoBack}>
            <PrimaryButton type={2} text="Go Back" />
          </div>
          <button type="submit">
            <PrimaryButton type={1} text="Continue" />
          </button>
        </div>
      </form>
    </section>
  );
}
