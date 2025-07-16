import { useState } from 'react';
import { toast } from 'react-toastify';

export default function ReviewForm({ productId }) {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '' || review.trim() === '') {
      toast.error('Semua field wajib diisi');
      return;
    }

    // Simulasi pengiriman review
    toast.success('Ulasan berhasil dikirim!');
    setName('');
    setReview('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nama:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Ulasan:</label>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Kirim</button>
    </form>
  );
}
