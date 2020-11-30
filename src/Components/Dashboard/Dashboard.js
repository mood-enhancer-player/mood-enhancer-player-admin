import React, { useContext } from "react";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AuthContext } from "../../context/auth";
import AppNavBar from "./AppBar/AppNavBar";
import MenuForExistingAdmin from "./ProfileMenu/MenuForExistingAdmin";
import MenuForNewAdmin from "./ProfileMenu/MenuForNewAdmin";
import HideDrawer from "./NavWithHiddenDrawer/HideDrawer";
import Home from "../Home/Home";
import AddSongs from "../AddSongs/AddSongs";
import AddArtist from "../AddArtist/AddArtist";
import SongList from "../SongList/SongList";
import UserList from "../UserList/UserList";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    background: theme.palette.primary.main,
    minHeight: "100vh",
    // background: "green",
  },
}));
const Dashboard = ({ themeHandler, themeToggler }) => {
  const classes = useStyles();

  const { user, logout } = useContext(AuthContext);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  // State For Menu Switching
  const [state, setState] = React.useState("Dashboard");
  const selectedMenuItem = (selectedTab) => {
    setState(selectedTab);
  };

  const menuId = "primary-search-account-menu";
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppNavBar
        menuId={menuId}
        state={state}
        handleDrawerToggle={handleDrawerToggle}
        handleProfileMenuOpen={handleProfileMenuOpen}
        themeToggler={themeToggler}
        themeHandler={themeHandler}
      />
      {user ? (
        <MenuForExistingAdmin
          menuId={menuId}
          anchorEl={anchorEl}
          isMenuOpen={isMenuOpen}
          handleMenuClose={handleMenuClose}
        />
      ) : (
        <MenuForNewAdmin
          menuId={menuId}
          anchorEl={anchorEl}
          isMenuOpen={isMenuOpen}
          handleMenuClose={handleMenuClose}
        />
      )}

      <HideDrawer
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        selectedMenuItem={selectedMenuItem}
      />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {state === "Dashboard" && <Home />}
        {state === "Add Songs" && <AddSongs />}
        {state === "User List" && <UserList />}
        {state === "Add Artist" && <AddArtist />}
        {state === "Song List" && <SongList />}
      </main>
    </div>
  );
};
export default Dashboard;
