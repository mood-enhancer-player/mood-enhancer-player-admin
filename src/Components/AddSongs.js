import React from "react";
import { Button, Grid, makeStyles, Paper, TextField, Typography } from "@material-ui/core";

const Browse = () => {

  const useStyles = makeStyles((theme) => ({
    labelname : {
      width: "250px",
      margin:"auto",
      [theme.breakpoints.down("md")]: {
        // display: "inline-block",
        width: "100px"
      }
      

    },
    btn: {
      margin:"auto"
    },
    div_input: {
      display:"flex",
      margin: "15px",
      [theme.breakpoints.down("md")]: {
        display: "block",
      }
    },
    paper: {
      padding: "15px",
      width: "500px",
      height: "450px",
      marginRight:"auto",
      marginLeft:"auto",
      [theme.breakpoints.down("md")]: {
        // display: "column"
        width: "300px",
        height: "600px"
      }
    },
    textfeild: {
      width: "400px",
      height: "50px",
      [theme.breakpoints.down("md")]: {
        // display: "column"
        width: "250px"
      }
    }
  }));

  const classes = useStyles();

  return (
    <div>
      
      <Paper className={classes.paper}>
      <h1 style={{textAlign: "center"}}>Add New Song</h1>
        <form>
          <div className={classes.div_input}>
            <label className={classes.labelname}>
              Image of Song:
                  </label>

            <TextField 
              className={classes.textfeild}
              id="outlined-flexible"
              variant="outlined"
              color="secondary"
              type="file"
              name="username"
              size="small"
            />
          </div>
          <div className={classes.div_input}>
            <label className={classes.labelname}>
              Title:
                  </label>
            <TextField
            className={classes.textfeild}
              id="outlined-flexible"
              variant="outlined"
              color="secondary"
              type="text"
              name="username"
              size="small"
            />
          </div>
          <div className={classes.div_input}>
            <label className={classes.labelname}>
              Artist:
                  </label>
            <TextField
            className={classes.textfeild}
              id="outlined-flexible"
              variant="outlined"
              color="secondary"
              type="text"
              variant="outlined"
              // label="Alnbum"
              name="username"
              size="small"
            />
            </div>
            <div className={classes.div_input}>
              <label className={classes.labelname}>
                Album/Movie
                  </label>
              <TextField
              className={classes.textfeild}
                id="outlined-flexible"
                variant="outlined"
                color="secondary"
                type="text"
                name="username"
                size="small"
              />
            </div>
            <div className={classes.div_input}>

              <label className={classes.labelname}>
                Song file:
                  </label>
              <TextField
              className={classes.textfeild}
                id="outlined-flexible"
                variant="outlined"
                color="secondary"
                type="file"
                name="username"
                size="small"
              />
            </div>

            <div>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.btn}
          >
            ADD SONG
          </Button>
        </div>
        
        </form>
        
      </Paper>
    </div>
  );
};

export default Browse;
