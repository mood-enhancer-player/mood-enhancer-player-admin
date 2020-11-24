import React, { useContext, useState } from "react";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AuthContext } from "../../context/auth";
// import { useQuery, gql } from "@apollo/client";
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
const Dashboard = (props) => {
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

  // const menuId = "primary-search-account-menu";
  // const renderMenu = (
  //   <Menu
  //     anchorEl={anchorEl}
  //     anchorOrigin={{ vertical: "top", horizontal: "right" }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{ vertical: "top", horizontal: "right" }}
  //     open={isMenuOpen}
  //     onClose={handleMenuClose}
  //   >
  //     {/* <MenuItem onClick={handleMenuClose}>
  //       <Link to="/signup" className={classes.menuItemLink}>
  //         Sign Up
  //       </Link>
  //     </MenuItem> */}
  //     <MenuItem onClick={handleMenuClose}>
  //       <Link to="/login" className={classes.menuItemLink}>
  //         Log In
  //       </Link>
  //     </MenuItem>{" "}
  //   </Menu>
  // );
  // Render menu for existing users
  // const renderMenu2 = (
  //   <Menu
  //     anchorEl={anchorEl}
  //     anchorOrigin={{ vertical: "top", horizontal: "right" }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{ vertical: "top", horizontal: "right" }}
  //     open={isMenuOpen}
  //     onClose={handleMenuClose}
  //   >
  //     <MenuItem onClick={handleMenuClose}>
  //       {/* <Link to="/signup" className={classes.menuItemLink}>
  //         My Account
  //       </Link> */}
  //     </MenuItem>
  //     <MenuItem onClick={handleMenuClose}>
  //       <Link to="/login" className={classes.menuItemLink} onClick={logout}>
  //         Logout
  //       </Link>
  //     </MenuItem>{" "}
  //   </Menu>
  // );

  // const mobileMenuId = "primary-search-account-menu-mobile";
  // const renderMobileMenu = (
  //   <Menu
  //     anchorEl={mobileMoreAnchorEl}
  //     anchorOrigin={{ vertical: "top", horizontal: "right" }}
  //     id={mobileMenuId}
  //     keepMounted
  //     transformOrigin={{ vertical: "top", horizontal: "right" }}
  //     open={isMobileMenuOpen}
  //     onClose={handleMobileMenuClose}
  //   >
  //     <MenuItem onClick={handleProfileMenuOpen}>
  //       <IconButton
  //         aria-label="account of current user"
  //         aria-controls="primary-search-account-menu"
  //         aria-haspopup="true"
  //         color="inherit"
  //       >
  //         <AccountCircle />
  //       </IconButton>
  //       <p>Profile</p>
  //     </MenuItem>
  //   </Menu>
  // );

  // State For Menu Switching
  const [state, setState] = React.useState("Dashboard");
  const selectedMenuItem = (selectedTab) => {
    setState(selectedTab);
  };

  // const itemList = [
  //   {
  //     text: "Dashboard",
  //     icon: <HomeIcon />,
  //     onClick: () => {
  //       setState("Dashboard");
  //       // history.push("/home");
  //     },
  //   },
  //   {
  //     text: "Add song",
  //     icon: <SearchIcon />,
  //     onClick: () => {
  //       setState("AddSongs");
  //       // history.push("/AddSongs");
  //     },
  //   },
  //   {
  //     text: "User List",
  //     icon: <ListOutlinedIcon />,
  //     onClick: () => {
  //       setState("UserList");
  //       // history.push("/UserList");
  //     },
  //   },
  //   {
  //     text: "AddArtist",
  //     icon: <PersonIcon />,
  //     onClick: () => {
  //       setState("AddArtist");
  //       // history.push("/AddArtist");
  //     },
  //   },
  //   {
  //     text: "Song List",
  //     icon: <QueueMusicOutlinedIcon />,
  //     onClick: () => {
  //       setState("SongList");
  //       // history.push("/SongList");
  //     },
  //   },
  // ];

  // const drawer = (
  //   <div>
  //     <Profile />
  //     <Divider />
  //     <List>
  //       {itemList.map((item, index) => {
  //         const { text, icon, onClick } = item;
  //         return (
  //           <ListItem button key={text} onClick={onClick}>
  //             {icon && <ListItemIcon>{icon}</ListItemIcon>}
  //             <ListItemText primary={text} />
  //           </ListItem>
  //         );
  //       })}
  //     </List>
  //   </div>
  // );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;
  const menuId = "primary-search-account-menu";

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppNavBar
        menuId={menuId}
        state={state}
        handleDrawerToggle={handleDrawerToggle}
        handleProfileMenuOpen={handleProfileMenuOpen}
      />
      {/* <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div>
            <h1>{state}</h1>
          </div>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar> */}
      {/* {renderMobileMenu} */}
      {/* {renderMenu} */}
      {/* {user ? renderMenu2 : renderMenu} */}

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
      {/* <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav> */}
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
