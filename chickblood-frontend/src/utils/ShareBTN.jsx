import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Alert, Box, Snackbar, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { TwitterShareButton } from "react-share";
import useColorPalette from "../hooks/useColorPalette";
import useFontFamily from "../hooks/useFontFamily";
import { IoMdShare } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { FaSquareThreads } from "react-icons/fa6";
import useWindowSize from "../hooks/useWindowSize";

const ShareBTN = ({ url, title }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const colorPalette = useColorPalette();
  const useFont = useFontFamily();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { t } = useTranslation();
  const { width } = useWindowSize();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      setOpenSnackbar(true); // Open the Snackbar
      handleClose();
    });
  };
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const shareToThreads = () => {
    const threadShareUrl = `https://threads.net/intent/post?text=${title} ${url}
`;
    window.open(threadShareUrl, "_blank");
  };

  return (
    <div>
      <Button
        aria-controls={open ? "share-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        startIcon={<IoMdShare />}
        endIcon={<KeyboardArrowDownIcon />}
        style={{
          cursor: "none",
          color: colorPalette.black,
          backgroundColor: colorPalette.pear,
          width: "100%",
        }}
      >
        <Typography
          sx={{
            textTransform: "none",
            fontFamily: useFont.bold,
            fontSize: "15px",
            ml: 2,
            mr: 2,
          }}
        >
          Share
        </Typography>
      </Button>
      <StyledMenu
        id="share-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {/* Twitter Share Button */}
        <MenuItem
          onClick={handleClose}
          disableRipple
          style={{ cursor: "none" }}
        >
          <Box sx={{ width: "100%" }}>
            <TwitterShareButton
              url={url}
              title={title}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "none",
              }}
            >
              <FaXTwitter size={25} />
              <Typography
                sx={{ ml: 2, fontFamily: useFont.bold, fontSize: 13 }}
              >
                Twitter/X
              </Typography>
            </TwitterShareButton>
          </Box>
        </MenuItem>
        {/* Threads */}
        <MenuItem
          onClick={shareToThreads}
          disableRipple
          style={{ cursor: "none" }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            ml={-1}
          >
            <FaSquareThreads size={25} />
            <Typography sx={{ ml: 2, fontFamily: useFont.bold, fontSize: 13 }}>
              Threads
            </Typography>
          </Box>
        </MenuItem>

        {/* Copy Link */}
        {width > 500 && (
          <MenuItem
            onClick={handleCopyLink}
            disableRipple
            style={{ cursor: "none" }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ContentCopyIcon size={25} />
              <Typography
                sx={{ ml: 2, fontFamily: useFont.bold, fontSize: 13 }}
              >
                Copy Link
              </Typography>
            </Box>
          </MenuItem>
        )}
      </StyledMenu>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2500}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          <Typography sx={{ fontFamily: useFont.bold, fontSize: 12 }}>
            {t("linkcopied")}
          </Typography>
        </Alert>
      </Snackbar>
    </div>
  );
};

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
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
  },
}));

export default ShareBTN;
