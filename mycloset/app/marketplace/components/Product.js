"use client"

import React from 'react';
import { useUser } from '../../context/userContext';


const Product = ({ id, title, type, price, images }) => {
  const { username, setUsername, userType, setUserType, userId, setUserId } = useUser();

  const addToCloset = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/closets/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_name: title,
          item_type: type,
          image: images[0], // Assuming you're using the first image
          price: price,
        }),
      });
      console.log(response)
    } catch (error) {
      console.error( error);
    }
  };

  return (
    <div style={{ width: 250, height: 435, background: '#CCD5AE', borderRadius: 30, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 72, display: 'inline-flex' }}>
      <div style={{ alignSelf: 'stretch', height: 170, textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>
        <img src={images[0]} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ height: 170, paddingLeft: 12, paddingRight: 12, paddingTop: 5, paddingBottom: 5, background: '#FEFAE0', borderTopLeftRadius: 30, borderTopRightRadius: 30, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex' }}>
        <div style={{ alignSelf: 'stretch', height: 21, color: 'black', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>{title}</div>
        <div style={{ alignSelf: 'stretch', height: 21, color: 'black', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>{type}</div>
        <div style={{ alignSelf: 'stretch', height: 21, color: 'black', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word' }}>{`$${price}`}</div>
        <div style={{ width: 218, height: 53, background: '#CCD5AE', borderRadius: 8, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
          <button onClick={addToCloset} style={{ width: '100%', height: '100%', background: 'none', border: 'none', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', cursor: 'pointer' }}>
            Add to Closet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
