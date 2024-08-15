import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import CBAppBar from "../../../utils/CBAppBar";
import LanguageIcon from "../../../utils/LanguageIcon";
import LoadingPage from "../../../utils/LoadingPage";
import { useNavigate } from "react-router-dom";
import useFontFamily from "../../../hooks/useFontFamily";
import { useTranslation } from "react-i18next";
import useWindowSize from "../../../hooks/useWindowSize";

const imageUrls = [
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/65b99df8-9b51-44c1-492a-4a8f91e12f00/public", // blog背景草莓
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/6b68130c-9a2b-40bb-b971-ddb32b99b200/public", // back btn
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/96d5ae81-cfb3-4e45-5687-ae04972f8800/public", // blog icon
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/18bd550e-a03d-437b-29b7-fc2f99fc3a00/public", // basket pic
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/db64d861-5f6c-434d-4ce1-eaa048fbc600/public", // generational bruise icon
];

export default function BlogMain() {
  const useFont = useFontFamily();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { width } = useWindowSize();
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
          {width > 500 ? (
            <div>
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/18bd550e-a03d-437b-29b7-fc2f99fc3a00/public"
                alt="basket"
                height="300px"
                width="auto"
              />
            </div>
          ) : (
            <motion.div
              animate={{
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/18bd550e-a03d-437b-29b7-fc2f99fc3a00/public"
                alt="basket"
                height="200px"
                width="auto"
              />
            </motion.div>
          )}
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
      {width > 500 ? (
        // desktop view
        <Box>
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
                  textAlign: "center",
                  rotate: 12,
                }}
                onClick={() => {
                  navigate("/blog/genbruise");
                }}
              >
                <img
                  src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/db64d861-5f6c-434d-4ce1-eaa048fbc600/public"
                  alt="generational bruise"
                  style={{
                    height: "auto",
                    width: "300px",
                  }}
                ></img>
                <Typography sx={{ fontFamily: useFont.bold }}>
                  {t("issue1")}
                </Typography>
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
      ) : (
        // mobile view
        <Box>
          {/* blog back icon */}
          <Box width={"100%"} height={"calc(100% - 130px)"}>
            <div
              onClick={handleOpenBasket}
              style={{
                width: "122px",
                transformOrigin: "center",
              }}
            >
              <Grid container direction="row">
                <Grid
                  item
                  xs={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/6b68130c-9a2b-40bb-b971-ddb32b99b200/public"
                    alt="blog icon"
                    height="20px"
                    width="auto"
                  />
                </Grid>
                <Grid item xs={10}>
                  {" "}
                  <img
                    src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/96d5ae81-cfb3-4e45-5687-ae04972f8800/public"
                    alt="blog icon"
                    height="100px"
                    width="auto"
                  />
                </Grid>
              </Grid>
            </div>
            {/* generational bruise */}
            <Box
              width={"100%"}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <motion.div
                style={{
                  position: "absolute",
                  transformOrigin: "center",
                  textAlign: "center",
                  rotate: 12,
                }}
                onClick={() => {
                  navigate("/blog/genbruise");
                }}
                animate={{
                  scale: [0.9, 1.1, 0.9],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/db64d861-5f6c-434d-4ce1-eaa048fbc600/public"
                  alt="generational bruise"
                  style={{
                    height: "auto",
                    width: "200px",
                    marginTop: "20%",
                  }}
                ></img>
                <Typography sx={{ fontFamily: useFont.bold }}>
                  {t("issue1")}
                </Typography>
              </motion.div>
            </Box>
          </Box>
          {/* Language Icon */}
          <div
            style={{
              position: "absolute",
              bottom: "5%",
              left: "3%",
              transformOrigin: "center",
            }}
          >
            <LanguageIcon></LanguageIcon>
          </div>
        </Box>
      )}
    </Box>
  );
}
