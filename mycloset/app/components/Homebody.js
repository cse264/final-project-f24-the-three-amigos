"use client";

import React from "react";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export const Homebody = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: "url(https://www.google.com/imgres?q=My%20closet%20background%201440%20x%20890&imgurl=https%3A%2F%2Fpng.pngtree.com%2Fthumb_back%2Ffh260%2Fbackground%2F20230611%2Fpngtree-elegant-walk-in-closets-image_2975332.jpg&imgrefurl=https%3A%2F%2Fpngtree.com%2Ffree-backgrounds-photos%2Fcloset&docid=6c4C4YfG552KdM&tbnid=WWNa-K-v9pVboM&vet=12ahUKEwjs_cLbwoqKAxXCFFkFHfU5MyEQM3oECBQQAA..i&w=640&h=359&hcb=2&ved=2ahUKEwjs_cLbwoqKAxXCFFkFHfU5MyEQM3oECBQQAA)", // Update this with a new image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          padding: "20px 36px",
          backgroundColor: "rgba(250, 237, 205, 0.8)", // Semi-transparent overlay
          borderRadius: 30,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 20,
          margin: "40px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
        }}
      >
        {/* Title */}
        <div
          style={{
            fontFamily: "Climate Crisis",
            fontSize: "64px",
            color: "black",
          }}
        >
          <div>my</div>
          <div>Closet</div>
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
          <Button
            variant="contained"
            startIcon={<LoginIcon />}
            style={{
              backgroundColor: "#CCD5AE",
              color: "black",
              fontFamily: "Inter, sans-serif",
              fontSize: 18,
              fontWeight: "600",
              textTransform: "none",
              borderRadius: 30,
              padding: "10px 20px",
            }}
            onClick={() => console.log("Sign In clicked")}
          >
            Sign In
          </Button>

          <Button
            variant="contained"
            startIcon={<CloudUploadIcon />}
            style={{
              backgroundColor: "#CCD5AE",
              color: "black",
              fontFamily: "Inter, sans-serif",
              fontSize: 18,
              fontWeight: "600",
              textTransform: "none",
              borderRadius: 30,
              padding: "10px 20px",
            }}
            onClick={() => console.log("Upload clicked")}
          >
            Upload
          </Button>
        </div>
      </div>

      {/* About Us Section */}
      <div
        style={{
          backgroundColor: "#FEFAE0",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "Comfortaa, sans-serif",
            fontWeight: "700",
            color: "#333",
          }}
        >
          About Us
        </h2>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            color: "#555",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.5",
          }}
        >
          Welcome to My Closet, the perfect place to organize and showcase your
          wardrobe. Whether you're managing outfits, tracking styles, or sharing
          your favorite looks, our intuitive platform makes it effortless. Your
          closet, reimagined.
        </p>
      </div>
    </div>
  );
};
