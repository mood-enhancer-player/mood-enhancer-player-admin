import React, { useContext, useState } from "react";
import { MenuItem, Menu } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/auth";

const useStyles = makeStyles(() => ({
  menuItemLink: {
    color: "white",
    textDecoration: "none",
  },
}));

const MenuForExistingAdmin = ({
  menuId,
  anchorEl,
  isMenuOpen,
  handleMenuClose,
}) => {
  // Render menu for existing admin
  const classes = useStyles();

  const { user, logout } = useContext(AuthContext);

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        {/* <Link to="/signup" className={classes.menuItemLink}>
          My Account
        </Link> */}
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/login" className={classes.menuItemLink} onClick={logout}>
          Logout
        </Link>
      </MenuItem>{" "}
    </Menu>
  );
};

export default MenuForExistingAdmin;
