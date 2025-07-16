import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProductById } from '../api/productApi';
import ReviewForm from '../components/ReviewForm';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetchProductById(id)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setNotFound(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading product...</p>;
  if (notFound) return <p>Produk tidak ditemukan.</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} width="200" />
      <p>{product.description}</p>
      <p>
        Harga:{' '}
        {product.price.toLocaleString('id-ID', {
          style: 'currency',
          currency: 'IDR',
        })}
      </p>

      <h3>Kirim Ulasan</h3>
      <ReviewForm productId={product.id} />
    </div>
  );
}
