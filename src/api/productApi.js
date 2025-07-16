const BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = () =>
  fetch(`${BASE_URL}/products`).then((res) => res.json());

export const fetchCategories = () =>
  fetch(`${BASE_URL}/products/categories`).then((res) => res.json());

export const fetchProductById = (id) =>
  fetch(`${BASE_URL}/products/${id}`).then((res) => {
    if (!res.ok) throw new Error('Produk tidak ditemukan');
    return res.json();
  });
