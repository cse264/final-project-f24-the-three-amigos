"use client";

import React, { useState } from "react";
import { TextField, Select, MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useUser } from '../context/userContext';

import { useRouter } from 'next/navigation';

export const Homebody = () => {
  const { username, setUsername, userType, setUserType, userId, setUserId } = useUser(); // Access context values 
  const router = useRouter();

  const handleUsernameChange = async (event) => {
    setUsername(event.target.value);
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleSignUp = async () => {
    try{
      if (userType && username) {
        //Posting new user
        const response = await fetch('http://localhost:3000/api/users/1', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            user_type: userType,
          }),
        });

        //Getting their id
        const idResponse = await fetch(`http://localhost:3000/api/${username}`,  {
          method: "GET",
        });
        if (!idResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await idResponse.json();
        const id = data[0].user_id
        setUserId(id);
        //Route to closet
        router.push('/closet');

      } else {
        alert("Please select a username and user type.");
      }
    }catch (err) {
      console.log(err)
    }
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

        {/* User Type Select */}
        <Select
          value={userType}
          onChange={handleUserTypeChange}
          fullWidth
          variant="outlined"
          style={{
            marginBottom: "20px",
            background: "#FFF",
            borderRadius: "8px",
            fontSize: "14px",
          }}
        >
          <MenuItem value="free">Free User</MenuItem>
          <MenuItem value="paid">Paid User</MenuItem>
        </Select>

        {/* Sign Up Button */}
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
            onClick={handleSignUp}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0px 6px 24px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0px 4px 20px rgba(0, 0, 0, 0.15)";
            }}
          >
            Sign Up
        </Button>
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
