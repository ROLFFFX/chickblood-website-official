import { Box } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import CBAppBar from "../../../utils/CBAppBar";
import LanguageIcon from "../../../utils/LanguageIcon";
import LoadingPage from "../../../utils/LoadingPage";
import { useNavigate } from "react-router-dom";

const imageUrls = [
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/65b99df8-9b51-44c1-492a-4a8f91e12f00/public",
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/6b68130c-9a2b-40bb-b971-ddb32b99b200/public",
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/96d5ae81-cfb3-4e45-5687-ae04972f8800/public",
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/18bd550e-a03d-437b-29b7-fc2f99fc3a00/public",
];

export default function BlogMain() {
  const navigate = useNavigate();
  // true: basket, false: index
  const [basket, setBasket] = useState(true);

  const handleCloseBasket = () => {
    setBasket(false);
  };

  const handleOpenBasket = () => {
    setBasket(true);
  };
  /** Loader states and handle image preload */
  const [openLoader, setOpenLoader] = useState(true);
  const handleCloseLoader = () => {
    setOpenLoader(false);
  };
  const loadImage = (src) => {
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
      {/* Loading Page */}
      <LoadingPage
        openLoader={openLoader}
        handleClose={handleCloseLoader}
      ></LoadingPage>
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
            src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/18bd550e-a03d-437b-29b7-fc2f99fc3a00/public"
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
      <Box width={"100%"} height={"calc(100% - 130px)"}>
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
        {/* generational bruise */}
        <Box width={"100%"}>
          <motion.div
            whileHover={{
              scale: 1.2,
            }}
            style={{
              position: "absolute",
              marginTop: "-10%",
              marginLeft: "40%",
              transformOrigin: "center",
            }}
            onClick={() => {
              navigate("/blog/genbruise");
            }}
          >
            <img
              src="/pics/gb.png"
              alt="generational bruise"
              style={{
                height: "auto",
                width: "300px",
              }}
            ></img>
          </motion.div>
        </Box>
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
