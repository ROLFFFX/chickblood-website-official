import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import useFontFamily from "../../../hooks/useFontFamily";
import CustomCursor from "../../../utils/CustomCursor";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useWindowSize from "../../../hooks/useWindowSize";

export default function GenerationalBruise() {
  const useFont = useFontFamily();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { width } = useWindowSize();
  return (
    <div
      style={{
        backgroundColor: "#fffcc4",
        height: "100vh",
        overflow: "visible",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {width > 500 ? <CustomCursor></CustomCursor> : <></>}

      {/* Top Nav Box */}
      <Box
        sx={{
          height: "80px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflowX: "auto",
          flexShrink: 0,
        }}
      >
        <BreadCrumbBox>
          <img
            src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/6b68130c-9a2b-40bb-b971-ddb32b99b200/public"
            alt="back icon"
            height="50px"
            width="auto"
            onClick={() => {
              navigate("/blog");
            }}
          ></img>
        </BreadCrumbBox>
        <Typography>|</Typography>

        <BreadCrumbBox>
          <Typography sx={{ fontFamily: useFont.bold }}>
            Issue 1: 小智 (Xiao Zhi)
          </Typography>
        </BreadCrumbBox>
        <Typography>|</Typography>
        {/* <BreadCrumbBox>
          <Typography sx={{ fontFamily: useFont.bold }}>
            Issue 2: Dummy
          </Typography>
        </BreadCrumbBox> */}
      </Box>

      <Box sx={{ display: "center", justifyContent: "center" }}>
        <Divider color="#6c757d" sx={{ width: "85%" }} />
      </Box>

      {/* content with switching */}

      <Box
        sx={{
          overflow: "auto",
          display: "flex",
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "5%",
          marginBottom: "5%",
        }}
      >
        <Typography
          sx={{
            fontFamily: useFont.light,
            whiteSpace: "pre-wrap",
            display: "block",
          }}
        >
          {t("yehoshua")}
        </Typography>
      </Box>
    </div>
  );
}

const BreadCrumbBox = ({ children }) => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "200px",
        flexShrink: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
};
