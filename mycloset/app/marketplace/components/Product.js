import React from 'react';

const Product = ({ id, title, type, price, images }) => {
  const addToCart = async () => {
    try {
      const response = await fetch('https://dummyjson.com/carts/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: 1, // Replace with actual user ID if applicable
          products: [{ id, quantity: 1 }],
        }),
      });
      const data = await response.json();
      console.log('Added to cart:', data);
    } catch (error) {
      console.error('Error adding to cart:', error);
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
          <button onClick={addToCart} style={{ width: '100%', height: '100%', background: 'none', border: 'none', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', cursor: 'pointer' }}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
