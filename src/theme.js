import { createMuiTheme } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: "#1A1D24", // Drawer Color+ Appbar color
      main: "#0F131A", // MusicCard background
      dark: "#222831", // Card hover,
      contrastText: "#fff",
    },
    grey: {
      50: "#2a2b2c", // card color
    },
    secondary: lightBlue,
  },
});

const lightTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#eeeeee",
      main: "#d8d8d8",
      dark: "#cccccc",
      contrastText: "#000000", // icon color
    },
    grey: {
      // 50: "#e2e2e2",
      50: "#e6e6e6", // card color
    },
    text: {
      primary: "#000000",
    },
    secondary: lightBlue,
  },
});

export { darkTheme, lightTheme };
