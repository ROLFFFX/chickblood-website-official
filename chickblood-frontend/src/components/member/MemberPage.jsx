import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import CBAppBar from "../../utils/CBAppBar";
import LoadingPage from "../../utils/LoadingPage";
import { MemberCarousel } from "./MemberCarousel";

const imageUrls = [
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/756898c5-9460-488f-c223-439abb929b00/public", // chiyokoo
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/f4b8e394-bd5a-47f9-917f-3c4e6a925800/public", // tzuchi
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/e3848fa4-faae-4bf6-ebe8-7ca438f68000/public", // rita
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/93d19096-0aae-4f72-1ab0-b03d10e59c00/public", // joshua
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/f2064d80-c241-4aab-bf4a-2e279c774000/public", // rolf
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/5716223e-2100-4e46-dbba-319b40a8b800/public", // chzaza
];

export default function MemberPage() {
  const { width } = useWindowSize();
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
  return (
    <>
      {/* Loading Page */}
      <LoadingPage
        openLoader={openLoader}
        handleClose={handleCloseLoader}
      ></LoadingPage>
      {width > 1000 ? (
        <Box
          sx={{
            height: "100vh",
            bgcolor: "#fffcc4",
          }}
        >
          <Box
            sx={{
              position: "relative",
              zIndex: 1000,
            }}
          >
            <CBAppBar />
          </Box>
          <Box
            sx={{
              height: "calc(100vh - 150px)",
              width: "100vw",
              margin: "0 auto",
              position: "relative",
              zIndex: 1,
            }}
          >
            <MemberCarousel fov={13} />
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            height: "100vh",
            bgcolor: "#fffcc4",
          }}
        >
          <Box
            sx={{
              position: "relative",
              zIndex: 1000,
            }}
          >
            <CBAppBar />
          </Box>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              top: "-130px",
            }}
          >
            <Box
              sx={{
                height: "100vh",
                width: "100vw",
                margin: "0 auto",
                position: "relative",
                zIndex: 1,
              }}
            >
              <MemberCarousel fov={35} />
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
