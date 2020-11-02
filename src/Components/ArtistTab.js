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
    // {
    //     id:1,
    //     name:" Hasi Ban Gaye"
    // },
    // {
    //     id:2,
    //     name:" Hasi Ban Gaye"
    // },
    {
        id:3,
        name:" Arijit Singh"
    },
    {
        id:4,
        name:" Jubin Nautial"
    },
    {
        id:5,
        name:"Justin Bieber"
    },
    {
        id:6,
        name:"Mithoon"
    },
    {
        id:7,
        name:" Neha Kakkar"
    }
]

const ArtistTab = () => {
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

export default ArtistTab
