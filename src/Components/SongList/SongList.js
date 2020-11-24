import React, { useState } from "react";
import {
  makeStyles,
  Table,
  TableContainer,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TablePagination,
  CircularProgress,
  Button,
  Link,
} from "@material-ui/core";
import { useQuery, gql } from "@apollo/client";
import Loader from "../Common/Loader";
import SongListTableRow from "./SongListTableRow";
import TableRowSkeleton from "../Common/Skeleton/TableRowSkeleton";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.primary.main,
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
    backgroundColor: theme.palette.error.dark,
    marginLeft: "15px",
  },
  coverImg: {
    width: "50px",
    height: "50px",
  },
}));

const SongList = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [tableIndex, setTableIndex] = useState(0);

  const columTitleRow = [
    "Id",
    "Cover Image",
    "Title",
    "Artists",
    "Album Name",
    " ",
  ];

  const { loading, data, error } = useQuery(USERLIST_QUERY);
  const musicInfo = useQuery(MUSIC_INFO_QUERY);

  const onChangePage = (e, nextPage) => {
    setPage(nextPage);
  };

  const onChangeRowsPerPage = (e) => {
    setRowsPerPage(e.target.value);
    setPage(0);
  };
  if (musicInfo.data) {
    console.log("Music data", musicInfo.data.getAllSongs.length);
  }

  const songListCardSkeleton = new Array(10).fill(0);

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {columTitleRow.map((title) => (
                <TableCell
                  key={title}
                  className={`${classes.textAlign} ${classes.columTitleRow}`}
                >
                  {title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {musicInfo.error && (
              <h1>{`You Broken It ! ${musicInfo.error.message}`}</h1>
            )}

            {!musicInfo.data || musicInfo.loading
              ? songListCardSkeleton.map(() => <TableRowSkeleton />)
              : musicInfo.data.getAllSongs
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((song, index) => {
                    return (
                      <SongListTableRow
                        title={song.name}
                        artist={song.singer}
                        album={song.album}
                        id={song._id}
                        cover={song.cover}
                        key={song._id}
                        index={index + page * 5 + 1}
                      />
                    );
                  })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        rowsPerPageOptions={[5, 10, 15, 20]}
        count={musicInfo.data ? musicInfo.data.getAllSongs.length : 10}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={onChangePage}
        onChangeRowsPerPage={onChangeRowsPerPage}
      />
    </Paper>
  );
};

const MUSIC_INFO_QUERY = gql`
  query {
    getAllSongs {
      _id
      name
      description
      singer
      playCount
      cover
      album
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

export default SongList;
