import React, { useState } from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Paper,
  CircularProgress,
} from "@material-ui/core";
import MusicCard from "./MusicCard";
import Analysis from "./Analysis";
import { useQuery, gql } from "@apollo/client";

// import hasi from "../music/hasi.mp3";
// import kabir from "../music/kabir.mp3";
// import nayanne from "../music/nayanne.mp3";
// import sanamre from "../music/sanamre.mp3";
// import hasiImag from "../images/1.png";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  heading: {
    marginBottom: "10px",
    align: "left",
    fontStyle: "bold",
  },
  card: {
    width: "150px",
    height: "190px",
  },
  media: {
    width: "120px",
    height: "120px",
  },
  paper: {
    width: "300px",
    height: "80px",
    margin: "20px",
    textAlign: "center",
    paddingTop: "25px",
    fontSize: "20px",
    // paddingBottom:"auto"
  },
});
// Static Data

function Home() {
  const classes = useStyles();

  const { loading, data, error } = useQuery(MUSIC_INFO_QUERY);

  let updatedAt = [],
    songName = [],
    playCount = [];
  if (data) {
    console.log(data.getAllSongs);
    data.getAllSongs.forEach((song) => {
      const splitedDate = new Date(Number(song.updatedAt))
        .toLocaleDateString()
        .split("/");
      const date = splitedDate[1];
      const month = splitedDate[0];
      const year = splitedDate[2];
      const finaldate = `${date}/${month}/${year}`;
      updatedAt.push(finaldate);
      songName.push(song.name);
      playCount.push(song.playCount);
    });
  }
  console.log(updatedAt);
  console.log(songName);
  console.log(playCount);
  return (
    <>
      {error && <h1>{`You Broken It ! ${error.message}`}</h1>}
      {!data || loading ? (
        <CircularProgress />
      ) : (
        <>
          <div>
            <div className={classes.root}>
              <Grid container spacing={2}>
                {["Total Users", "Total Songs", "Total Artists"].map((text) => {
                  return (
                    <Paper className={classes.paper} key={text}>
                      {text}
                    </Paper>
                  );
                })}
              </Grid>
            </div>
          </div>
          <Analysis playCount={playCount} songName={songName} />
        </>
      )}
    </>
  );
}

const MUSIC_INFO_QUERY = gql`
  query {
    getAllSongs {
      _id
      name
      description
      singer
      playCount
      cover
      musicSrc
      createdAt
      updatedAt
    }
  }
`;

export default Home;
