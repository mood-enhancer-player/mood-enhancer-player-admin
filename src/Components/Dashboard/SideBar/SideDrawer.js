import React, { useState } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";

import {
  Person as PersonIcon,
  HomeOutlined as HomeIcon,
  SearchOutlined as SearchIcon,
  QueueMusicOutlined as QueueMusicOutlinedIcon,
  ListOutlined as ListOutlinedIcon,
} from "@material-ui/icons";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Profile from "../../Common/Profile";

const useStyles = makeStyles((theme) => ({
  privacy: {
    marginTop: "150px",
    fontSize: "13px",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      marginTop: "92px",
    },
  },
  iconColor: {
    color: theme.palette.primary.contrastText,
  },
}));

const SideDrawer = ({ selectedMenuItem }) => {
  const classes = useStyles();
  const theme = useTheme();

  const itemList = [
    {
      text: "Dashboard",
      icon: <HomeIcon />,
    },
    {
      text: "Add Songs",
      icon: <SearchIcon />,
    },
    {
      text: "User List",
      icon: <ListOutlinedIcon />,
    },
    {
      text: "Add Artist",
      icon: <PersonIcon />,
    },
    {
      text: "Song List",
      icon: <QueueMusicOutlinedIcon />,
    },
  ];

  return (
    <div>
      <Profile />
      <Divider />
      <List>
        {itemList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={() => selectedMenuItem(text)}>
              {icon && (
                <ListItemIcon className={classes.iconColor}>
                  {icon}
                </ListItemIcon>
              )}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default SideDrawer;
