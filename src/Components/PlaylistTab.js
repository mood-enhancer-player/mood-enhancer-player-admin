import { CardContent, CardMedia, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react';
import TabCard from "./TabCard";
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "black",
        display:"flex",
        padding:"10px"
    },
    paper: {
        width: "200px",
        height: "200px",
        margin: "20px"
    }
}));

const data = [
    {
        id:1,
        name:" Hasi Ban Gaye"
    },
    {
        id:2,
        name:" Hasi Ban Gaye"
    },
    {
        id:3,
        name:" Hasi Ban Gaye"
    },
    {
        id:4,
        name:" Hasi Ban Gaye"
    },
    {
        id:5,
        name:" Hasi Ban Gaye"
    },
    {
        id:6,
        name:" Hasi Ban Gaye"
    },
    {
        id:7,
        name:" Hasi Ban Gaye"
    }
]

const PlaylistTab = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
            {
                data.map((text) => {
                    return(
                        <TabCard musicData={text} key={text.id} />
                    )
                })
            }
            </Grid>

        </div>
    )
}

export default PlaylistTab
