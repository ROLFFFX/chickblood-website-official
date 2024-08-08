import { Box, Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import useWindowSize from "../hooks/useWindowSize";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingPage from "./LoadingPage";

const imageUrls = [
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/4f5711f3-e2be-4903-b1b2-625161edf100/public", //cb nav
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/6e53a9df-673d-4ebf-04c0-a68ac88d7700/public", //home nav
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/52db8508-9328-417c-5626-c67197787400/public", //contact nav
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/46e972c8-2262-4c86-b7c5-bcc813e47600/public", //blog nav
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/fddd5356-25c7-4dac-b307-bcdff5b95e00/public", //member nav
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/0931e13a-9b82-4cb0-3d8f-452adc602e00/public", //event nav
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/a7ce920d-061c-4c46-2d1a-647cf1674600/public", //divider
];

function CBAppBar() {
  const { width } = useWindowSize();
  const navigate = useNavigate();

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
    <Box sx={{ minHeight: "100px" }}>
      <AppBar position="static" elevation={0}>
        <Container
          sx={{
            minHeight: "50px",
            minWidth: "100%",
            bgcolor: "#F9E57A",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* WIDE toolbar containing all items */}
          {width > 1000 && (
            <Toolbar disableGutters sx={{ width: "100%" }}>
              <Grid container>
                {/* CB Logo, also home button */}
                <Grid
                  item
                  xs={4}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <motion.div
                    height="100%"
                    width="100%"
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 1.1 }}
                    onClick={() => {
                      navigate("/home");
                    }}
                  >
                    <img
                      src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/4f5711f3-e2be-4903-b1b2-625161edf100/public"
                      alt="App Divider"
                      width={"100%"}
                      minwidth="200px"
                    ></img>
                  </motion.div>
                </Grid>
                {/* Event Nav */}
                <Grid item xs={2}>
                  <motion.div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 1.3 }}
                    onClick={() => {
                      navigate("/eventhome");
                    }}
                  >
                    <img
                      src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/0931e13a-9b82-4cb0-3d8f-452adc602e00/public"
                      alt="App Divider"
                      height="90px"
                      style={{ marginTop: 10 }}
                    ></img>
                  </motion.div>
                </Grid>
                {/* Contact Nav */}
                <Grid item xs={2}>
                  <motion.div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 1.3 }}
                    onClick={() => {
                      navigate("/contact");
                    }}
                  >
                    <img
                      src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/52db8508-9328-417c-5626-c67197787400/public"
                      alt="App Divider"
                      height="90px"
                      style={{ marginTop: 10 }}
                    ></img>
                  </motion.div>
                </Grid>
                {/* Member Nav */}
                <Grid item xs={2}>
                  <motion.div
                    height={"100%"}
                    width={"100%"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 1.3 }}
                    onClick={() => {
                      navigate("/member");
                    }}
                  >
                    <img
                      src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/fddd5356-25c7-4dac-b307-bcdff5b95e00/public"
                      alt="App Divider"
                      height="90px"
                      style={{ marginTop: 10 }}
                    ></img>
                  </motion.div>
                </Grid>
                {/* Blog Nav */}
                <Grid item xs={2}>
                  <motion.div
                    height={"100%"}
                    width={"100%"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 1.4 }}
                    onClick={() => {
                      navigate("/blog");
                    }}
                  >
                    <img
                      src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/46e972c8-2262-4c86-b7c5-bcc813e47600/public"
                      alt="App Divider"
                      height="90px"
                      style={{ marginTop: 10 }}
                    ></img>
                  </motion.div>
                </Grid>
              </Grid>
            </Toolbar>
          )}
          {width > 800 && width < 1000 && (
            // NARROW toolbar
            <Toolbar disableGutters sx={{ width: "100%" }}>
              <Grid container>
                {/* home */}
                <Grid item xs={2.4}>
                  <motion.div
                    height={"100%"}
                    width={"100%"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 1.3 }}
                    onClick={() => {
                      navigate("/home");
                    }}
                  >
                    <img
                      src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/6e53a9df-673d-4ebf-04c0-a68ac88d7700/public"
                      alt="App Divider"
                      height="90px"
                      style={{ marginTop: 10 }}
                    ></img>
                  </motion.div>
                </Grid>
                {/* event nav */}
                <Grid item xs={2.4}>
                  <motion.div
                    height={"100%"}
                    width={"100%"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 1.3 }}
                    onClick={() => {
                      navigate("/eventhome");
                    }}
                  >
                    <img
                      src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/0931e13a-9b82-4cb0-3d8f-452adc602e00/public"
                      alt="App Divider"
                      height="90px"
                      style={{ marginTop: 10 }}
                    ></img>
                  </motion.div>
                </Grid>
                {/* contact */}
                <Grid item xs={2.4}>
                  <motion.div
                    height={"100%"}
                    width={"100%"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 1.3 }}
                    onClick={() => {
                      navigate("/contact");
                    }}
                  >
                    <img
                      src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/52db8508-9328-417c-5626-c67197787400/public"
                      alt="App Divider"
                      height="90px"
                      style={{ marginTop: 10 }}
                    ></img>
                  </motion.div>
                </Grid>
                {/* member */}
                <Grid item xs={2.4}>
                  <motion.div
                    height={"100%"}
                    width={"100%"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 1.3 }}
                    onClick={() => {
                      navigate("/member");
                    }}
                  >
                    <img
                      src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/fddd5356-25c7-4dac-b307-bcdff5b95e00/public"
                      alt="App Divider"
                      height="90px"
                      style={{ marginTop: 10 }}
                    ></img>
                  </motion.div>
                </Grid>
                {/* blog */}
                <Grid item xs={2.4}>
                  <motion.div
                    height={"100%"}
                    width={"100%"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 1.3 }}
                    onClick={() => {
                      navigate("/blog");
                    }}
                  >
                    <img
                      src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/46e972c8-2262-4c86-b7c5-bcc813e47600/public"
                      alt="App Divider"
                      height="90px"
                      style={{ marginTop: 10 }}
                    ></img>
                  </motion.div>
                </Grid>
              </Grid>
            </Toolbar>
          )}
          {/* extremely narrow app bar */}
          {width < 799 && (
            // NARROW toolbar
            <Toolbar disableGutters sx={{ width: "100%" }}>
              <Grid container>
                {/* home */}
                <Grid item xs={2.4}>
                  <motion.div
                    height={"100%"}
                    width={"100%"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 1.3 }}
                    onClick={() => {
                      navigate("/home");
                    }}
                  >
                    <img
                      src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/6e53a9df-673d-4ebf-04c0-a68ac88d7700/public"
                      alt="App Divider"
                      height={0.1 * width}
                      style={{ marginTop: 10 }}
                    ></img>
                  </motion.div>
                </Grid>
                {/* event nav */}
                <Grid item xs={2.4}>
                  <motion.div
                    height={"100%"}
                    width={"100%"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 1.3 }}
                    onClick={() => {
                      navigate("/eventhome");
                    }}
                  >
                    <img
                      src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/0931e13a-9b82-4cb0-3d8f-452adc602e00/public"
                      alt="App Divider"
                      height={0.1 * width}
                      style={{ marginTop: 10 }}
                    ></img>
                  </motion.div>
                </Grid>
                {/* contact */}
                <Grid item xs={2.4}>
                  <motion.div
                    height={"100%"}
                    width={"100%"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 1.3 }}
                    onClick={() => {
                      navigate("/contact");
                    }}
                  >
                    <img
                      src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/52db8508-9328-417c-5626-c67197787400/public"
                      alt="App Divider"
                      height={0.1 * width}
                      style={{ marginTop: 10 }}
                    ></img>
                  </motion.div>
                </Grid>
                {/* member */}
                <Grid item xs={2.4}>
                  <motion.div
                    height={"100%"}
                    width={"100%"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 1.3 }}
                    onClick={() => {
                      navigate("/member");
                    }}
                  >
                    <img
                      src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/fddd5356-25c7-4dac-b307-bcdff5b95e00/public"
                      alt="App Divider"
                      height={0.1 * width}
                      style={{ marginTop: 10 }}
                    ></img>
                  </motion.div>
                </Grid>
                {/* blog */}
                <Grid item xs={2.4}>
                  <motion.div
                    height={"100%"}
                    width={"100%"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 1.3 }}
                    onClick={() => {
                      navigate("/blog");
                    }}
                  >
                    <img
                      src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/46e972c8-2262-4c86-b7c5-bcc813e47600/public"
                      alt="App Divider"
                      height={0.1 * width}
                      style={{ marginTop: 10 }}
                    ></img>
                  </motion.div>
                </Grid>
              </Grid>
            </Toolbar>
          )}
        </Container>
        <Box sx={{ bgcolor: "#F9E57A" }}>
          <img
            src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/a7ce920d-061c-4c46-2d1a-647cf1674600/public"
            alt="App Divider"
            height="30px"
            width="100%"
          ></img>
        </Box>
      </AppBar>
      {/* Loading Page */}
      <LoadingPage
        openLoader={openLoader}
        handleClose={handleCloseLoader}
      ></LoadingPage>
    </Box>
  );
}
export default CBAppBar;
