"use client";
import theme from "@/app/theme";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline>{children}</CssBaseline>
    </MuiThemeProvider>
  );
}

export default ThemeProvider;
