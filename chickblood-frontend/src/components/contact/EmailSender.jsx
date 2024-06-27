import { Box, Grid, TextField, Typography, Button } from "@mui/material";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import useFontFamily from "../../hooks/useFontFamily";
import { useTranslation } from "react-i18next";
import useColorPalette from "../../hooks/useColorPalette";
import axios from "axios";
import { serverURL } from "../../config";

export default function EmailSender() {
  const useFont = useFontFamily();
  const { t } = useTranslation();
  const colorPalette = useColorPalette();
  const outerTheme = useTheme();
  // Handling Names----
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  // End Handling Names----
  // Handling Email----
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  // End Handling Email----
  // Handling Title----
  const [title, setTitle] = useState("");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  // End Handling Email----
  // Handling Message----
  const [message, setMessage] = useState("");
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  // End Handling Message----
  const handleSubmit = async () => {
    const emailContent = {
      eName: name,
      eEmail: email,
      eTitle: title,
      eMessage: message,
    };

    try {
      console.log("Start Sending Email.");
      const response = await axios.post(
        `${serverURL}/api/send-email`,
        emailContent
      );
      if (response.status === 200) {
        console.log("Email sent successfully");
        setName("");
        setEmail("");
        setTitle("");
        setMessage("");
      } else {
        console.log("Failed to send email");
      }
    } catch (error) {
      console.error("Error Sending Email: ", error);
    } finally {
      // close loader and give success toast here
    }
  };
  const theme = customTheme(outerTheme, useFont);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", height: "100%" }}>
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          height={"10%"}
          textAlign={"center"}
        >
          <Typography sx={{ fontFamily: useFont.bold, fontSize: 20 }}>
            {t("sendusemail")}
          </Typography>
        </Box>
        {/* Name and Email */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          height={"20%"}
          textAlign={"center"}
        >
          <Grid container>
            <Grid
              item
              xs={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box width="80%">
                {/* Name TextField */}
                <TextField
                  label={t("yourname")}
                  onChange={handleNameChange}
                  fullWidth
                  variant="standard"
                  value={name}
                  inputProps={{ style: { cursor: "none" } }}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box width="80%">
                {/* Email TextField */}
                <TextField
                  label={t("youremail")}
                  onChange={handleEmailChange}
                  fullWidth
                  variant="standard"
                  value={email}
                  inputProps={{ style: { cursor: "none" } }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* Title */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
          }}
          height={"15%"}
        >
          <Box width="90%">
            {/* Title TextField */}
            <TextField
              label={t("emailTitle")}
              onChange={handleTitleChange}
              fullWidth
              variant="standard"
              value={title}
              inputProps={{ style: { cursor: "none" } }}
            />
          </Box>
        </Box>
        {/* message */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
          }}
          textAlign={"center"}
        >
          <Box width={"90%"}>
            {/* Message TextField */}
            <TextField
              label={t("emailMessage")}
              onChange={handleMessageChange}
              fullWidth
              variant="standard"
              value={message}
              multiline
              minRows={6}
              maxRows={6}
              inputProps={{ style: { cursor: "none" } }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          mt={4}
        >
          <Button
            variant="contained"
            sx={{
              fontSize: "0.7rem",
              fontFamily: useFont.bold,
            }}
            onClick={handleSubmit}
            style={{
              cursor: "none",
              color: colorPalette.black,
              backgroundColor: colorPalette.pear,
            }}
          >
            Send Email
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

// Custom Textfield theme for variant=standard.
const customTheme = (outerTheme, useFont) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
      primary: {
        main: outerTheme.palette.text.primary,
      },
      text: {
        primary: outerTheme.palette.text.primary,
      },
    },
    components: {
      MuiInput: {
        styleOverrides: {
          root: {
            color: outerTheme.palette.text,
            "&:after": {
              borderBottomColor: outerTheme.palette.text.primary,
            },
            "&:before": {
              borderBottomColor: outerTheme.palette.text.primary,
            },
            "&:hover:not(.Mui-disabled):before": {
              borderBottomColor: outerTheme.palette.text.primary,
            },
          },
          input: {
            fontSize: "0.9rem",
            fontFamily: useFont.light,
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: outerTheme.palette.text.primary,
            "&.Mui-focused": {
              color: outerTheme.palette.text.primary,
            },
          },
        },
      },
    },
    typography: {
      fontFamily: useFont.bold,
      fontSize: 12,
    },
  });
