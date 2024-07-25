import { Box } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import CBAppBar from "../utils/CBAppBar";
import { useNavigate } from "react-router-dom";
import LoadingPage from "../utils/LoadingPage";
import LanguageIcon from "../utils/LanguageIcon";

const imageUrls = [
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/616c50e0-6502-4279-27e5-4b9c4b379000/public", // background image, office
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/b6134cb0-0790-4272-b6c8-09523df6a000/public", // rita holding poster
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/05ccfda8-59c2-4688-8f74-2c27f103b000/public", // plant
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/38d51d5c-ebc9-4466-079c-8852ac22fb00/public", // language icon
];

function HomePage() {
  const { width } = useWindowSize();
  const navigate = useNavigate();
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
    // Base div with background image. on repeat, full cover.
    <Box
      height="100vh"
      style={{
        backgroundImage: `url(https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/616c50e0-6502-4279-27e5-4b9c4b379000/public)`,
        backgroundRepeat: "repeat",
        backgroundPosition: "center 0px",
        backgroundSize: "contain",
      }}
    >
      <div>
        <LoadingPage
          openLoader={openLoader}
          handleClose={handleCloseLoader}
        ></LoadingPage>
        {/* Rest of the page goes here. Use the image url in image components. */}
      </div>
      {/* Top App Bar */}
      <CBAppBar />
      {/* Box for three img components */}
      <Box
        position={"relative"}
        sx={{
          height: "calc(100% - 130px)",
          width: "100%",
        }}
      >
        {/* Rita with the poster */}
        <Box
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { ease: "easeOut", duration: 0.2 },
            }}
            style={{
              display: "inline-block",
              transformOrigin: "bottom center",
            }}
            onClick={() => {
              navigate("/eventhome");
            }}
          >
            <img
              src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/b6134cb0-0790-4272-b6c8-09523df6a000/public"
              alt="rita"
              style={{
                height: "100%",
                width: "auto",
              }}
            />
          </motion.div>
        </Box>
        {/* Plant */}
        {width > 1000 && (
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { ease: "easeOut", duration: 0.2 },
            }}
            style={{
              position: "absolute",
              height: "40%",
              width: "auto",
              marginLeft: "85%",
              marginTop: "25%",
            }}
          >
            <img
              src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/05ccfda8-59c2-4688-8f74-2c27f103b000/public"
              alt="plant"
              style={{
                height: "100%",
                width: "auto",
              }}
            />
          </motion.div>
        )}
        {/* Language Icon */}
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { ease: "easeOut", duration: 0.2 },
          }}
          style={{
            position: "absolute",
            bottom: "5%",
            left: "3%",
          }}
        >
          <LanguageIcon></LanguageIcon>
        </motion.div>
      </Box>
    </Box>
  );
}

export default HomePage;
