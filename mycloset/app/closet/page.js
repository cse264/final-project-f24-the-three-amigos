"use client";

import React, { useState, useEffect } from 'react';
import { useUser } from '../context/userContext';

const Closet = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    item_name: '',
    item_type: '',
    image: '',
    price: ''
  });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const { username, setUsername, userType, setUserType, userId, setUserId } = useUser();
  const backgroundColor = userType === "paid" ? "#DDEFEA" : "#FEFAE0";

  useEffect(() => {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try{
    if (newProduct.item_name && newProduct.item_type && newProduct.image && newProduct.price) {
      setProducts([...products, newProduct]);
      const response = await fetch(`http://localhost:3000/api/closets/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_name: newProduct.item_name,
          item_type: newProduct.item_type,
          image: newProduct.image, // Assuming you're using the first image
          price: newProduct.price,
        }),
      });
      setNewProduct({
        item_name: '',
        item_type: '',
        image: '',
        price: ''
      });
      setIsFormVisible(false);
    } else {
      alert('Please fill out all fields.');
    }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button
        style={{
          marginBottom: '20px',
          padding: '10px 20px',
          background: '#CCD5AE',
          color: 'black',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={() => setIsFormVisible(!isFormVisible)}
      >
        {isFormVisible ? 'Close Upload Form' : 'Add New Clothing'}
      </button>

      {isFormVisible && (
        <form
          onSubmit={handleFormSubmit}
          style={{
            marginBottom: '20px',
            padding: '20px',
            background: '#FEFAE0',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <input
            type="text"
            name="item_name"
            placeholder="Item Name"
            value={newProduct.item_name}
            onChange={handleInputChange}
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #CCD5AE',
            }}
          />
          <input
            type="text"
            name="item_type"
            placeholder="Item Type"
            value={newProduct.item_type}
            onChange={handleInputChange}
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #CCD5AE',
            }}
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={newProduct.image}
            onChange={handleInputChange}
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #CCD5AE',
            }}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newProduct.price}
            onChange={handleInputChange}
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #CCD5AE',
            }}
          />
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              background: '#CCD5AE',
              color: 'black',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Upload Item
          </button>
        </form>
      )}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          backgroundColor: backgroundColor,
          padding: "20px",
          borderRadius: "10px",
        }}
      >
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
                  src={product.image} 
                  alt={product.item_name}
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
                  {product.item_name}
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
                  {product.item_type}
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
    </div>
  );
};

export default Closet;
