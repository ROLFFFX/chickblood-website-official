import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";
import useColorPalette from "../hooks/useColorPalette";
import useFontFamily from "../hooks/useFontFamily";
import { useTranslation } from "react-i18next";

export default function BlogBackBTN() {
  const navigate = useNavigate();
  const colorPalette = useColorPalette();
  const useFont = useFontFamily();
  const { t } = useTranslation();
  return (
    <div>
      <Button
        variant="contained"
        disableElevation
        style={{
          cursor: "none",
          backgroundColor: colorPalette.pear,
          color: colorPalette.black,
          width: "100%",
        }}
        onClick={() => {
          navigate("/blog");
        }}
      >
        <RiArrowGoBackLine size={"20px"}></RiArrowGoBackLine>
        <Typography
          sx={{
            fontFamily: useFont.bold,
            fontSize: "15px",
            textTransform: "none",
            ml: 2,
          }}
        >
          {t("backtoblog")}
          <RiArrowGoBackLine
            size={"25px"}
            color={colorPalette.pear}
          ></RiArrowGoBackLine>
        </Typography>
      </Button>
    </div>
  );
}
