"use client";

import React, { useState } from "react";
import { TextField, Select, MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useUser } from '../context/userContext';

import { useRouter } from 'next/navigation';


export const Signin = () => {
    const { username, setUsername, userType, setUserType, userId, setUserId } = useUser(); // Access context values 
    const router = useRouter();

    const handleUsernameChange = async (event) => {
        setUsername(event.target.value);
    };

    const handleSignIn = async () => {
        try{
          if (username) {
    
            //Getting their id
            const idResponse = await fetch(`http://localhost:3000/api/${username}`,  {
              method: "GET",
            });
            if (!idResponse.ok) {
              alert("User Does not Exist");
            }
            const data = await idResponse.json();
            const id = data[0].user_id;
            setUserId(id);

            //Getting all of their type
            const response = await fetch(`http://localhost:3000/api/users/${id}`,  {
                method: "GET",
              });
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const data1 = await response.json();
              const type = data[0].user_type;
              setUserType(type);

            //Route to closet
            router.push('/closet');
    
          } else {
            alert("Please select a username and user type.");
          }
        }catch (err) {
          console.log(err)
        }
    };

    return(
        <div>
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

            {/* Sign In Button */}
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
                onClick={handleSignIn}
                onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0px 6px 24px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0px 4px 20px rgba(0, 0, 0, 0.15)";
                }}
            >
                Sign In
            </Button>
        </div>
    )
}

export default Signin;