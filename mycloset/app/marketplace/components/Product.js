import React from 'react';

const Product = ({ title, description, brand, price, images }) => {
  return (
    <div style={{width: 250, height: 377, background: '#CCD5AE', borderRadius: 30, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 72, display: 'inline-flex'}}>
      <div style={{alignSelf: 'stretch', height: 200, textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>
        <img src={images[0]} alt={title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
      </div>
      <div style={{width: 250, height: 144, paddingLeft: 12, paddingRight: 12, paddingTop: 5, paddingBottom: 5, background: '#FEFAE0', borderTopLeftRadius: 30, borderTopRightRadius: 30, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
        <div style={{alignSelf: 'stretch', height: 40, color: 'black', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>{title}</div>
        <div style={{alignSelf: 'stretch', height: 21, color: 'black', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>{brand}</div>
        <div style={{alignSelf: 'stretch', height: 21, color: 'black', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>{`$${price}`}</div>
      </div>
    </div>
  );
};

export default Product;
