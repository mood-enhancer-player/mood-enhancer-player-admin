import React from "react";
import { makeStyles, Paper } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

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
  cardValue: {
    fontStyle: "italic",
    padding: "10px",
  },
}));

const CardSkeleton = ({ cardTitle, cardValue }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <div className={classes.cardText}>
        <Skeleton variant="text" animation="wave" />
      </div>
      <div className={classes.cardValue}>
        <Skeleton variant="text" animation="wave" />
      </div>
    </Paper>
  );
};

export default CardSkeleton;
