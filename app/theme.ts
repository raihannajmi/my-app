import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: { fontFamily: "Roboto, sans-serif" },
  components: {
    MuiContainer: {
      styleOverrides: {
        // the slot name defined in the `slot` and `overridesResolver` parameters
        // of the `styled` API
        root: {
          padding: "16px",
          minHeight: "100vh",
          maxWidth: "444px !important",
          width: "100%",
          borderRight: "1px solid lightgrey",
          borderLeft: "1px solid lightgrey",
        },
        // value: {
        //   color: "#fff",
        // },
        // unit: {
        //   color: "#888",
        // },
      },
    },
  },
});

export default theme;
