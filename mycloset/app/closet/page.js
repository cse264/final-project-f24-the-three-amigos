"use client";

import React, { useState, useEffect } from 'react';
import { useUser } from '../context/userContext';

const Closet = () => {
  const [products, setProducts] = useState([]); // Assuming products will be 
  const { username, setUsername, userType, setUserType, userId, setUserId } = useUser();

  useEffect(() => {
    // Fetch products from your API or data source
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/closets/${userId}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.length > 0 ? (
          products.map((product, index) => (
            <div
              key={index}
              style={{
                width: 250,
                height: 435,
                background: '#CCD5AE',
                borderRadius: 30,
                overflow: 'hidden',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: 72,
                display: 'inline-flex',
              }}
            >
              <div
                style={{
                  alignSelf: 'stretch',
                  height: 170,
                  textAlign: 'center',
                  color: 'black',
                  fontSize: 16,
                  fontFamily: 'Poppins',
                  fontWeight: '400',
                  wordWrap: 'break-word',
                }}
              >
                <img
                  src={product.image} // Assuming the product object has images
                  alt={product.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div
                style={{
                  height: 170,
                  paddingLeft: 12,
                  paddingRight: 12,
                  paddingTop: 5,
                  paddingBottom: 5,
                  background: '#FEFAE0',
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  overflow: 'hidden',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: 20,
                  display: 'flex',
                }}
              >
                <div
                  style={{
                    alignSelf: 'stretch',
                    height: 21,
                    color: 'black',
                    fontSize: 16,
                    fontFamily: 'Poppins',
                    fontWeight: '400',
                    wordWrap: 'break-word',
                  }}
                >
                  {product.title}
                </div>
                <div
                  style={{
                    alignSelf: 'stretch',
                    height: 21,
                    color: 'black',
                    fontSize: 16,
                    fontFamily: 'Poppins',
                    fontWeight: '400',
                    wordWrap: 'break-word',
                  }}
                >
                  {product.type}
                </div>
                <div
                  style={{
                    alignSelf: 'stretch',
                    height: 21,
                    color: 'black',
                    fontSize: 16,
                    fontFamily: 'Poppins',
                    fontWeight: '400',
                    wordWrap: 'break-word',
                  }}
                >
                  {`$${product.price}`}
                </div>
                <div
                  style={{
                    width: 218,
                    height: 53,
                    background: '#CCD5AE',
                    borderRadius: 8,
                    overflow: 'hidden',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'inline-flex',
                  }}
                >
                </div>
              </div>
            </div>
          ))
        ) : (
          <div
            style={{
              width: '100%',
              textAlign: 'center',
              color: 'black',
              fontSize: 18,
              fontFamily: 'Poppins',
              fontWeight: '400',
              padding: '20px',
            }}
          >
            No products in your closet
          </div>
        )}
      </div>
  );
};

export default Closet;
