import React, { StrictMode } from "react";
import App from "../src/App";
import { ThemeProvider } from "@mui/material";
import theme from "../src/theme/theme";

const Home = () => {
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StrictMode>
  );
};

export default Home;
