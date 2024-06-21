import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import useFontFamily from "../../hooks/useFontFamily";
import HideableDrawer from "../../utils/HideableDrawer";

export default function Blog() {
  const navigate = useNavigate();
  const useFont = useFontFamily();
  const { t } = useTranslation();
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
      sx={{ ...sx, borderRadius: 4 }}
      whileHover={{ scale: 1.1 }}
      {...props}
    />
  );
  return (
    <div style={{ height: "100vh" }}>
      <Box position="absolute" sx={{ marginLeft: "1%", marginTop: "1%" }}>
        <HideableDrawer />
      </Box>
      {/* Box containing the scrollable issues menu */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",

            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "30vw",
              height: "80vh",
            },
          }}
        >
          <Paper elevation={12} sx={{ borderRadius: 4 }}>
            <Box p={5}>
              {/* List Containing all Blogs */}
              <List disablePadding>
                {/* Issue 1 */}
                <ListItem disablePadding>
                  <AnimatedListItemButton
                    onClick={() => {
                      navigate("/blog/issue1");
                    }}
                  >
                    <AnimatedListItemText
                      primary={t("issue1")}
                      sx={ListItemTextStyle}
                    />
                  </AnimatedListItemButton>
                </ListItem>
                {/* Issue 2 */}
                <ListItem disablePadding>
                  <AnimatedListItemButton
                    onClick={() => {
                      navigate("/blog");
                    }}
                  >
                    <AnimatedListItemText
                      primary={t("issuedummy")}
                      sx={ListItemTextStyle}
                    />
                  </AnimatedListItemButton>
                </ListItem>
                {/* More Issues... */}
              </List>
            </Box>
          </Paper>
        </Box>
      </Box>
    </div>
  );
}
