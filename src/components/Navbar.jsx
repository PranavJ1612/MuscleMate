import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/MMLogof.png";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    sx={{
      gap: { sm: "60px", xs: "20px" }, // Reduced gap between logo and links
      mt: { sm: "20px", xs: "10px" }, // Reduced margin-top
      px: "10px",
    }}
  >
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        style={{ width: "90px", height: "80px", marginRight: "20px" }} // Reduced margin
        className="object-contain"
      />
    </Link>
    <Stack
      direction="row"
      gap="30px" // Reduced gap between Home and Exercises
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="center"
    >
      <NavLink
        to="/"
        style={({ isActive }) => ({
          textDecoration: "none",
          color: "#cbd4a1",
          borderBottom: isActive ? "3px solid #fff" : "none",
        })}
      >
        Home
      </NavLink>

      <a href="#exercises" style={{ textDecoration: "none", color: "#cbd4a1" }}>
        Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
