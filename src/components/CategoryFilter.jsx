import { useState, useEffect } from 'react';
import categories from '../data/categories.json';

export default function CategoryFilter({ setSelectedCategory }) {
  const [selected, setSelected] = useState('all');

  const handleChange = (e) => {
    const value = e.target.value;
    setSelected(value);
    setSelectedCategory(value);
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label>Pilih Kategori: </label>
      <select value={selected} onChange={handleChange}>
        <option value="all">Semua</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
