import React, { useState } from "react";
import {
  makeStyles,
  Table,
  TableContainer,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TablePagination,
  CircularProgress,
  Button,
  Link,
} from "@material-ui/core";
import { useQuery, gql } from "@apollo/client";
import { useHistory } from "react-router-dom";

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
  editBtn: {
    backgroundColor: "green",
    marginLeft: "15px",
    //   color:"green"
  },
  deleteBtn: {
    backgroundColor: "red",
    marginLeft: "15px",
  },
  coverImg: {
    width: "50px",
    height: "50px",
  },
}));

const SongListTableRow = ({ title, artist, album, id, cover }) => {
  const classes = useStyles();
  const history = useHistory();

  const deleteHandler = (d) => {
    console.log("Delete cliekc", d);
    let result = window.confirm("Are You Sure You Want To Delete");
    console.log("Result", result);
  };
  return (
    <>
      <TableRow hover>
        <TableCell className={classes.textAlign}>1</TableCell>
        <TableCell className={classes.textAlign}>
          <img src={cover} alt="img" className={classes.coverImg} />
        </TableCell>
        <TableCell className={classes.textAlign}>{title}</TableCell>
        <TableCell className={classes.textAlign}>{artist}</TableCell>
        <TableCell className={classes.textAlign}>{album}</TableCell>
        <TableCell className={classes.textAlign}>
          <Button
            className={classes.deleteBtn}
            onClick={() => deleteHandler(id)}
          >
            Delete
          </Button>
          {/* <Button className={classes.deleteBtn}>Delete</Button> */}
        </TableCell>
      </TableRow>
    </>
  );
};

export default SongListTableRow;
