import React from "react";
import { MemberCarousel } from "./MemberCarousel";
import { Box } from "@mui/material";
import HideableDrawer from "../../utils/HideableDrawer";

export default function MemberPage() {
  return (
    <div style={{ height: "100vh" }}>
      <Box
        position="absolute"
        sx={{ marginLeft: "1%", marginTop: "1%", zIndex: 1000 }}
      >
        <HideableDrawer />
      </Box>
      <MemberCarousel></MemberCarousel>
    </div>
  );
}
