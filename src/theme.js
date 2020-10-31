import { createMuiTheme } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: "#212121",
      main: "#212121",
      dark: "#212121",
      contrastText: "#fff",
    },
    secondary: lightBlue,
  },
});

const lightTheme = createMuiTheme({
  palette: {
    light: "#212121",
    main: "#212121",
    dark: "#212121",
    contrastText: "#fff",
  },
});

export { darkTheme, lightTheme };
