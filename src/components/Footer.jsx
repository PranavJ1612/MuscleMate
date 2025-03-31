import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/MMLogof.png";

const Footer = () => (
  <Box mt="80px" bgcolor="">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img
        src={Logo}
        alt="logo"
        style={{ width: "100%", height: "70px" }}
        className="object-contain"
      />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
      color="white"
    >
      Be Consistent with ❤️
      <b className="font-serif text-[#c6ff00]">MuscleMate</b>
    </Typography>
  </Box>
);

export default Footer;
