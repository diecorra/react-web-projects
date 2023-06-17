import {
  NavLink,
  Navigate,
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import ShopPage from './features/shop/ShopPage';
import CartPage from './features/cart/CartPage';
import CheckoutPage from './features/checkout/CheckoutPage';
import ThanksPage from './features/checkout/ThanksPage';
import LoginPage from './features/login/LoginPage';
import CMSPage from './features/cms/CMSPage';
import CMSProductsPage from './features/cms/products/CMSProductsPage';
import CMSOrdersPage from './features/cms/orders/CMSOrdersPage';
import NavBar from './shared/components/core/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <hr />
      <div className="page">
        <Routes>
          <Route path="shop" element={<ShopPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="thankyou" element={<ThanksPage />} />
          <Route path="cms" element={<CMSPage />}>
            <Route path="products" element={<CMSProductsPage />} />
            <Route path="orders" element={<CMSOrdersPage />} />
            <Route path="" element={<Navigate to="products" />} />
          </Route>

          <Route path="*" element={<Navigate to="shop" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
