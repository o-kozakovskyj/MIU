import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

const theme = createTheme({
  spacing: 10,
  palette: {
    primary: {
      main: blue[400],
      light: "skyblue",
    },
    secondary: {
      main: "#fff",
    },
  },
});

export default theme;
