import AppBar from "@mui/material/AppBar";
import {
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { Pets, Mail, Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  gap: "20px",
  display: "none",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  gap: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const NavBar = () => {
  const [open, SetOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Super Messenger MUI
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail color="secondary" />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications color="secondary" />
          </Badge>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"
            color="action"
            onClick={() => SetOpen(true)}
          />
        </Icons>
        <UserBox>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"
            color="action"
            onClick={() => SetOpen(true)}
          />
          <Typography component="span">John Doe</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={() => SetOpen(false)}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
export default NavBar;
