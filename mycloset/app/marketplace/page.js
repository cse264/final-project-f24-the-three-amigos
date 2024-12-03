"use client";

import { useEffect, useState } from 'react';
import Product from './components/Product'; // Import the Product component

export default function Marketplace() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const categories = ['mens-shoes', 'mens-shirts'];
        const promises = categories.map(category => fetch(`https://dummyjson.com/products/category/${category}`).then(res => res.json()));
        const results = await Promise.all(promises);
        const allProducts = results.flatMap(result => result.products);
        setProducts(allProducts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Clothing Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {products.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            brand={product.brand}
            price={product.price}
            images={product.images}
          />
        ))}
      </div>
    </div>
  );
}
