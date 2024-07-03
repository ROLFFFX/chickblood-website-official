import { Box, Divider, Grid } from "@mui/material";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import HideableDrawer from "../../utils/HideableDrawer";
import EmailSender from "./EmailSender";
import SocialMediaLinks from "./SocialMediaLinks";

export default function ContactPage() {
  const { themeMode } = useContext(ThemeContext);
  return (
    <Box style={{ height: "100vh" }}>
      <Box
        position="absolute"
        sx={{ marginLeft: "1%", marginTop: "1%", zIndex: 1000 }}
      >
        <HideableDrawer />
      </Box>
      <Grid container>
        <Grid item xs={8}>
          <SocialMediaLinks></SocialMediaLinks>
        </Grid>
        <Grid
          item
          xs={4}
          height={"100vh"}
          p={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box height={"70vh"} width={"100%"}>
            <EmailSender></EmailSender>
          </Box>
        </Grid>
      </Grid>

      <Divider
        orientation="vertical"
        flexItem
        sx={{
          height: "90vh",
          position: "absolute",
          left: "66.6%",
          top: "5%",
          bgcolor: themeMode === "light" ? "#000000" : "#FFFFFF",
        }}
      />
    </Box>
  );
}
