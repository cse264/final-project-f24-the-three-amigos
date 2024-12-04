"use client";

import { useEffect, useState } from 'react';

export default function Tempoutfit() {
  const [shirt, setShirt] = useState(null);
  const [shoe, setShoe] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const categories = ['mens-shoes', 'mens-shirts'];
        const promises = categories.map(category => fetch(`https://dummyjson.com/products/category/${category}`).then(res => res.json()));
        const results = await Promise.all(promises);
        
        const shoes = results[0].products;
        const shirts = results[1].products;

        setShoe(shoes[Math.floor(Math.random() * shoes.length)]);
        setShirt(shirts[Math.floor(Math.random() * shirts.length)]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h1>Random Clothing Item</h1>
      {shirt && (
        <div style={{ marginBottom: '20px' }}>
          <img src={shirt.images[0]} alt={shirt.title} style={{ width: '300px', height: 'auto' }} />
        </div>
      )}
      {shoe && (
        <div>
          <img src={shoe.images[0]} alt={shoe.title} style={{ width: '300px', height: 'auto' }} />
        </div>
      )}
    </div>
  );
}
