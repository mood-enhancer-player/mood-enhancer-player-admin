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
import { USERLIST_QUERY } from "../../util/graphql";

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
    height: "270px",
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

const AddArtist = () => {
  const classes = useStyles();

  const [values, setValues] = useState({
    name: "",
  });

  const [singerProfileFile, setSingerProfileFile] = useState({});

  const onChange = (e) => {
    setValues({
      name: e.target.value
        .trim() // Conver all the field into capitalize and removing white space
        .replace(/\b\w/g, (c) => c.toUpperCase()),
    });
  };
  const history = useHistory();
  const [AddArtist, { loading }] = useMutation(ADD_ARTIST_MUTATION, {
    // update(_, result) {
    //   if (result) {
    //     history.push("/");
    //     console.log(result);
    //   }
    // },
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

  const singerProfileFileHandler = (e) => {
    let file = e.target.files[0];
    setSingerProfileFile({ file });
    console.log(file);
    if (file) return;
  };

  const onArtistDataSubmit = (e) => {
    AddArtist({
      variables: {
        name: values.name,
        singerProfileFile: singerProfileFile.file,
      },
    });
  };

  return (
    <div>
      {loading ? (
        <CircularProgress color="secondary" />
      ) : (
        <Paper className={classes.paper}>
          <h1 style={{ textAlign: "center" }}>Add New Artist</h1>
          <form>
            <div className={classes.divInput}>
              <label className={classes.labelName}>Artist Name :</label>
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
              <label className={classes.labelName}>
                Artist Profile Picture :
              </label>
              <TextField
                className={classes.textField}
                id="outlined-flexible"
                variant="outlined"
                color="secondary"
                type="file"
                name="singerProfileFile"
                size="small"
                onChange={singerProfileFileHandler}
              />
            </div>
            <div>
              <center>
                <Button
                  variant="outlined"
                  color="secondary"
                  className={classes.btn}
                  onClick={onArtistDataSubmit}
                >
                  ADD Artist
                </Button>
              </center>
            </div>
          </form>
        </Paper>
      )}
    </div>
  );
};

const ADD_ARTIST_MUTATION = gql`
  mutation AddArtist($name: String!, $singerProfileFile: Upload!) {
    addArtist(name: $name, singerProfileFile: $singerProfileFile) {
      url
    }
  }
`;

export default AddArtist;
