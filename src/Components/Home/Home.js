import React from "react";
import { Grid, makeStyles, CircularProgress } from "@material-ui/core";
import Analysis from "./Analysis";
import { useQuery, gql } from "@apollo/client";
import DashboardCard from "../Dashboard/DashBoardCard/DashboardCard";

// import hasi from "../music/hasi.mp3";
// import kabir from "../music/kabir.mp3";
// import nayanne from "../music/nayanne.mp3";
// import sanamre from "../music/sanamre.mp3";
// import hasiImag from "../images/1.png";

const useStyles = makeStyles((theme) => ({
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
    width: "340px",
    height: "97px",
    margin: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    // padding: "25px",
    textAlign: "center",
    // paddingTop: "25px",
    padding: "15px",
    fontSize: "20px",
    letterSpacing: "3px",
    // background: "#0F131A" /* fallback for old browsers */,
    // background:
    //   "-webkit-linear-gradient(to right,#0F131A,#1A1D24)" /* Chrome 10-25, Safari 5.1-6 */,
    background:
      "linear-gradient(to right,#0F131A,#1A1D24)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
    // paddingBottom:"auto"
  },
  cardText: {
    padding: "0.1rem",
    opacity: "0.9",
    fontSize: "1.5rem",
  },
  cardValueText: {
    fontStyle: "italic",
    padding: "10px",
  },
}));

function Home() {
  const classes = useStyles();

  const musicInfo = useQuery(MUSIC_INFO_QUERY);
  const userInfo = useQuery(USERLIST_QUERY);

  //For Card
  let totalUsers;
  if (userInfo.data) {
    // Total Users
    totalUsers = userInfo.data.getAllUsers.length;
  }
  let totalSongs, totalArtists;
  let artistArray = [];
  if (musicInfo.data) {
    // Total Songs
    totalSongs = musicInfo.data.getAllSongs.length;
    // Total Artists
    musicInfo.data.getAllSongs.forEach((song) => {
      if (!artistArray.includes(song.singer)) {
        artistArray.push(song.singer);
      }
    });
    totalArtists = artistArray.length;
  }

  // For chart
  let updatedAt = [],
    songName = [],
    playCount = [];
  if (musicInfo.data) {
    musicInfo.data.getAllSongs.forEach((song) => {
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

  return (
    <>
      {musicInfo.error && userInfo.error && (
        <h1>{`You Broken It ! ${
          musicInfo.error.message || userInfo.error.message
        }`}</h1>
      )}
      {!musicInfo.data ||
      musicInfo.loading ||
      !userInfo.data ||
      userInfo.loading ? (
        <CircularProgress />
      ) : (
        <>
          <div>
            <div className={classes.root}>
              <Grid container spacing={2}>
                <DashboardCard cardTitle="Total Users" cardValue={totalUsers} />
                <DashboardCard cardTitle="Total Songs" cardValue={totalSongs} />
                <DashboardCard
                  cardTitle="Total Artists"
                  cardValue={totalArtists}
                />
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

const USERLIST_QUERY = gql`
  query {
    getAllUsers {
      email
      username
      createdAt
    }
  }
`;

export default Home;
