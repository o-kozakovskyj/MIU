import Add from "@components/Add";
import Feed from "@components/Feed";
import NavBar from "@components/NavBar";
import RightBar from "@components/RightBar";
import SideBar from "@components/SideBar";
import { Box, Stack } from "@mui/system";
import * as React from "react";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box>
        <NavBar />
        <Stack direction="row" justifyContent="space-between">
          <SideBar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
};
export default App;
