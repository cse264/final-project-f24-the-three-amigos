"use client";

import { useEffect, useState } from 'react';

export default function Marketplace() {
  const [shirt, setShirt] = useState(null);

  useEffect(() => {
    const fetchShirt = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products/category/mens-shirts');
        const data = await res.json();
        // Assuming we want to present the specific product with id 83
        const blueBlackCheckShirt = data.products.find(product => product.id === 83);
        setShirt(blueBlackCheckShirt);
      } catch (error) {
        console.log(error);
      }
    };

    fetchShirt();
  }, []);

  return (
    <div>
      <h1>Clothing Products</h1>
      {shirt && (
        <div key={shirt.id}>
          <h2>{shirt.title}</h2>
          <p>{shirt.description}</p>
          <p><strong>Price:</strong> ${shirt.price}</p>
          <p><strong>Brand:</strong> {shirt.brand}</p>
          <div>
            {shirt.images.map((image, index) => (
              <img key={index} src={image} alt={shirt.title} style={{width: '200px', height: 'auto', marginRight: '10px'}} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
