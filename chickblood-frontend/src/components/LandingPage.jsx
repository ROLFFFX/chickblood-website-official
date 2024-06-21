import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import p5 from "p5";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "../App.css";
import useColorPalette from "../hooks/useColorPalette";
import useFontFamily from "../hooks/useFontFamily";

/** -----------------------------------------------------------------------------------
  LandingPage - A functional component for capturing user input and navigating to the 
  main dashboard of website. It queries user input as a question whcih later translates
  to some interactive notes on message board.

  State:
  @state @type {string} input - The current value of the user input
  @returns {React.ReactEleent} A React element representing the landing page interface 
  for user input.

  Theme Customization
  - @param {customTheme} - customizes the styles for the text field. (border color and font style)

  p5 related stuff
  - @param {P5Wrapper} - intializes p5 wrapper with z-index of -1
  - @param {sketch} - defines p5 sketch

  TODO as of 0520
  @todo p5.js custom background
  @todo user flow TBD. Type your question is counter-intuitive.
  @todo mongodbInsert to be implemented. Currently the user input is logged to console.
----------------------------------------------------------------------------------- **/

function LandingPage() {
  const { t } = useTranslation();
  const outerTheme = useTheme();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  /* 
    handleSubmit funcionality TBD. currently it logs the user input (@var input) to the console 
    and navigates to next layer.
   */
  const handleSubmit = () => {
    console.log(input);
    /* After desired interaction (such as mongoInsert), navigating to next story board. */
    navigate("/story");
  };
  /**
   * p5 related stuff.
   **/
  const sketch = (p) => {
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
    };

    /**
     * @todo to be implemented
     *  **/

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
  };
  const colorPalette = useColorPalette();
  const useFont = useFontFamily();

  return (
    <div>
      <P5Wrapper sketch={sketch} />
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "auto",
            }}
          >
            {/* ---------- Input Box ---------- */}
            <ThemeProvider theme={customTheme(outerTheme, useFont)}>
              <Box width={"20%"}>
                <TextField
                  label={t("typeyourquestion")}
                  onChange={handleInputChange}
                  fullWidth
                  inputProps={{ style: { cursor: "none" } }}
                />
              </Box>
            </ThemeProvider>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "auto",
            }}
          >
            <Stack direction="row" spacing={5} mt={3}>
              {/* ---------- Skip Button ---------- */}
              <Button
                variant="outlined"
                size="small"
                color="inherit"
                sx={{
                  fontSize: "0.7rem",
                  fontFamily: useFont.bold,
                }}
                onClick={() => {
                  navigate("/story");
                }}
                style={{ cursor: "none" }}
              >
                {t("skip")}
              </Button>
              {/* ---------- Submit Button ---------- */}
              <Button
                variant="contained"
                size="small"
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
                {t("submit")}
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default LandingPage;

/* ---------- Customization and Theming ---------- */

/* ---------- custom input text field theme ---------- */
const customTheme = (outerTheme, useFont) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#E0E3E7",
            "--TextField-brandBorderHoverColor": "#B2BAC2",
            "--TextField-brandBorderFocusedColor": "#6F7E8C",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
          input: {
            fontSize: "1rem",
            fontFamily: useFont.light,
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontSize: "0.8rem",
            fontWeight: "400",
            fontFamily: useFont.bold,
          },
        },
      },
    },
  });

/* ---------- p5.js related stuff ---------- */
const P5Wrapper = ({ sketch }) => {
  const wrapperRef = useRef();

  useEffect(() => {
    const canvas = new p5(sketch, wrapperRef.current);
    return () => {
      canvas.remove();
    };
  }, [sketch]);

  return (
    <div
      ref={wrapperRef}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};
