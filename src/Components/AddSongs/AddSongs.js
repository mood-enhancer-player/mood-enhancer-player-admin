import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  makeStyles,
  Paper,
  TextField,
} from "@material-ui/core";
import { from, gql, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { MUSIC_INFO_QUERY, USERLIST_QUERY } from "../../util/graphql";

const useStyles = makeStyles((theme) => ({
  labelName: {
    width: "250px",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      width: "100px",
    },
  },
  btn: {
    margin: "auto",
  },
  divInput: {
    display: "flex",
    margin: "15px",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  paper: {
    padding: "15px",
    width: "500px",
    height: "530px",
    marginRight: "auto",
    marginLeft: "auto",
    background: theme.palette.primary.dark,
    [theme.breakpoints.down("md")]: {
      width: "300px",
      height: "640px",
    },
  },
  textField: {
    width: "400px",
    height: "50px",
    [theme.breakpoints.down("md")]: {
      width: "250px",
    },
  },
}));

const AddSongs = () => {
  const classes = useStyles();

  const [values, setValues] = useState({
    name: "",
    description: "",
    singer: "",
    album: "",
  });

  const [songFile, setSongFile] = useState({});
  const [coverFile, setcoverFile] = useState({});

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
        .trim() // Conver all the field into capitalize and removing white space
        .replace(/\b\w/g, (c) => c.toUpperCase()),
    });
  };
  const history = useHistory();
  const [UploadSongData, { loading }] = useMutation(UPLOAD_SONG_DATA_MUTATION, {
    refetchQueries: [
      {
        query: MUSIC_INFO_QUERY,
      },
    ],
    // update(proxy, payload) {
    //   console.log("payload", payload);
    //   const myCache = proxy.readQuery({ query: MUSIC_INFO_QUERY });
    //   console.log(MUSIC_INFO_QUERY);
    //   if (myCache) {
    //     console.log(myCache);
    //     proxy.writeQuery({
    //       query: MUSIC_INFO_QUERY,
    //       data: {
    //         getAllSongs: myCache.getAllSongs,
    //       },
    //     });
    //   }
    // },
    // onError(err) {
    //   // setErrors(err.graphQLErrors[0].extensions.exception.errors);
    // },
  });

  const songFileHandler = (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    setSongFile({ file });
    console.log(file);
    if (file) return;
  };

  const coverFileHandler = (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    setcoverFile({ file });
    console.log(file);
    if (file) return;
  };

  const onSongDataSubmit = (e) => {
    e.preventDefault();
    UploadSongData({
      variables: {
        songFile: songFile.file,
        coverFile: coverFile.file,
        name: values.name,
        description: values.description,
        singer: values.singer,
        album: values.album,
      },
    });
  };

  return (
    <div>
      {loading ? (
        <CircularProgress color="secondary" />
      ) : (
        <Paper className={classes.paper}>
          <h1 style={{ textAlign: "center" }}>Add New Song</h1>
          <form>
            <div className={classes.divInput}>
              <label className={classes.labelName}>Image of Song:</label>
              <TextField
                className={classes.textField}
                id="outlined-flexible"
                variant="outlined"
                color="secondary"
                type="file"
                name="username"
                size="small"
                onChange={coverFileHandler}
              />
            </div>
            <div className={classes.divInput}>
              <label className={classes.labelName}>Title:</label>
              <TextField
                className={classes.textField}
                id="outlined-flexible"
                variant="outlined"
                color="secondary"
                type="text"
                name="name"
                onChange={onChange}
                size="small"
              />
            </div>
            <div className={classes.divInput}>
              <label className={classes.labelName}>Description:</label>
              <TextField
                className={classes.textField}
                id="outlined-flexible"
                variant="outlined"
                color="secondary"
                type="text"
                // label="Alnbum"
                name="description"
                onChange={onChange}
                size="small"
              />
            </div>
            <div className={classes.divInput}>
              <label className={classes.labelName}>Artist:</label>
              <TextField
                className={classes.textField}
                id="outlined-flexible"
                variant="outlined"
                color="secondary"
                type="text"
                name="singer"
                onChange={onChange}
                size="small"
              />
            </div>
            <div className={classes.divInput}>
              <label className={classes.labelName}>Album/Movie</label>
              <TextField
                className={classes.textField}
                id="outlined-flexible"
                variant="outlined"
                color="secondary"
                type="text"
                name="album"
                onChange={onChange}
                size="small"
              />
            </div>
            <div className={classes.divInput}>
              <label className={classes.labelName}>Song file:</label>
              <TextField
                className={classes.textField}
                id="outlined-flexible"
                variant="outlined"
                color="secondary"
                type="file"
                name="songFile"
                size="small"
                onChange={songFileHandler}
              />
            </div>
            <div>
              <center>
                <Button
                  variant="outlined"
                  color="secondary"
                  className={classes.btn}
                  onClick={onSongDataSubmit}
                >
                  ADD SONG
                </Button>
              </center>
            </div>
          </form>
        </Paper>
      )}
    </div>
  );
};

const UPLOAD_SONG_DATA_MUTATION = gql`
  mutation uploadSong(
    $songFile: Upload!
    $coverFile: Upload!
    $name: String!
    $description: String!
    $singer: String!
    $album: String!
  ) {
    uploadSong(
      songFile: $songFile
      coverFile: $coverFile
      name: $name
      description: $description
      singer: $singer
      album: $album
    ) {
      url
    }
  }
`;

export default AddSongs;
