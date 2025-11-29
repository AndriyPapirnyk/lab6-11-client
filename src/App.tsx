import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Catalog from "./components/catalog/Catalog";
import Item from "./components/item/Item";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import Success from "./components/success/Success";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { CarsProvider } from "./context/CarsContext";
import { AuthProvider } from "./context/AuthContext";
import { Provider } from 'react-redux';
import { store } from './store/store'; 

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <CarsProvider>
            <BrowserRouter>
              <Header />
              <Routes>
                {/* Public routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />

                {/* Protected routes */}
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <Home />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/catalog"
                  element={
                    <ProtectedRoute>
                      <Catalog />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/catalog/:id"
                  element={
                    <ProtectedRoute>
                      <Item />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/cart"
                  element={
                    <ProtectedRoute>
                      <Cart />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/cart/checkout"
                  element={
                    <ProtectedRoute>
                      <Checkout />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/cart/success"
                  element={
                    <ProtectedRoute>
                      <Success />
                    </ProtectedRoute>
                  }
                />

                {/* Redirect to login for unknown routes */}
                <Route path="*" element={<Navigate to="/login" replace />} />
              </Routes>
              <Footer />
            </BrowserRouter>
        </CarsProvider>
      </AuthProvider>
    </Provider>
  );
}

export default App;