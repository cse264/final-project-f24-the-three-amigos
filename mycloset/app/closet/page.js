"use client";

import { useEffect, useState } from 'react';
import { Topbody } from "./Topbody";
import { useRouter } from 'next/navigation';

export default function Closet() {
  const router = useRouter();
  const [shirt, setShirt] = useState(null);
  const [shoe, setShoe] = useState(null);
  const [username, setUsername] = useState(router.query.username);
  const [userType, setUserType] = useState(router.query.user_type);
  const [userId, setUserId] = useState(router.query.user_id);

  useEffect(() => {
    fetchProducts();
  }, []);

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

  const fetchNewShirt = async () => {
    try {
      const shirtsRes = await fetch('https://dummyjson.com/products/category/mens-shirts');
      const shirts = await shirtsRes.json();
      setShirt(shirts.products[Math.floor(Math.random() * shirts.products.length)]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNewShoe = async () => {
    try {
      const shoesRes = await fetch('https://dummyjson.com/products/category/mens-shoes');
      const shoes = await shoesRes.json();
      setShoe(shoes.products[Math.floor(Math.random() * shoes.products.length)]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>User Closet</h1>
      <Topbody />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
        <h1>Random Clothing Item</h1>
        {shirt && (
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <button onClick={fetchNewShirt} style={{
              marginRight: '20px',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'black',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              Next Shirt
            </button>
            <img src={shirt.images[0]} alt={shirt.title} style={{ width: '300px', height: 'auto' }} />
          </div>
        )}
        <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
          <button style={{
            marginRight: '20px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'black',
            color: 'white',
            border: 'none',
            cursor: 'not-allowed',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            Next Pants
          </button>
          <img src="https://i.ibb.co/QvV28SG/Stylish-jeans-pants-on-transparent-background-PNG.png" alt="Pants" style={{ width: '25%', height: '25%' }} />
        </div>
        {shoe && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button onClick={fetchNewShoe} style={{
              marginRight: '20px',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'black',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              Next Shoe
            </button>
            <img src={shoe.images[0]} alt={shoe.title} style={{ width: '300px', height: 'auto' }} />
          </div>
        )}
      </div>
    </div>
  );
}
