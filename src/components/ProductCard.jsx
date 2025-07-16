import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../contexts/WishlistContext';
import { toast } from 'react-toastify';

export default function ProductCard({ product }) {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const handleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
      toast.info('Dihapus dari Wishlist');
    } else {
      addToWishlist(product);
      toast.success('Ditambahkan ke Wishlist');
    }
  };

  return (
    <div 
        style={{ border: '1px solid #ccc', padding: '1rem', width: '200px' }}>
      <Link to={`/product/${product.id}`}>
        <img
        src={product.image}
        alt={product.title}
        
        style={{
            width: '100%',
            height: '200px',
            objectFit: 'contain',
            backgroundColor: '#f9f9f9'
  }}
/>

        <h4>{product.name}</h4>
      </Link>
      <p>
        {product.price.toLocaleString('id-ID', {
          style: 'currency',
          currency: 'IDR',
        })}
      </p>
      <button onClick={handleWishlist}>
        {isWishlisted ? 'Hapus Wishlist' : 'Tambah Wishlist'}
      </button>
    </div>
  );
}
