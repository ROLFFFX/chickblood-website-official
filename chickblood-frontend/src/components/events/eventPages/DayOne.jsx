import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import LoadingPage from "../../../utils/LoadingPage";
import CBAppBar from "../../../utils/CBAppBar";
import CustomCursor from "../../../utils/CustomCursor";
import useWindowSize from "../../../hooks/useWindowSize";

const imageUrls = [
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/041da201-95d2-417e-4947-f704603c7600/public", // background
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/7a47a3b3-b04a-48ad-6ba6-0822fdf7f900/public", // selfcare icon
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/236674b0-4ca1-48c7-cf76-85c5b40e7500/public", // childhood icon
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/cb76e15d-6078-4e03-603f-ff9110448200/public", // city icon
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/f65b7ea4-a572-40a5-6fcf-7187368c9b00/public", // tmselfcare - 1
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/b8da3500-dff1-4008-d185-8c10c0120c00/public", // tmselfcare - 2
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/7082891e-b178-44b1-3738-d7949abadd00/public", // tmselfcare - 3
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/f58b423e-0416-4310-1309-a63386da2100/public", // tmselfcare - 4
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/565e5234-3b14-403a-ac1c-967c333d9500/public", // tmselfcare - 5
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/7bd7c114-4e50-4e96-a8c7-4ae5ddbce000/public", // tmselfcare - 6
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/57196ba5-7d21-47ab-2f4f-a6d05861d100/public", // tmchildhood - 1
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/9618c371-7699-4dd1-fc61-127eefe03c00/public", // tmchildhood - 2
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/2f5e4c86-250e-4a38-a9ca-65c9100f9600/public", // tmchildhood - 3
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/19352f30-75fc-435f-49b7-1b6cf95aee00/public", // tmchildhood - 4
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/5ded63f5-ac19-483b-7ee0-f96435efa300/public", // tmchildhood - 5
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/444a1635-4296-4aeb-24e5-f4a9bfded300/public", // tmchildhood - 6
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/6db02234-ddfc-48cc-e631-918b0afb8d00/public", // tmcity - 1
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/27ba88f7-ba72-4c39-6c4c-e2dd25186f00/public", // tmcity - 2
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/9d5b7271-d6e1-45c9-c765-7d6c2959fb00/public", // tmcity - 3
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/a22bad8c-58e4-46a7-9c1f-847fd37ab600/public", // tmcity - 4
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/c8b1e19a-8f96-403c-00bb-dcd3c4e1f500/public", // tmcity - 6
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/5d6bc61a-39b6-4e8e-e454-21fd5ce52a00/public", // tmcity - 5
];

export default function DayOne() {
  const { width } = useWindowSize();
  // image preload
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
    <div
      style={{
        backgroundImage: `url(https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/7d4373f1-32e4-49aa-3f58-21390b23e400/public)`,
        backgroundRepeat: "repeat",
        backgroundPosition: "center 0px",
        backgroundSize: "contain",
        height: "100vh",
        overflow: "visible",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* app bar */}
      <CBAppBar />
      {/* Loading Page */}
      <LoadingPage
        openLoader={openLoader}
        handleClose={handleCloseLoader}
      ></LoadingPage>
      {width > 500 && <CustomCursor></CustomCursor>}
      {/* rest of the page, images and content */}
      <Box sx={{ overflow: "auto", display: "flex", p: 4 }}>
        {width > 500 ? (
          // normal desktop view
          <Grid container>
            {/* That's my city */}
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/cb76e15d-6078-4e03-603f-ff9110448200/public"
                alt="that's my icon - red"
                width="60%"
              ></img>
            </Grid>
            <Grid item xs={3} sx={{ overflow: "auto", display: "flex", p: 3 }}>
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/6db02234-ddfc-48cc-e631-918b0afb8d00/public"
                alt="that's my city 1"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            <Grid item xs={3} sx={{ overflow: "auto", display: "flex", p: 3 }}>
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/27ba88f7-ba72-4c39-6c4c-e2dd25186f00/public"
                alt="that's my city 2"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            <Grid item xs={3} sx={{ overflow: "auto", display: "flex", p: 3 }}>
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/9d5b7271-d6e1-45c9-c765-7d6c2959fb00/public"
                alt="that's my city 3"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            <Grid item xs={3} sx={{ overflow: "auto", display: "flex", p: 3 }}>
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/a22bad8c-58e4-46a7-9c1f-847fd37ab600/public"
                alt="that's my city 4"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            <Grid item xs={3} sx={{ overflow: "auto", display: "flex", p: 3 }}>
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/5d6bc61a-39b6-4e8e-e454-21fd5ce52a00/public"
                alt="that's my city 5"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            <Grid item xs={3} sx={{ overflow: "auto", display: "flex", p: 3 }}>
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/c8b1e19a-8f96-403c-00bb-dcd3c4e1f500/public"
                alt="that's my city 6"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            {/* that's my childhood */}
            <Grid item xs={3} sx={{ overflow: "auto", display: "flex", p: 3 }}>
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/57196ba5-7d21-47ab-2f4f-a6d05861d100/public"
                alt="that's my tmchildhood 1"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            <Grid item xs={3} sx={{ overflow: "auto", display: "flex", p: 3 }}>
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/9618c371-7699-4dd1-fc61-127eefe03c00/public"
                alt="that's my childhood 2"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/236674b0-4ca1-48c7-cf76-85c5b40e7500/public"
                alt="that's my blue icon"
                width="80%"
              ></img>
            </Grid>
            <Grid item xs={3} sx={{ overflow: "auto", display: "flex", p: 3 }}>
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/2f5e4c86-250e-4a38-a9ca-65c9100f9600/public"
                alt="that's my childhood 3"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            <Grid item xs={3} sx={{ overflow: "auto", display: "flex", p: 3 }}>
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/19352f30-75fc-435f-49b7-1b6cf95aee00/public"
                alt="that's my childhood 4"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            <Grid item xs={3} sx={{ overflow: "auto", display: "flex", p: 3 }}>
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/5ded63f5-ac19-483b-7ee0-f96435efa300/public"
                alt="that's my childhood 5"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            <Grid item xs={3} sx={{ overflow: "auto", display: "flex", p: 3 }}>
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/444a1635-4296-4aeb-24e5-f4a9bfded300/public"
                alt="that's my childhood 6"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            {/* That's my self care */}
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/7a47a3b3-b04a-48ad-6ba6-0822fdf7f900/public"
                alt="that's my icon - white"
                width="60%"
              ></img>
            </Grid>
            <Grid item xs={3} sx={{ overflow: "auto", display: "flex", p: 3 }}>
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/f65b7ea4-a572-40a5-6fcf-7187368c9b00/public"
                alt="that's my selfcare 1"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            <Grid item xs={3} sx={{ overflow: "auto", display: "flex", p: 3 }}>
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/b8da3500-dff1-4008-d185-8c10c0120c00/public"
                alt="that's my selfcare 2"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            <Grid item xs={3} sx={{ overflow: "auto", display: "flex", p: 3 }}>
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/7082891e-b178-44b1-3738-d7949abadd00/public"
                alt="that's my selfcare 3"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            <Grid item xs={3} sx={{ overflow: "auto", display: "flex", p: 3 }}>
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/f58b423e-0416-4310-1309-a63386da2100/public"
                alt="that's my selfcare 4"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            <Grid item xs={3} sx={{ overflow: "auto", display: "flex", p: 3 }}>
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/565e5234-3b14-403a-ac1c-967c333d9500/public"
                alt="that's my selfcare 5"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            <Grid item xs={3} sx={{ overflow: "auto", display: "flex", p: 3 }}>
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/7bd7c114-4e50-4e96-a8c7-4ae5ddbce000/public"
                alt="that's my selfcare 6"
                width="100%"
                height="auto"
              ></img>
            </Grid>
          </Grid>
        ) : (
          // mobile view
          <Grid container>
            {/* That's my city */}
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/cb76e15d-6078-4e03-603f-ff9110448200/public"
                alt="that's my icon - red"
                width="60%"
              ></img>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ overflow: "auto", display: "flex", p: 1.5 }}
            >
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/6db02234-ddfc-48cc-e631-918b0afb8d00/public"
                alt="that's my city 1"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ overflow: "auto", display: "flex", p: 1.5 }}
            >
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/27ba88f7-ba72-4c39-6c4c-e2dd25186f00/public"
                alt="that's my city 2"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ overflow: "auto", display: "flex", p: 1.5 }}
            >
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/9d5b7271-d6e1-45c9-c765-7d6c2959fb00/public"
                alt="that's my city 3"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ overflow: "auto", display: "flex", p: 1.5 }}
            >
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/a22bad8c-58e4-46a7-9c1f-847fd37ab600/public"
                alt="that's my city 4"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ overflow: "auto", display: "flex", p: 1.5 }}
            >
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/5d6bc61a-39b6-4e8e-e454-21fd5ce52a00/public"
                alt="that's my city 5"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ overflow: "auto", display: "flex", p: 1.5 }}
            >
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/c8b1e19a-8f96-403c-00bb-dcd3c4e1f500/public"
                alt="that's my city 6"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            {/* that's my childhood */}
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/236674b0-4ca1-48c7-cf76-85c5b40e7500/public"
                alt="that's my blue icon"
                width="60%"
              ></img>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ overflow: "auto", display: "flex", p: 1.5 }}
            >
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/57196ba5-7d21-47ab-2f4f-a6d05861d100/public"
                alt="that's my tmchildhood 1"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ overflow: "auto", display: "flex", p: 1.5 }}
            >
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/9618c371-7699-4dd1-fc61-127eefe03c00/public"
                alt="that's my childhood 2"
                width="100%"
                height="auto"
              ></img>
            </Grid>

            <Grid
              item
              xs={6}
              sx={{ overflow: "auto", display: "flex", p: 1.5 }}
            >
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/2f5e4c86-250e-4a38-a9ca-65c9100f9600/public"
                alt="that's my childhood 3"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ overflow: "auto", display: "flex", p: 1.5 }}
            >
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/19352f30-75fc-435f-49b7-1b6cf95aee00/public"
                alt="that's my childhood 4"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ overflow: "auto", display: "flex", p: 1.5 }}
            >
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/5ded63f5-ac19-483b-7ee0-f96435efa300/public"
                alt="that's my childhood 5"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ overflow: "auto", display: "flex", p: 1.5 }}
            >
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/444a1635-4296-4aeb-24e5-f4a9bfded300/public"
                alt="that's my childhood 6"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            {/* That's my self care */}
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/7a47a3b3-b04a-48ad-6ba6-0822fdf7f900/public"
                alt="that's my icon - white"
                width="60%"
              ></img>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ overflow: "auto", display: "flex", p: 1.5 }}
            >
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/f65b7ea4-a572-40a5-6fcf-7187368c9b00/public"
                alt="that's my selfcare 1"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ overflow: "auto", display: "flex", p: 1.5 }}
            >
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/b8da3500-dff1-4008-d185-8c10c0120c00/public"
                alt="that's my selfcare 2"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ overflow: "auto", display: "flex", p: 1.5 }}
            >
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/7082891e-b178-44b1-3738-d7949abadd00/public"
                alt="that's my selfcare 3"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ overflow: "auto", display: "flex", p: 1.5 }}
            >
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/f58b423e-0416-4310-1309-a63386da2100/public"
                alt="that's my selfcare 4"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ overflow: "auto", display: "flex", p: 1.5 }}
            >
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/565e5234-3b14-403a-ac1c-967c333d9500/public"
                alt="that's my selfcare 5"
                width="100%"
                height="auto"
              ></img>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ overflow: "auto", display: "flex", p: 1.5 }}
            >
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/7bd7c114-4e50-4e96-a8c7-4ae5ddbce000/public"
                alt="that's my selfcare 6"
                width="100%"
                height="auto"
              ></img>
            </Grid>
          </Grid>
        )}
      </Box>
    </div>
  );
}
