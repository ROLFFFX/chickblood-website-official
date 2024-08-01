import { Box } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import CBAppBar from "../../utils/CBAppBar";
import LoadingPage from "../../utils/LoadingPage";

const imageUrls = [
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/7d4373f1-32e4-49aa-3f58-21390b23e400/public", // bg img
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/930d9789-4d9f-4445-b0e5-336db254f900/public", // event icon
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/10c5b2cc-00d0-4441-72d0-c066c03ddc00/public", // ruanmuban
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/7fa12557-945a-4be3-e64a-26c4be1e4800/public", // gui zi
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/0123a1dd-5a7a-43f3-9632-9621b3b52a00/public", // notepad
];

export default function EventHome() {
  /** Loader states and handle image preload */
  const [openLoader, setOpenLoader] = useState(true);
  const handleCloseLoader = () => {
    setOpenLoader(false);
  };
  // const handleOpenLoader = () => {
  //   setOpenLoader(true);
  // };
  const loadImage = (src) => {
    console.log("Image loading.");
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  };
  useEffect(() => {
    const preloadImages = async () => {
      try {
        await Promise.all(imageUrls.map((url) => loadImage(url)));
        setOpenLoader(false);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    preloadImages();
  }, []);
  return (
    <Box
      height="100vh"
      style={{
        backgroundImage: `url(https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/7d4373f1-32e4-49aa-3f58-21390b23e400/public)`,
        backgroundRepeat: "repeat",
        backgroundPosition: "center 0px",
        backgroundSize: "contain",
        position: "relative",
      }}
    >
      {/* app bar */}
      <CBAppBar />
      {/* Loading Page */}
      <LoadingPage
        openLoader={openLoader}
        handleClose={handleCloseLoader}
      ></LoadingPage>
      {/* entire section below app bar */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/0123a1dd-5a7a-43f3-9632-9621b3b52a00/public"
        alt="notepad"
        style={{
          position: "absolute",
          width: "25%",
          height: "auto",
          marginLeft: "10vw",
        }}
      />
      {/* ruanmuban */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        style={{
          position: "absolute",
          width: "auto",
          height: "45%",
          left: "40vw",
          zIndex: 2,
          overflow: "visible",
        }}
      >
        <img
          src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/10c5b2cc-00d0-4441-72d0-c066c03ddc00/public"
          alt="ruanmuban"
          style={{
            width: "auto",
            height: "100%",
          }}
        />
      </motion.div>
      {/* gui zi */}
      <motion.div
        whileHover={{ scale: 1.1, zIndex: 3 }}
        style={{
          position: "absolute",
          width: "auto",
          height: "50%",
          left: "20vw",
          bottom: "5vh",
          zIndex: 1,
        }}
      >
        <img
          src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/7fa12557-945a-4be3-e64a-26c4be1e4800/public"
          alt="guizi"
          style={{
            width: "auto",
            height: "100%",
          }}
        />
      </motion.div>
      {/* icon */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/930d9789-4d9f-4445-b0e5-336db254f900/public"
        alt="event icon"
        style={{
          position: "absolute",
          width: "auto",
          height: "35%",
          left: "50vw",
          bottom: "5vh",
          transform: "rotate(-30deg)",
        }}
      />
    </Box>
  );
}
