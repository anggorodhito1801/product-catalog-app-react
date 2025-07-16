import { useEffect, useState } from 'react';
import { fetchProducts, fetchCategories } from '../api/productApi';
import ProductCard from '../components/ProductCard';
import LoadingBar from '../components/LoadingBar';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([fetchProducts(), fetchCategories()]).then(([productData, catData]) => {
      setProducts(productData);
      setCategories(catData);
      setLoading(false);
    });
  }, []);

  const filtered = products
    .filter((p) =>
      selectedCategory === 'all' ? true : p.category === selectedCategory
    )
    .filter((p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div>
      <h2>Daftar Produk</h2>

      <input
        type="text"
        placeholder="Cari nama produk..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '1rem', padding: '0.5rem' }}
      />

      <div style={{ marginBottom: '1rem' }}>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">Semua Kategori</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <LoadingBar />
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
