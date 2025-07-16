import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import WishlistPage from './pages/WishlistPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <nav style={{ padding: '10px', backgroundColor: '#f4f4f4' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Beranda</Link>
        <Link to="/wishlist">Wishlist</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
