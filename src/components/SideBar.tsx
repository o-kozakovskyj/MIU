import { List, ListItemButton, ListItemIcon, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Home } from "@mui/icons-material";

const SideBar = () => {
  return (
    <Box
      bgcolor={"skyblue"}
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <List>
        <ListItemButton>
          <ListItemIcon>
            <Home />
            <Typography>Homepage</Typography>
          </ListItemIcon>
        </ListItemButton>
      </List>
    </Box>
  );
};
export default SideBar;
