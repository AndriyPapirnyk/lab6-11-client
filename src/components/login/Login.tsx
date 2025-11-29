import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../context/AuthContext';
import PrimaryButton from '../ui/PrimaryButton';
import FormError from '../ui/FormError/FormError';
import './Login.scss';

const validationSchema = Yup.object({
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Email is incorrect'
    )
    .required('Email is a required field'),

  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is a required field'),
});

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showError, setShowError] = useState(false);
  const [loginError, setLoginError] = useState('');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoginError('');
      const success = await login(values.email, values.password);

      if (success) {
        navigate('/');
      } else {
        setLoginError('Login failed. Please check your credentials.');
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

  const errorMessage = loginError || getAllErrors();

  return (
    <section className="login">
      <div className="login__container">
        <h1 className="login__title">Welcome Back</h1>
        <p className="login__subtitle">Login to your account</p>

        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__field">
            <label htmlFor="email" className="login__label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={`login__input ${
                formik.touched.email && formik.errors.email ? 'login__input--error' : ''
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Enter your email"
            />
          </div>

          <div className="login__field">
            <label htmlFor="password" className="login__label">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className={`login__input ${
                formik.touched.password && formik.errors.password ? 'login__input--error' : ''
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Enter your password"
            />
          </div>

          {showError && errorMessage && (
            <FormError
              message={errorMessage}
              onClose={() => setShowError(false)}
            />
          )}

          <button type="submit" className="login__submit">
            <PrimaryButton type={1} text="Login" />
          </button>
        </form>

        <p className="login__signup">
          Don't have an account?{' '}
          <Link to="/signup" className="login__signup-link">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
}
