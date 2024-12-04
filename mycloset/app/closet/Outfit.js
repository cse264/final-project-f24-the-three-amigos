"use client";

import { useEffect, useState } from 'react';



export const Outfit = () => {
  const [shoes, setShoes] = useState(null);
  const [tops, setTops] = useState(null);
  const [bottoms, setBottoms] = useState(null);

  useEffect(() => {
    // const fetchItems = async () => {
    //   try {
    //     const [shoesRes, topsRes, bottomsRes] = await Promise.all([
    //       fetch('/api/closets/1/shoes').then(res => res.json()),
    //       fetch('/api/closets/1/tops').then(res => res.json()),
    //       fetch('/api/closets/1/bottoms').then(res => res.json()),
    //     ]);

    //     setShoes(shoesRes);
    //     setTops(topsRes);
    //     setBottoms(bottomsRes);
    //   } catch (error) {
    //     console.error('Error fetching items:', error);
    //   }
    // };

    // fetchItems();
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', paddingLeft: 74, paddingRight: 74, paddingTop: 36, paddingBottom: 36, background: '#CCD5AE', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 7, display: 'flex' }}>
      {shoes && <div style={{ alignSelf: 'stretch', width: 257, height: 254, background: '#D9D9D9' }}>shoes</div>}
      {tops && <div style={{ alignSelf: 'stretch', width: 257, height: 254, background: '#D9D9D9' }}>tops</div>}
      {bottoms && <div style={{ alignSelf: 'stretch', width: 257, height: 254, background: '#D9D9D9' }}>bottoms</div>}
    </div>
  );
};

export default Outfit;
