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
theme.typography.h3 = {
  fontSize: "1.4em",
  fontWeight: 700,
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.75em",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.15em",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2.45em",
  },
};
theme.typography.h6 = {
  fontSize: "1.1em",
  fontWeight: "500",
  lineHeight: "1.4rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.2em",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.25em",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.35em",
  },
};
theme.typography.body1 = {
  fontSize: "1em",
  fontWeight: "400",
  lineHeight: "1.2rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.05em",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.1em",
  },
};
export default theme;
