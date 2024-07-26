import { Box } from "@mui/material";
import React from "react";
import CBAppBar from "../../utils/CBAppBar";
import { MemberCarousel } from "./MemberCarousel";
import useWindowSize from "../../hooks/useWindowSize";

export default function MemberPage() {
  const { width } = useWindowSize();

  return (
    <>
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
