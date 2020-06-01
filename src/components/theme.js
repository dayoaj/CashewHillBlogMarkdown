import { useState, useMemo, useEffect } from "react";
import { amber, brown, pink, purple, yellow } from "@material-ui/core/colors";
import { useMediaQuery } from "@material-ui/core";
import {
  firaSans300,
  firaSans400,
  firaSans500,
  firaSans700,
} from "../fonts/Fira Sans/firasans";
import {
  firaSans300ext,
  firaSans400ext,
  firaSans500ext,
  firaSans700ext,
} from "../fonts/Fira Sans/firasans-ext/firasans-ext";

import {
  ubuntu300,
  ubuntu400,
  ubuntu500,
  ubuntu700,
} from "../fonts/Ubuntu/ubuntu";
import {
  ubuntu300ext,
  ubuntu400ext,
  ubuntu500ext,
  ubuntu700ext,
} from "../fonts/Ubuntu/ubuntu-ext/ubuntu-ext";

/* Initializes Theme */
const useThemeInit = () => {
  const [type, setType] = useState("light");
  const [componentMounted, setComponentMounted] = useState(false);
  const preferedColorScheme = useMediaQuery("(prefers-color-scheme: dark)");

  const themeObj = () => ({
    palette: {
      primary: {
        main: type === "light" ? pink.A200 : pink[700],
      },
      secondary: {
        main: type === "light" ? yellow.A700 : yellow[700],
      },
      background: {
        default: type === "light" ? "#fff" : "#303030",
        descriptionCard: type === "light" ? amber[100] : brown[500],
      },
      actionBtn: {
        main: type === "light" ? purple.A400 : purple[400],
        hover: type === "light" ? purple[700] : purple[200],
      },
      type,
    },
    typography: {
      fontFamily:
        '"Fira Sans", Roboto, "Droid Sans", "Trebuchet MS", "Segeo UI", sans-serif',
      h1: {
        fontFamily:
          'Ubuntu, "Fira Sans", Roboto, "Droid Sans", "Trebuchet MS", "Segeo UI", sans-serif',
        fontWeight: 400,
        fontSize: "3rem",
        lineHeight: 1.167,
        letterSpacing: "0em",
      },
      h2: {
        fontFamily:
          'Ubuntu, "Fira Sans", Roboto, "Droid Sans", "Trebuchet MS", "Segeo UI", sans-serif',
        fontWeight: 400,
        fontSize: "2.125rem",
        lineHeight: 1.235,
        letterSpacing: "0.00735em",
      },
      h3: {
        fontFamily:
          'Ubuntu, "Fira Sans", Roboto, "Droid Sans", "Trebuchet MS", "Segeo UI", sans-serif',
        fontWeight: 400,
        fontSize: "1.5rem",
        lineHeight: 1.334,
        letterSpacing: "0em",
      },
      h4: {
        fontFamily:
          'Ubuntu, "Fira Sans", Roboto, "Droid Sans", "Trebuchet MS", "Segeo UI", sans-serif',
        fontWeight: 500,
        fontSize: "1.25rem",
        lineHeight: 1.6,
        letterSpacing: "0.0075em",
      },
      h5: {
        fontFamily:
          'Inter, "Fira Sans", Roboto, "Droid Sans", "Trebuchet MS", "Segeo UI", sans-serif',
        fontWeight: 500,
        fontSize: "1.25rem",
        lineHeight: 1.6,
        letterSpacing: "0.0075em",
      },
      h6: {
        fontFamily:
          'Inter, "Fira Sans", Roboto, "Droid Sans", "Trebuchet MS", "Segeo UI", sans-serif',
        fontWeight: 500,
        fontSize: "1.25rem",
        lineHeight: 1.6,
        letterSpacing: "0.0075em",
      },
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": [
            firaSans300,
            firaSans400,
            firaSans500,
            firaSans700,
            firaSans300ext,
            firaSans400ext,
            firaSans500ext,
            firaSans700ext,
            ubuntu300,
            ubuntu400,
            ubuntu500,
            ubuntu700,
            ubuntu300ext,
            ubuntu400ext,
            ubuntu500ext,
            ubuntu700ext,
          ],
        },
      },
    },
  });

  const setMode = mode => {
    window.localStorage.setItem("cashewHillTheme", mode);
    setType(mode);
  };

  const toggleDarkMode = () => {
    type === "light" ? setMode("dark") : setMode("light");
  };
  const theme = useMemo(themeObj, [type]);

  useEffect(() => {
    const localTheme = window.localStorage.getItem("cashewHillTheme");
    preferedColorScheme && !localTheme
      ? setMode("dark")
      : localTheme
      ? setType(localTheme)
      : setMode("light");

    setComponentMounted(true);
  }, [preferedColorScheme]);

  return [theme, toggleDarkMode, componentMounted];
};

export default useThemeInit;
