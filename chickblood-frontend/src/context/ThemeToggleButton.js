import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { Button, Typography } from "@mui/material";
import useColorPalette from "../hooks/useColorPalette";
import useFontFamily from "../hooks/useFontFamily";
import { useTranslation } from "react-i18next";
import { MdLightMode } from "react-icons/md";
import { MdModeNight } from "react-icons/md";

const ThemeToggleButton = () => {
  const colorPalette = useColorPalette();
  const { toggleTheme, themeMode } = useContext(ThemeContext);
  const useFont = useFontFamily();
  const { t } = useTranslation();
  console.log(themeMode);

  return (
    <Button
      style={{
        cursor: "none",
        backgroundColor: colorPalette.pear,
      }}
      variant="contained"
      disableElevation
      onClick={toggleTheme}
    >
      {themeMode === "light" ? (
        <MdLightMode style={{ color: colorPalette.black }} />
      ) : (
        <MdModeNight />
      )}

      <Typography
        ml={2}
        sx={{
          color: "#242105",
          fontFamily: useFont.bold,
          fontSize: "15px",
          textTransform: "none",
        }}
      >
        {t("toggle_mode")}
      </Typography>
    </Button>
  );
};

export default ThemeToggleButton;
