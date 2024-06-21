import React from "react";
import { MemberCarousel } from "./MemberCarousel";
import { Box } from "@mui/material";
import HideableDrawer from "../../utils/HideableDrawer";

export default function MemberPage() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box
        position="absolute"
        sx={{ marginLeft: "1%", marginTop: "1%", zIndex: 1000 }}
      >
        <HideableDrawer />
      </Box>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ height: "60vw", width: "100vw", overflow: "hidden" }}>
          <MemberCarousel></MemberCarousel>
        </Box>
      </Box>
    </Box>
  );
}
