import React, { useState } from "react";
import { makeStyles, TableRow, TableCell, Button } from "@material-ui/core";
import { useMutation, gql } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { MUSIC_INFO_QUERY } from "../util/graphql";

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
  console.log(id);
  const classes = useStyles();
  const [deleteSong] = useMutation(DELETE_SONG__MUTATION, {
    onError(error) {
      console.log(error);
    },

    update(proxy) {
      const myCache = proxy.readQuery({ query: MUSIC_INFO_QUERY });
      if (myCache) {
        proxy.writeQuery({
          query: MUSIC_INFO_QUERY,
          data: {
            getAllSongs: myCache.getAllSongs.filter((s) => s._id !== id),
          },
        });
      }

      // window.location.reload();
      // const { getAllSongs } = proxy.readQuery({
      //   query: MUSIC_INFO_QUERY,
      // });

      // console.log("UpdaterResult :", getAllSongs);
      // console.log("data", data);
      // getAllSongs = getAllSongs.filter((song) => {
      //   console.log(song);
      //   return song._id !== id;
      // });
      // console.log("Alter updation", getAllSongs);
      // proxy.writeQuery({
      //   query: MUSIC_INFO_QUERY,
      //   data: { getAllSongs: getAllSongs },
      // });

      // console.log(data.getAllSongs);

      //   if (result) {
      //     // history.push("/");
      //     console.log("delete mustionresult", result);
      //   }
    },
    // onError(err) {
    //   //   setErrors(err.graphQLErrors[0].extensions.exception.errors);
    // },
    // variables: { songId: songIdState },
    // variables:{
    //   username:values.username,
    //   email:values.email
    // }
    // OR
  });

  const deleteHandler = (songId) => {
    let permission = window.confirm("Are You Sure You Want To Delete");
    if (permission) {
      deleteSong({ variables: { songId: songId } });
    }
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

const DELETE_SONG__MUTATION = gql`
  mutation deleteSong($songId: ID!) {
    deleteSong(songId: $songId)
  }
`;

export default SongListTableRow;
