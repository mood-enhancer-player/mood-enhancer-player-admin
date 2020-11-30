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
      transform: "translateY(-5px)",
      transition: "0.4s ease-out",
    },
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
