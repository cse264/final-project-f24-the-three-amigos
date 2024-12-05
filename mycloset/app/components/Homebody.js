"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "next/link";

export const Homebody = () => {
  const [username, setUsername] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "linear-gradient(135deg, #CCD5AE, #FEFAE0)", // Smooth gradient
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Poppins', sans-serif",
        overflow: "hidden", // Prevent scrollbars
        position: "relative",
      }}
    >
      {/* Background Animation */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(0,0,0,0) 60%)",
          zIndex: "0",
          animation: "pulse 6s infinite",
        }}
      />

      {/* Card Container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "400px",
          background: "rgba(255, 255, 255, 0.95)", // Slight transparency
          borderRadius: "16px",
          padding: "40px",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
          textAlign: "center",
          zIndex: "1",
          animation: "fadeIn 1s ease",
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontSize: "36px",
            color: "#6B705C",
            marginBottom: "20px",
            fontWeight: "700",
            textShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
            letterSpacing: "1px",
          }}
        >
          Welcome!
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "16px",
            color: "#555",
            marginBottom: "30px",
            fontWeight: "500",
            lineHeight: "1.6",
          }}
        >
          Create your account to access My Closet and manage your wardrobe like
          a pro.
        </p>

        {/* Username Input */}
        <TextField
          label="Enter your username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={handleUsernameChange}
          style={{
            marginBottom: "20px",
            background: "#FFF",
            borderRadius: "8px",
            fontSize: "14px",
          }}
        />

        {/* Continue Button */}
        <Link href="/signin" passHref>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#6B705C",
              color: "#FFFFFF",
              fontWeight: "700",
              fontSize: "16px",
              padding: "12px 24px",
              borderRadius: "8px",
              textTransform: "none",
              width: "100%",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0px 6px 24px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0px 4px 20px rgba(0, 0, 0, 0.15)";
            }}
          >
            Continue
          </Button>
        </Link>
      </div>

      {/* Footer Section */}
      <div
        style={{
          marginTop: "20px",
          color: "#333",
          fontSize: "14px",
          textAlign: "center",
          zIndex: "1",
        }}
      >
        Already have an account?{" "}
        <Link href="/signin" passHref>
          <span
            style={{
              color: "#6B705C",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Sign In
          </span>
        </Link>
      </div>

      {/* Keyframe Animation */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.9;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.9;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Homebody;
