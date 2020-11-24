import React, { useState } from "react";
import { makeStyles, TableRow, TableCell, Button } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  loader: {
    backgroundColor: "white",
    marginTop: "250px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  table: {
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
  container: {
    maxHeight: 800,
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
  textAlign: {
    textAlign: "center",
    paddingTop: "5px",
    paddingBottom: "5px",
  },
  columTitleRow: {
    background: "black",
  },
  coverImg: {
    width: "50px",
    height: "50px",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const TableRowSkeleton = () => {
  const classes = useStyles();

  return (
    <>
      <TableRow hover>
        <TableCell className={classes.textAlign}>
          <Skeleton animation="wave" />
        </TableCell>
        <TableCell>
          {/* <img src={cover} alt="img" className={classes.coverImg} /> */}
          <Skeleton
            animation="wave"
            variant="squre"
            className={classes.coverImg}
          />
        </TableCell>
        <TableCell className={classes.textAlign}>
          <Skeleton animation="wave" />
        </TableCell>
        <TableCell className={classes.textAlign}>
          <Skeleton animation="wave" />
        </TableCell>
        <TableCell className={classes.textAlign}>
          <Skeleton animation="wave" />
        </TableCell>
        <TableCell className={classes.textAlign}>
          <Skeleton animation="wave" />
        </TableCell>
      </TableRow>
    </>
  );
};

export default TableRowSkeleton;
