import { Box } from "@mui/material";
import React from "react";
import HideableDrawer from "../utils/HideableDrawer";
import Construction from "../beta/Construction";

function HomePage() {
  return (
    <Box height="100vh" position="relative" style={{ overflow: "hidden" }}>
      <Construction />
      <Box position="absolute" sx={{ marginLeft: "1%", marginTop: "1%" }}>
        <HideableDrawer />
      </Box>
    </Box>
  );
}

export default HomePage;
