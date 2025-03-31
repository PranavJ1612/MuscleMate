import React from "react";
import { Stack, Typography } from "@mui/material";

import Icon from "../assets/icons/gym.png";
import all from "../assets/icons/all.png";
import chest from "../assets/icons/chest.png";
import cardio from "../assets/icons/cardio.png";
import neck from "../assets/icons/neck.png";
import lowerArms from "../assets/icons/lowerArms.png";
import upperArms from "../assets/icons/upperArms.png";
import waist from "../assets/icons/waist.png";
import upperLegs from "../assets/icons/upper-legs.png";
import lowerLegs from "../assets/icons/lower-legs.png";
import back from "../assets/icons/back.png";
import shoulder from "../assets/icons/shoulder.png";

const Icons = [
  { icon: all, name: "all" },
  { icon: back, name: "back" },
  { icon: cardio, name: "cardio" },
  { icon: chest, name: "chest" },
  { icon: lowerArms, name: "lower arms" },
  { icon: upperArms, name: "upper arms" },
  { icon: lowerLegs, name: "lower legs" },
  { icon: upperLegs, name: "upper legs" },
  { icon: neck, name: "neck" },
  { icon: shoulder, name: "shoulders" },
  { icon: waist, name: "waist" },
];

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  // Find the corresponding icon object for the given item
  const iconObj = Icons.find((icon) => icon.name === item.toLowerCase());

  return (
    <Stack
      className="bodyPart-card"
      type="button"
      alignItems="center"
      justifyContent="center"
      sx={{
        borderTop: bodyPart === item ? "10px solid #c6ff00" : "",

        background: "#F7F7F7",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "282px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      {iconObj ? (
        <img
          src={iconObj.icon}
          alt={iconObj.name}
          style={{ width: "80px", height: "80px" }}
        />
      ) : (
        <img src={Icon} alt="gym" style={{ width: "40px", height: "40px" }} />
      )}

      <Typography
        fontSize="24px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="black"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
