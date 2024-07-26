import { Box } from "@mui/material";
import React from "react";
import CBAppBar from "../../utils/CBAppBar";

export default function EventHome() {
  return (
    <Box
      height="100vh"
      style={{
        backgroundImage: `url(https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/7d4373f1-32e4-49aa-3f58-21390b23e400/public)`,
        backgroundRepeat: "repeat",
        backgroundPosition: "center 0px",
        backgroundSize: "contain",
      }}
    >
      {/* app bar */}
      <CBAppBar />
      {/* entire section below app bar */}
      <img
        src="pics/WEB_image/event/notepad.png"
        alt="notepad"
        style={{
          position: "absolute",
          width: "20vw",
          height: "auto",
          marginLeft: "20vw",
        }}
      ></img>
      <Box
        sx={{
          height: "calc(100% - 130px)",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* note pad */}
        <img
          src="pics/WEB_image/event/obj_group.png"
          alt="notepad"
          style={{
            position: "absolute",
            width: "auto",
            height: "calc(100vh - 130px)",
          }}
        ></img>
      </Box>
    </Box>
  );
}
