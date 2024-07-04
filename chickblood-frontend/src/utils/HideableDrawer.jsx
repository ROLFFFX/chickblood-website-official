import * as React from "react";
import {
  Divider,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CiMenuFries } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import CustomCursor from "./CustomCursor";
import LanguageBTN from "./LanguageBTN";
import useFontFamily from "../hooks/useFontFamily";
import ThemeToggleButton from "../context/ThemeToggleButton";

/**
 * Main Component.
 **/
export default function HideableDrawer() {
  const navigate = useNavigate();
  const useFont = useFontFamily();
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  /**
   * ListItemText Styles. Defines the FontSize/Family and Motion of List Item Texts.
   **/
  const ListItemTextStyle = {
    "& .MuiListItemText-primary": {
      fontSize: 15,
      fontFamily: useFont.bold,
    },
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
  const AnimatedListItemButton = ({ primary, sx, ...props }) => (
    <MotionListItemButton
      primary={primary}
      sx={sx}
      whileHover={{ scale: 1.2 }}
      style={{ originX: 0 }}
      {...props}
    />
  );

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
      role="presentation"
    >
      <CustomCursor />
      <List disablePadding>
        <ListItem disablePadding>
          <AnimatedListItemButton
            onClick={() => {
              navigate("/home");
            }}
          >
            <AnimatedListItemText
              primary={t("homepage")}
              sx={ListItemTextStyle}
            />
          </AnimatedListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <AnimatedListItemButton>
            <AnimatedListItemText
              primary={t("events")}
              sx={ListItemTextStyle}
            />
          </AnimatedListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <AnimatedListItemButton>
            <AnimatedListItemText
              primary={t("merchandise")}
              sx={ListItemTextStyle}
            />
          </AnimatedListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <AnimatedListItemButton>
            <AnimatedListItemText
              primary={t("archive")}
              sx={ListItemTextStyle}
            />
          </AnimatedListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <AnimatedListItemButton>
            <AnimatedListItemText
              primary={t("gallery")}
              sx={ListItemTextStyle}
            />
          </AnimatedListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <AnimatedListItemButton
            onClick={() => {
              navigate("/blog");
            }}
          >
            <AnimatedListItemText primary={t("blog")} sx={ListItemTextStyle} />
          </AnimatedListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <AnimatedListItemButton
            onClick={() => {
              navigate("/contact");
            }}
          >
            <AnimatedListItemText
              primary={t("contact")}
              sx={ListItemTextStyle}
            />
          </AnimatedListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <AnimatedListItemButton
            onClick={() => {
              navigate("/member");
            }}
          >
            <AnimatedListItemText
              primary={t("member")}
              sx={ListItemTextStyle}
            />
          </AnimatedListItemButton>
        </ListItem>
      </List>
      <Divider sx={{ mt: 1 }} />
      <List>
        {/* <ListItem disablePadding>
          <AnimatedListItemButton
            onClick={() => {
              navigate("/playground");
            }}
          >
            <AnimatedListItemText
              primary={"Playground - Beta"}
              sx={ListItemTextStyle}
            />
          </AnimatedListItemButton>
        </ListItem> */}
      </List>
      <Box style={{ flexGrow: 0.95 }} />
      <Box
        p={1}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box width={"85%"}>
          <ThemeToggleButton />
        </Box>
      </Box>
      <Box
        p={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box width={"85%"}>
          <LanguageBTN />
        </Box>
      </Box>
    </Box>
  );

  return (
    <React.Fragment>
      <Box>
        <Button
          onClick={toggleDrawer(true)}
          color="inherit"
          style={{ cursor: "none" }}
        >
          <CiMenuFries size={"25px"} />
        </Button>
      </Box>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </React.Fragment>
  );
}
