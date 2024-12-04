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

  // const handleRegister = async () => {
  //   try {
  //     const response = await fetch("/api/users/1", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ username }),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log("User registered:", data);
  //       // Use Link component for navigation to marketplace
  //       document.getElementById("marketplace-link").click();
  //     } else {
  //       console.error("Failed to register user");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        paddingTop: 28,
        paddingBottom: 28,
        background: "#CCD5AE",
        borderRadius: 10,
        overflow: "hidden",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 25,
        display: "inline-flex",
      }}
    >
      <div
        style={{
          width: 592,
          height: 71,
          textAlign: "center",
          color: "black",
          fontSize: 32,
          fontFamily: "Poppins",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        Sign Up
      </div>
      <div
        style={{
          width: 331,
          height: 40,
          color: "black",
          fontSize: 24,
          fontFamily: "Poppins",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        Enter Username:
      </div>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        value={username}
        onChange={handleUsernameChange}
      />
      {/* <Button
        variant="contained"
        color="primary"
        onClick={handleRegister}
        style={{ marginTop: 20 }}
      >
        Enter
      </Button> */}
    </div>
  );
};

export default Homebody;
