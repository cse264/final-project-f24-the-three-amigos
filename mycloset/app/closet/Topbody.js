"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export const Topbody = () => {
  const [outfit, setOutfit] = useState({
    top: null,
    bottom: null,
    shoes: null,
  });

  const containerStyle = {
    width: "100%",
    height: "100vh",
    backgroundColor: "#FEFAE0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "40px",
    fontFamily: "'Poppins', sans-serif",
    color: "#333",
  };

  const headerStyle = {
    textAlign: "center",
    color: "#333",
    marginBottom: "40px",
    fontFamily: "'Poppins', sans-serif",
    textShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const titleStyle = {
    fontSize: "52px",
    fontWeight: "600",
    margin: "0",
    color: "#6B705C",
  };

  const gridStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  };

  const buttonStyle = {
    backgroundColor: "#CCD5AE",
    border: "none",
    borderRadius: "8px",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    color: "#333",
  };

  const outfitFrameStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginTop: "40px",
    padding: "20px",
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
  };

  const frameStyle = {
    width: "200px",
    height: "300px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const fetchRandomItem = async (category) => {
    try {
      // Updated API calls for demo purposes
      const apiEndpoints = {
        tops: "https://fakestoreapi.com/products/category/men's clothing",
        bottoms: "https://fakestoreapi.com/products/category/women's clothing",
        shoes: "https://fakestoreapi.com/products/category/jewelery",
      };

      const res = await fetch(apiEndpoints[category]);
      const data = await res.json();
      const randomItem = data[Math.floor(Math.random() * data.length)];
      return randomItem ? randomItem.image : null; // Use image field
    } catch (error) {
      console.error(`Error fetching ${category}:`, error);
      return null;
    }
  };

  const fetchOutfit = async () => {
    const top = await fetchRandomItem("tops");
    const bottom = await fetchRandomItem("bottoms");
    const shoes = await fetchRandomItem("shoes");

    setOutfit({ top, bottom, shoes });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetchOutfit();
    }
  }, []);

  return (
    <>
      <div style={containerStyle}>
        {/* Header Section */}
        <header style={headerStyle}>
          <h1 style={titleStyle}>Welcome to Your Closet</h1>
        </header>

        {/* Buttons Section */}
        <div style={gridStyle}>
          <Link href="/tops">
            <button style={buttonStyle}>Tops</button>
          </Link>
          <Link href="/bottoms">
            <button style={buttonStyle}>Bottoms</button>
          </Link>
          <Link href="/shoes">
            <button style={buttonStyle}>Shoes</button>
          </Link>
          <button style={buttonStyle} onClick={fetchOutfit}>
            Randomize
          </button>
        </div>

        {/* Outfit Display Section */}
        <div style={outfitFrameStyle}>
          <div style={frameStyle}>
            {outfit.top ? (
              <img src={outfit.top} alt="Top" style={imageStyle} />
            ) : (
              <p>Loading Top...</p>
            )}
          </div>
          <div style={frameStyle}>
            {outfit.bottom ? (
              <img src={outfit.bottom} alt="Bottom" style={imageStyle} />
            ) : (
              <p>Loading Bottom...</p>
            )}
          </div>
          <div style={frameStyle}>
            {outfit.shoes ? (
              <img src={outfit.shoes} alt="Shoes" style={imageStyle} />
            ) : (
              <p>Loading Shoes...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
