import Add from "@components/Add";
import Feed from "@components/Feed";
import NavBar from "@components/NavBar";
import RightBar from "@components/RightBar";
import SideBar from "@components/SideBar";
import { Box, Stack, createTheme, ThemeProvider } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { blue } from "@mui/material/colors";

const App = () => {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    spacing: 10,
    palette: {
      mode,
      primary: {
        main: blue[400],
        light: "skyblue",
      },
      secondary: {
        main: "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
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
