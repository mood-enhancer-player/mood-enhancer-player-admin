import React from "react";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "340px",
    height: "97px",
    margin: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    fontSize: "22px",
    padding: "15px",
    fontSize: "20px",
    letterSpacing: "3px",
    background: theme.palette.primary.dark,
    "&:hover": {
      background: theme.palette.grey[50],
      // background: "#2a2b2c",
      transform: "translateY(-5px)",
      transition: "0.4s ease-out",
    },

    // background: "#0F131A" /* fallback for old browsers */,
    // background:
    //   "-webkit-linear-gradient(to right,#0F131A,#1A1D24)" /* Chrome 10-25, Safari 5.1-6 */,
    // background:
    //   "linear-gradient(to right,#0F131A,#1A1D24)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
  },
  cardTitle: {
    padding: "0.1rem",
    opacity: "0.9",
    fontSize: "1.5rem",
  },
  cardValue: {
    fontStyle: "italic",
    padding: "10px",
  },
}));

const DashboardCard = ({ cardTitle, cardValue }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <div className={classes.cardText}>
        <p>{cardTitle}</p>
      </div>
      <div className={classes.cardValue}>
        <p>{cardValue}</p>
      </div>
    </Paper>
  );
};

export default DashboardCard;
