import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../context/AuthContext';
import PrimaryButton from '../ui/PrimaryButton';
import FormError from '../ui/FormError/FormError';
import './SignUp.scss';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .matches(/^[a-zA-Z\s]+$/, 'Name can only contain letters')
    .required('Name is a required field'),

  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Email is incorrect'
    )
    .required('Email is a required field'),

  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(50, 'Password must be less than 50 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    )
    .required('Password is a required field'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is a required field'),
});

export default function SignUp() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [showError, setShowError] = useState(false);
  const [signupError, setSignupError] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setSignupError('');
      const success = await register(values.email, values.password, values.name);

      if (success) {
        navigate('/');
      } else {
        setSignupError('Registration failed. Please try again.');
        setShowError(true);
      }
    },
  });

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

  const errorMessage = signupError || getAllErrors();

  return (
    <section className="signup">
      <div className="signup__container">
        <h1 className="signup__title">Create Account</h1>
        <p className="signup__subtitle">Sign up to get started</p>

        <form className="signup__form" onSubmit={handleSubmit}>
          <div className="signup__field">
            <label htmlFor="name" className="signup__label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className={`signup__input ${
                formik.touched.name && formik.errors.name ? 'signup__input--error' : ''
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              placeholder="Enter your full name"
            />
          </div>

          <div className="signup__field">
            <label htmlFor="email" className="signup__label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={`signup__input ${
                formik.touched.email && formik.errors.email ? 'signup__input--error' : ''
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Enter your email"
            />
          </div>

          <div className="signup__field">
            <label htmlFor="password" className="signup__label">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className={`signup__input ${
                formik.touched.password && formik.errors.password ? 'signup__input--error' : ''
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Enter your password"
            />
          </div>

          <div className="signup__field">
            <label htmlFor="confirmPassword" className="signup__label">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className={`signup__input ${
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? 'signup__input--error'
                  : ''
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              placeholder="Confirm your password"
            />
          </div>

          {showError && errorMessage && (
            <FormError
              message={errorMessage}
              onClose={() => setShowError(false)}
            />
          )}

          <button type="submit" className="signup__submit">
            <PrimaryButton type={1} text="Sign Up" />
          </button>
        </form>

        <p className="signup__login">
          Already have an account?{' '}
          <Link to="/login" className="signup__login-link">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}
