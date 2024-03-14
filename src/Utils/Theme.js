import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f1e9c9",
      dark: "#c47f17",
    },
    secondary: {
      main: "#4b2995",
      light: "#ebe5f9 !important",
      dark: "#8047F8",
    },
    background: {
      lightgray: "#F3F2F2",
      darkgray: "#E6E5E5 !important",
    },
  },
});
export default theme;
