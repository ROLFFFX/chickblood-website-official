import React from "react";
import { Box, Grid } from "@mui/material";
import HideableDrawer from "../../utils/HideableDrawer";
import EmailSender from "./EmailSender";

export default function ContactPage() {
  return (
    <Box style={{ height: "100vh" }}>
      <Box position="absolute" sx={{ marginLeft: "1%", marginTop: "1%" }}>
        <HideableDrawer />
      </Box>
      <Grid container>
        <Grid item xs={7}></Grid>
        <Grid item xs={5} border={1} height={"100vh"} p={3}>
          <EmailSender></EmailSender>
        </Grid>
      </Grid>
    </Box>
  );
}
