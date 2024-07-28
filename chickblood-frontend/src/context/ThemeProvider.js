import React, { createContext, useState, useMemo, useEffect } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export const ThemeContext = createContext({
  toggleTheme: () => {},
});

const lightThemeOptions = {
  palette: {
    mode: "light",
    skyBlue: {
      main: "#82CFEF",
    },
    pear: {
      main: "#DCDC22",
    },
    egyptianBlue: {
      main: "#013994",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#000000",
      secondary: "#000000",
    },
  },
};

const darkThemeOptions = {
  palette: {
    mode: "light",
    skyBlue: {
      main: "#82CFEF",
    },
    pear: {
      main: "#DCDC22",
    },
    egyptianBlue: {
      main: "#013994",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#000000",
      secondary: "#000000",
    },
  },
};

// const darkThemeOptions = {
//   palette: {
//     mode: "dark",
//     skyBlue: {
//       main: "#82CFEF",
//     },
//     pear: {
//       main: "#DCDC22",
//     },
//     egyptianBlue: {
//       main: "#013994",
//     },
//     background: {
//       default: "#222222",
//       paper: "#222222",
//     },
//     text: {
//       primary: "#FFFFFF",
//       secondary: "#FFFFFF",
//     },
//   },
// };

const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem("themeMode") || "light";
  });

  useEffect(() => {
    localStorage.setItem("themeMode", themeMode);
  }, [themeMode]);

  const theme = useMemo(
    () =>
      createTheme(themeMode === "light" ? lightThemeOptions : darkThemeOptions),
    [themeMode]
  );

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, themeMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
