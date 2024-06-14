import React from "react";
import FallingBalls from "./FallingBalls";
import { Box } from "@mui/material";
import HideableDrawer from "../utils/HideableDrawer";

export default function FallingTest() {
  return (
    <div>
      <Box
        position="absolute"
        sx={{ marginLeft: "1%", marginTop: "1%", zIndex: 1000 }}
      >
        <HideableDrawer />
      </Box>
      <FallingBalls></FallingBalls>
    </div>
  );
}
