import { Box } from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";
import CBAppBar from "../../../utils/CBAppBar";
import LanguageIcon from "../../../utils/LanguageIcon";

export default function BlogMain() {
  // true: basket, false: index
  const [basket, setBasket] = useState(true);

  const handleCloseBasket = () => {
    setBasket(false);
  };

  const handleOpenBasket = () => {
    setBasket(true);
  };

  return basket ? (
    // basket page:
    // base div with bg
    <Box
      height="100vh"
      style={{
        backgroundImage: `url(https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/65b99df8-9b51-44c1-492a-4a8f91e12f00/public)`,
        backgroundRepeat: "repeat",
        backgroundPosition: "center 0px",
        backgroundSize: "300px auto",
      }}
    >
      {/* app bar */}
      <CBAppBar />
      {/* basket */}
      <Box
        sx={{
          height: "calc(100% - 130px)",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.15 }}
          onClick={handleCloseBasket}
          style={{ transformOrigin: "center" }}
        >
          <img
            src="pics/WEB_image/blog/basket.png"
            alt="basket"
            height="300px"
            width="auto"
          />
        </motion.div>
      </Box>
    </Box>
  ) : (
    // selector view
    <Box
      height="100vh"
      style={{
        backgroundColor: "#FFFCC4",
      }}
    >
      {/* app bar */}
      <CBAppBar />
      {/* blog back icon */}
      <Box sx={{ marginLeft: "3%" }}>
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          onClick={handleOpenBasket}
          style={{ width: "340px", transformOrigin: "center" }}
        >
          <img
            src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/6b68130c-9a2b-40bb-b971-ddb32b99b200/public"
            alt="blog icon"
            height="80px"
            width="auto"
          />
          <img
            src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/96d5ae81-cfb3-4e45-5687-ae04972f8800/public"
            alt="blog icon"
            height="250px"
            width="auto"
          />
        </motion.div>
      </Box>
      {/* Language Icon */}
      <motion.div
        whileHover={{
          scale: 1.2,
        }}
        style={{
          position: "absolute",
          bottom: "5%",
          left: "3%",
          transformOrigin: "center",
        }}
      >
        <LanguageIcon></LanguageIcon>
      </motion.div>
    </Box>
  );
}
