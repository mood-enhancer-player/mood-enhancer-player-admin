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
} from "@material-ui/core";
import { useQuery, gql } from "@apollo/client";
import Loader from "../Common/Loader";

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
  container: {
    maxHeight: 800,
  },
  textAlign: {
    textAlign: "center",
  },
  columTitleRow: {
    background: "black",
  },
}));

const users = [
  {
    id: 1,
    username: "Harsh",
    email: "Hatr@gata.aahla",
    password: "2235555",
    createdAt: "01-11-2020",
  },
  {
    id: 2,
    username: "Harsh",
    email: "Hatr@gata.aahla",
    password: "2235555",
    createdAt: "01-11-2020",
  },
  {
    id: 3,
    username: "Harsh",
    email: "Hatr@gata.aahla",
    password: "2235555",
    createdAt: "01-11-2020",
  },
  {
    id: 4,
    username: "Harsh",
    email: "Hatr@gata.aahla",
    password: "2235555",
    createdAt: "01-11-2020",
  },
  {
    id: 5,
    username: "Harsh",
    email: "Hatr@gata.aahla",
    password: "2235555",
    createdAt: "01-11-2020",
  },
  {
    id: 6,
    username: "Harsh",
    email: "Hatr@gata.aahla",
    password: "2235555",
    createdAt: "01-11-2020",
  },
  {
    id: 7,
    username: "Harsh",
    email: "Hatr@gata.aahla",
    password: "2235555",
    createdAt: "01-11-2020",
  },
  {
    id: 8,
    username: "Harsh",
    email: "Hatr@gata.aahla",
    password: "2235555",
    createdAt: "01-11-2020",
  },
  {
    id: 9,
    username: "Harsh",
    email: "Hatr@gata.aahla",
    password: "2235555",
    createdAt: "01-11-2020",
  },
  {
    id: 10,
    username: "Harsh",
    email: "Hatr@gata.aahla",
    password: "2235555",
    createdAt: "01-11-2020",
  },
  {
    id: 11,
    username: "Harsh",
    email: "Hatr@gata.aahla",
    password: "2235555",
    createdAt: "01-11-2020",
  },
];

const UserList = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [tableIndex, setTableIndex] = useState(0);

  const columTitleRow = ["Id", "Username", "E-mail", "CreateAt"];

  const { loading, data, error } = useQuery(USERLIST_QUERY);

  const onChangePage = (e, nextPage) => {
    setPage(nextPage);
  };

  const onChangeRowsPerPage = (e) => {
    setRowsPerPage(e.target.value);
    setPage(0);
  };

  return (
    <>
      {loading || !data ? (
        // <center>
        // <CircularProgress className={classes.loader} />
        // </center>
        <Loader />
      ) : (
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table>
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
                {data.getAllUsers
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((user, index) => (
                    <TableRow key={user.id} hover>
                      <TableCell className={classes.textAlign}>
                        {index + page * 5 + 1}
                      </TableCell>
                      <TableCell className={classes.textAlign}>
                        {user.username}
                      </TableCell>
                      <TableCell className={classes.textAlign}>
                        {user.email}
                      </TableCell>
                      <TableCell className={classes.textAlign}>
                        {new Date(Number(user.createdAt)).toDateString()}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            rowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
            count={data.getAllUsers.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={onChangePage}
            onChangeRowsPerPage={onChangeRowsPerPage}
          />
        </Paper>
      )}
    </>
  );
};

const USERLIST_QUERY = gql`
  query {
    getAllUsers {
      email
      username
      createdAt
    }
  }
`;

export default UserList;
