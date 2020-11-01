import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  makeStyles,
  Paper,
  TextField,
} from "@material-ui/core";
import { gql, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  labelName: {
    width: "250px",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      // display: "inline-block",
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
    [theme.breakpoints.down("md")]: {
      // display: "column"
      width: "300px",
      height: "640px",
    },
  },
  textField: {
    width: "400px",
    height: "50px",
    [theme.breakpoints.down("md")]: {
      // display: "column"
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
      [e.target.name]: e.target.value,
    });
  };
  const history = useHistory();
  const [UploadSongData, { loading }] = useMutation(UploadSongData_MUTATION, {
    update(_, result) {
      if (result) {
        history.push("/");
        console.log(result);
      }
    },
    onError(err) {
      // setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    // variables:{
    //   username:values.username,
    //   email:values.email
    // }
    // OR
  });

  //   const onFormSubmit = (e) => {
  //     e.preventDefault();
  //     //   formValidation();
  //     uploadSong();
  //     console.log("form is submited");
  //   };

  const songFileHandler = (e) => {
    let file = e.target.files[0];
    setSongFile({ file });
    console.log(file);
    if (file) return;
  };

  const coverFileHandler = (e) => {
    let file = e.target.files[0];
    setcoverFile({ file });
    console.log(file);
    if (file) return;
  };

  const onSongDataSubmit = (e) => {
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
                variant="outlined"
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
                variant="outlined"
                // label="Alnbum"
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
              <Button
                variant="outlined"
                color="secondary"
                className={classes.btn}
                onClick={onSongDataSubmit}
              >
                ADD SONG
              </Button>
            </div>
          </form>
        </Paper>
      )}
    </div>
  );
};

const UploadSongData_MUTATION = gql`
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
