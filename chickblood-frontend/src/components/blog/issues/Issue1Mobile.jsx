import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../../context/ThemeProvider";
import useColorPalette from "../../../hooks/useColorPalette";
import useFontFamily from "../../../hooks/useFontFamily";
import BlogBackBTN from "../../../utils/BlogBackBTN";
import LanguageBTN from "../../../utils/LanguageBTN";
import LoadingPage from "../../../utils/LoadingPage";
import ShareBTN from "../../../utils/ShareBTN";

export default function Issue1Mobile() {
  return (
    <Box>
      <IndexDrawer />
    </Box>
  );
}

const drawerWidthOpen = 240;
const drawerWidthClosed = 72;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  ...theme.mixins.toolbar,
}));

const CustomDrawer = styled(Drawer)(({ theme, open }) => ({
  width: open ? drawerWidthOpen : drawerWidthClosed,
  "& .MuiDrawer-paper": {
    width: open ? drawerWidthOpen : drawerWidthClosed,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

function IndexDrawer() {
  const [open, setOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  const colorPalette = useColorPalette();
  const { t } = useTranslation();
  const useFont = useFontFamily();
  const [content, setContent] = useState(1);
  const { themeMode } = useContext(ThemeContext);

  /** Loader states */
  const [openLoader, setOpenLoader] = React.useState(false); // this state controls the open and closing of loader
  const handleCloseLoader = () => {
    setOpenLoader(false);
  };
  const handleOpenLoader = () => {
    setOpenLoader(true);
  };

  /**
   * ListItemText Styles. Defines the FontSize/Family and Motion of List Item Texts.
   **/
  const ListItemTextStyle = {
    "& .MuiListItemText-primary": {
      fontSize: 13,
      fontFamily: useFont.bold,
    },
    textAlign: "center",
  };

  const MotionListItemText = motion(ListItemText);
  const AnimatedListItemText = ({ primary, sx, ...props }) => (
    <MotionListItemText
      primary={primary}
      sx={sx}
      whileHover={{ scale: 1 }}
      style={{ originX: 0 }}
      {...props}
    />
  );

  /**
   * ListItemButton Styles. Defines the Styling and motion of List Item Buttons.
   **/
  const MotionListItemButton = motion(ListItemButton);
  const AnimatedListItemButton = React.memo(({ primary, sx, ...props }) => (
    <MotionListItemButton
      primary={primary}
      sx={{ ...sx, borderRadius: 4 }}
      whileHover={{ scale: 1.1 }}
      {...props}
    />
  ));

  return (
    <Box sx={{ display: "flex", cursor: "none" }}>
      <LoadingPage
        openLoader={openLoader}
        handleClose={handleCloseLoader}
      ></LoadingPage>
      <CustomDrawer variant="permanent" open={open}>
        {/* Header Section. Contains Icon and Hide Menu Button */}
        <Box overflow={"visible"}>
          <DrawerHeader>
            {open ? (
              <Box mt={-3}>
                {themeMode === "light" ? (
                  <img
                    src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/96d5ae81-cfb3-4e45-5687-ae04972f8800/public"
                    alt="blog icon"
                    style={{ width: "240px", height: "240px" }}
                  ></img>
                ) : (
                  <img
                    src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/e491435d-a7a5-46da-b674-58791dc9d300/public"
                    alt="blog icon"
                    style={{ width: "240px", height: "240px" }}
                  ></img>
                )}

                <Box p={1} mt={-4}>
                  <Button
                    onClick={handleDrawerToggle}
                    variant="contained"
                    disableElevation
                    style={{
                      width: "100%",
                      cursor: "none",
                      backgroundColor: colorPalette.pear,
                      color: colorPalette.black,
                    }}
                  >
                    <Typography sx={{ fontFamily: useFont.bold, fontSize: 12 }}>
                      {t("hidebar")}
                    </Typography>
                    {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                  </Button>
                </Box>
              </Box>
            ) : (
              <Box mr={0.5}>
                <Button
                  onClick={handleDrawerToggle}
                  variant="contained"
                  style={{
                    cursor: "none",
                    borderRadius: 10,
                    backgroundColor: colorPalette.pear,
                    color: colorPalette.black,
                  }}
                >
                  {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </Button>
              </Box>
            )}
          </DrawerHeader>
        </Box>
        <Divider sx={{ mt: 2, mb: 1 }} color={"#000000"} />
        {/* Index Box
          Drawer List that controls items inside the blog */}
        <Box mb={2}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 1,
            }}
          >
            <Typography sx={{ fontSize: 15, fontFamily: useFont.bold }}>
              {t("index")}
            </Typography>
          </Box>
          <List disablePadding>
            <ListItem disablePadding>
              <AnimatedListItemButton
                onClick={() => {
                  handleOpenLoader();
                  setContent(1);
                  handleCloseLoader();
                }}
              >
                <AnimatedListItemText
                  primary={open ? t("dummyheading") + "1" : "1"}
                  sx={ListItemTextStyle}
                />
              </AnimatedListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <AnimatedListItemButton
                onClick={() => {
                  handleOpenLoader();
                  setContent(2);
                  handleCloseLoader();
                }}
              >
                <AnimatedListItemText
                  primary={open ? t("dummyheading") + "2" : "2"}
                  sx={ListItemTextStyle}
                />
              </AnimatedListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <AnimatedListItemButton
                onClick={() => {
                  handleOpenLoader();
                  setContent(3);
                  handleCloseLoader();
                }}
              >
                <AnimatedListItemText
                  primary={open ? t("dummyheading") + "3" : "3"}
                  sx={ListItemTextStyle}
                />
              </AnimatedListItemButton>
            </ListItem>
          </List>
        </Box>
        <Divider color={"#000000"} />
        {/* Settings Box */}
        <Box sx={{ height: "100%", width: "100%" }}>
          {open && (
            <Box>
              {/* Language Toggle Button */}
              <Box p={1}>
                <LanguageBTN />
              </Box>
              {/* Back to Blogs Button */}
              <Box p={1}>
                <BlogBackBTN />
              </Box>
              {/* Share This Page Button */}
              <Box p={1}>
                <ShareBTN
                  url={"http://localhost:3000/blog/issue1"}
                  title={"Share This Page!"}
                ></ShareBTN>
              </Box>
            </Box>
          )}
        </Box>
      </CustomDrawer>
      {open ? (
        <Box>hide the menu to see content. what should i put here?</Box>
      ) : (
        <Box
          component="main"
          sx={{
            p: 3,
            overflow: "auto",
          }}
        >
          {content === 1 ? (
            <Section1 />
          ) : content === 2 ? (
            <Section2 />
          ) : content === 3 ? (
            <Section3 />
          ) : null}
        </Box>
      )}
    </Box>
  );
}

/**
 * Sections refers to the content of each sections.
 */

const Section1 = () => {
  const useFont = useFontFamily();
  const { t } = useTranslation();
  return (
    <div>
      <Typography sx={{ fontSize: 16, fontFamily: useFont.light }}>
        {t("dummycontent1")}
        <br />
        <br />
        {t("dummycontent1")}
        <br />
        <br />
        {t("dummycontent1")}
      </Typography>
    </div>
  );
};

const Section2 = () => {
  const useFont = useFontFamily();
  const { t } = useTranslation();
  return (
    <div>
      <Typography sx={{ fontSize: 16, fontFamily: useFont.light }}>
        {t("dummycontent2")}
        <br />
        <br />
        {t("dummycontent2")}
        <br />
        <br />
        {t("dummycontent2")}
      </Typography>
    </div>
  );
};

const Section3 = () => {
  const useFont = useFontFamily();
  const { t } = useTranslation();
  return (
    <div>
      <Typography sx={{ fontSize: 16, fontFamily: useFont.light }}>
        {t("dummycontent3")}
        <br />
        <br />
        {t("dummycontent3")}
        <br />
        <br />
        {t("dummycontent3")}
      </Typography>
    </div>
  );
};
