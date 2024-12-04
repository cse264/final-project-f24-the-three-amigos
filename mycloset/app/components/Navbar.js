import Link from "next/link";
import React from "react";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Import User Icon

export const Navbar = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "80px",
        background: "#FEFAE0",
        borderRadius: "8px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 80px",
      }}
    >
      {/* Brand Name as a Link */}
      <Link
        href="/"
        style={{
          fontSize: "24px",
          fontFamily: "Comfortaa",
          fontWeight: "400",
          color: "black",
          textDecoration: "none", // No underline
        }}
      >
        My Closet
      </Link>

      {/* Icons Section */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Search Icon */}
        <Link href="/search">
          <IconButton>
            <SearchIcon style={{ color: "black" }} />
          </IconButton>
        </Link>

        {/* Marketplace Icon */}
        <Link href="/marketplace">
          <IconButton>
            <ShoppingBagIcon style={{ color: "black" }} />
          </IconButton>
        </Link>

        {/* User Icon */}
        <Link href="/closet">
          <IconButton>
            <AccountCircleIcon style={{ color: "black" }} />
          </IconButton>
        </Link>
      </div>
    </div>
  );
};
