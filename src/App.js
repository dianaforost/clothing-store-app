import { useEffect, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from 'components/SharedLayouts/SharedLayouts';
import { getCart } from 'redux/cart/operations';

import GlobalStyle from './GlobalStyle.jsx';

const MainPage = lazy(() => import('./pages/MainPage/MainPage.jsx'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage.jsx'));
const ProductDetailsPage = lazy(() =>
  import('./pages/ProductDetailsPage/ProductDetailsPage.jsx')
);
const CartPage = lazy(() => import('./pages/CartPage/CartPage.jsx'));
const OrderPage = lazy(() => import('./pages/OrderPage/OrderPage.jsx'));
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage.jsx'));
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage/NotFoundPage.jsx')
);
const SearchedProductPage = lazy(() =>
  import('./pages/SearchedProductPage/SearchedProductPage.jsx')
);
const ContactsPage = lazy(() =>
  import('./pages/ContactsPage/ContactsPage.jsx')
);
const UnsubscribePage = lazy(() =>
  import('./pages/UnsubscribePage/UnsubscribePage.jsx')
);

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <div className="App">
      {/* <FontStyle /> */}
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:productsId" element={<ProductDetailsPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="search" element={<SearchedProductPage />} />
          <Route path="unsubscribe" element={<UnsubscribePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
