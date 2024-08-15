import RedoIcon from "@mui/icons-material/Redo";
import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import CBAppBar from "../../utils/CBAppBar";
import CustomCursor from "../../utils/CustomCursor";
import PageOne from "./calendar/PageOne";
import PageTwo from "./calendar/PageTwo";
import PageOneMobile from "./calendar/PageOneMobile";
import PageTwoMobile from "./calendar/PageTwoMobile";

export default function EventCalendar() {
  const { width } = useWindowSize();
  const [pageNum, setPageNum] = useState(1);
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
      <CBAppBar></CBAppBar>

      {/* Box containing two posters */}
      {width > 800 ? (
        <Box sx={{ height: "100%", width: "100", zIndex: -100 }}>
          <CustomCursor></CustomCursor>
          <Grid container sx={{ height: "100%", width: "100%" }}>
            <Grid item xs={6}>
              <Box
                sx={{
                  height: "calc(100% - 130px)",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PageOne></PageOne>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  height: "calc(100% - 130px)",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PageTwo></PageTwo>
              </Box>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box sx={{ height: "100%", width: "100%", zIndex: -100 }}>
          <Grid
            sx={{
              height: "calc(100% - 130px)",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {pageNum === 1 ? (
              <PageOneMobile></PageOneMobile>
            ) : (
              <PageTwoMobile></PageTwoMobile>
            )}

            <Box
              sx={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                setPageNum(pageNum === 1 ? 2 : 1);
              }}
            >
              <RedoIcon sx={{ fontSize: "50px" }}></RedoIcon>
            </Box>
          </Grid>

          {/* <Box
                sx={{
                  height: "calc(100% - 130px)",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PageTwo></PageTwo>
              </Box> */}
        </Box>
      )}
    </Box>
  );
}
