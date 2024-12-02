import { TextField } from "@mui/material";
import {SearchIcon} from '@mui/icons-material/Search';

export const Searchbar = () => {
  return (
    <div
      style={{
        width: "100%", // Full viewport width
        height: 120, // Full viewport height
        display: "flex", // Flexbox for centering
        justifyContent: "center", // Horizontally center
        alignItems: "center", // Vertically center
        background: "#FAEDCD", // Background color for the entire page
      }}
    >
      <div
        style={{
          width: 896,
          height: 76,
          paddingLeft: 30,
          paddingRight: 30,
          background: "#FEFAE0",
          borderRadius: 30,
          overflow: "hidden",
          display: "flex", // Use flexbox to align items
          justifyContent: "flex-start", // Align items in the container
          alignItems: "center", // Vertically align items
          gap: 10,
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", // Optional shadow for better visuals
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            position: "relative",
            display: "flex", // Flexbox for child alignment
            justifyContent: "center", // Horizontally center child
            alignItems: "center", // Vertically center child
          }}
        >

        </div>
        <TextField
          id="standard-basic"
          label="Search.."
          variant="standard"
          fullWidth // Ensures the input field spans the available width
        />
      </div>
    </div>
  );
};
