"use client";

import React from "react";
import Link from "next/link"; // Import the Link component for navigation

// Import Google Fonts
const googleFontsLink = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap";

export const Topbody = () => {
  const containerStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: "url('/new-closetbackground.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "40px",
    fontFamily: "'Poppins', sans-serif", // Use modern font
    color: "#333", // Elegant color for text
  };

  const headerStyle = {
    textAlign: "center",
    color: "#fff", // White text for contrast
    marginBottom: "40px",
    fontFamily: "'Poppins', sans-serif",
    textShadow: "0 4px 8px rgba(0, 0, 0, 0.6)", // Glow effect
  };

  const titleStyle = {
    fontSize: "52px",
    fontWeight: "600",
    margin: "0",
    color: "#FEFAE0", // Soft cream color
    textShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
  };

  const descriptionStyle = {
    fontSize: "18px",
    fontWeight: "400",
    color: "#F5F5F5", // Slightly muted white
    margin: "0",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.6)",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    width: "100%",
    marginTop: "40px",
    padding: "0 20px",
  };

  const cardContainerStyle = {
    position: "relative",
    overflow: "hidden",
    borderRadius: "12px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const buttonBackgroundStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "#CCD5AE",
    transform: "scale(1)",
    transition: "transform 0.5s ease",
    zIndex: "0",
  };

  const buttonContentStyle = {
    position: "relative",
    zIndex: "1",
    color: "#333",
    fontSize: "20px",
    fontWeight: "600",
    padding: "20px",
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif",
    textTransform: "uppercase",
  };

  const outfitFrameStyle = {
    marginTop: "40px",
    width: "50%", // Reduced width
    height: "500px", // Increased height for a portrait look
    border: "2px solid #fff",
    borderRadius: "12px",
    backgroundColor: "#FEFAE0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif",
    color: "#333",
  };

  const placeholderImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const footerStyle = {
    marginTop: "40px",
    width: "100%",
    textAlign: "center",
    padding: "20px 0",
    background: "#FEFAE0",
    borderTop: "1px solid #ddd",
    fontFamily: "'Poppins', sans-serif",
    color: "#333",
  };

  const handleMouseOver = (e) => {
    const background = e.currentTarget.querySelector(".button-background");
    background.style.transform = "scale(1.2)";
  };

  const handleMouseOut = (e) => {
    const background = e.currentTarget.querySelector(".button-background");
    background.style.transform = "scale(1)";
  };

  return (
    <>
      {/* Include Google Fonts */}
      <link href={googleFontsLink} rel="stylesheet" />

      <div style={containerStyle}>
        {/* Header Section */}
        <header style={headerStyle}>
          <h1 style={titleStyle}>Welcome to Your Closet</h1>
          <p style={descriptionStyle}>Organize and showcase your wardrobe in style.</p>
        </header>

        {/* Button Grid Section */}
        <div style={gridStyle}>
          {/* Tops */}
          <Link href="/tops">
            <div
              style={cardContainerStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <div className="button-background" style={buttonBackgroundStyle}></div>
              <div style={buttonContentStyle}>Tops</div>
            </div>
          </Link>

          {/* Bottoms */}
          <Link href="/bottoms">
            <div
              style={cardContainerStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <div className="button-background" style={buttonBackgroundStyle}></div>
              <div style={buttonContentStyle}>Bottoms</div>
            </div>
          </Link>

          {/* Shoes */}
          <Link href="/shoes">
            <div
              style={cardContainerStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <div className="button-background" style={buttonBackgroundStyle}></div>
              <div style={buttonContentStyle}>Shoes</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
