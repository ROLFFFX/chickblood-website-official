import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material/styles";
import * as React from "react";
// i18n imports
import LanguageIcon from "@mui/icons-material/Language";
import { Typography } from "@mui/material";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import useColorPalette from "../hooks/useColorPalette";
import useFontFamily from "../hooks/useFontFamily";
import CustomCursor from "./CustomCursor";
import useWindowSize from "../hooks/useWindowSize";

export default function LanguageBTN() {
  const useFont = useFontFamily();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { t } = useTranslation();
  const colorPalette = useColorPalette();
  const { width } = useWindowSize();
  return (
    <div>
      {width > 500 ? <CustomCursor></CustomCursor> : null}
      <Button
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={
          <KeyboardArrowDownIcon style={{ color: colorPalette.black }} />
        }
        style={{
          cursor: "none",
          backgroundColor: colorPalette.pear,
          width: "100%",
        }}
      >
        <LanguageIcon style={{ color: colorPalette.black }}></LanguageIcon>
        <Typography
          ml={2}
          sx={{
            color: "#242105",
            fontFamily: useFont.bold,
            fontSize: "15px",
            textTransform: "none",
          }}
        >
          {t("language")}
        </Typography>
      </Button>
      <StyledMenu
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        style={{ cursor: "none" }}
      >
        {/* English */}
        <MenuItem
          onClick={() => {
            i18n.changeLanguage("en");
            setAnchorEl(null);
          }}
          disableRipple
          style={{ cursor: "none" }}
        >
          <Typography sx={{ fontSize: "15px", fontFamily: "CHeiHK-UltraBold" }}>
            English
          </Typography>
        </MenuItem>
        {/* 中文 */}
        <MenuItem
          onClick={() => {
            i18n.changeLanguage("chn");
            setAnchorEl(null);
          }}
          disableRipple
          style={{ cursor: "none" }}
        >
          <Typography sx={{ fontSize: "15px", fontFamily: "DHeiFanTi" }}>
            中文
          </Typography>
        </MenuItem>
        {/* 日语 */}
        <MenuItem
          onClick={() => {
            i18n.changeLanguage("jpn");
            setAnchorEl(null);
          }}
          disableRipple
          style={{ cursor: "none" }}
        >
          <Typography
            sx={{
              fontSize: "15px",
              fontFamily: "hiragino-mincho-pron-w6",
            }}
          >
            日本語
          </Typography>
        </MenuItem>
        {/* 韩语 */}
        <MenuItem
          onClick={() => {
            i18n.changeLanguage("krn");
            setAnchorEl(null);
          }}
          disableRipple
          style={{ cursor: "none" }}
        >
          <Typography
            sx={{ fontSize: "15px", fontFamily: "Pretendard-ExtraBold" }}
          >
            한국어
          </Typography>
        </MenuItem>
      </StyledMenu>
    </div>
  );
}

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
