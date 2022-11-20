import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import { Box } from "@mui/system";
import {
  AccountBox,
  Article,
  Home,
  ModeNight,
  People,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";

const SideBar = ({ mode, setMode }) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List component="nav">
          <ListItemButton component="a" href="/">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText>HomePage</ListItemText>
          </ListItemButton>
          <ListItemButton component="a" href="/pages">
            <ListItemIcon>
              <Article />
            </ListItemIcon>
            <ListItemText>Pages</ListItemText>
          </ListItemButton>
          <ListItemButton component="a" href="/groups">
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText>Groups</ListItemText>
          </ListItemButton>
          <ListItemButton component="a" href="/marketplace">
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText>Marketplace</ListItemText>
          </ListItemButton>
          <ListItemButton component="a" href="/friends">
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText>Friends</ListItemText>
          </ListItemButton>
          <ListItemButton component="a" href="/settings">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </ListItemButton>
          <ListItemButton component="a" href="/profile">
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </ListItemButton>
          <ListItemButton component="a" href="/profile">
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch
              onClick={() => {
                mode === "light" ? setMode("dark") : setMode("light");
              }}
            />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
};
export default SideBar;
