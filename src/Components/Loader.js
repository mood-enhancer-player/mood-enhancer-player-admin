import { CircularProgress, makeStyles } from '@material-ui/core';
import React from 'react'
const useStyles = makeStyles({
    loader: {
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:"280px"
    }

});
const Loader = () => {
    const classes = useStyles();
    return (
        <div>
            <center>
            <CircularProgress className={classes.loader} color="secondary" />
            </center>
        </div>
    )
}

export default Loader
