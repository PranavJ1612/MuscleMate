import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HeroBannerImage from "../assets/images/bannerimg.jpg";

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: "150px", xs: "70px" }, ml: { sm: "50px" } }}
    position="relative"
    p="20px"
  >
    <Typography
      fontWeight={700}
      sx={{ fontSize: { lg: "56px", xs: "40px" } }}
      mb="23px"
      color="#cbd4a1"
    >
      Get Fit,<br />
      Get Strong,<br/>
      Get Healthy!
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" color="#fff" sx={{width:{lg:'600px'}}}>
      {/* Check out the most effective exercises personalized to you */}
      Welcome to our fitness training app designed to help you achieve your fitness goals and transform your body and mind.
    </Typography>
    <Stack>
      <a
        href="#exercises"
        style={{
          marginTop: "45px",
          textDecoration: "none",
          width: "200px",
          textAlign: "center",
          background: "#c6ff00",
          padding: "14px",
          fontSize: "22px",
          textTransform: "none",
          color: "black",
          borderRadius: "4px",
        }}
        className="hover:shadow-[0px_4px_10px_#cbd4a1]"
      >
        Explore Exercises
      </a>
    </Stack>
    <Typography
      fontWeight={600}
      color="#cbd4a1"
      sx={{
        opacity: "0.1",
        display: { lg: "block", xs: "none" },
        fontSize: "200px",
      }}
    >
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img grayscale-100 opacity-50 rounded-bl-[90px]" />
  </Box>
);

export default HeroBanner;
