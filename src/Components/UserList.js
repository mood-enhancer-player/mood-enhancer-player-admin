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
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
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
});

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

  const columTitleRow = ["Id", "Username", "E-mail", "Password", "createAt"];

  const onChangePage = (e, nextPage) => {
    setPage(nextPage);
  };

  const onChangeRowsPerPage = (e) => {
    setRowsPerPage(e.target.value);
    setPage(0);
  };
  return (
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
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => (
                <TableRow key={user.id} hover>
                  <TableCell className={classes.textAlign}>{user.id}</TableCell>
                  <TableCell className={classes.textAlign}>
                    {user.username}
                  </TableCell>
                  <TableCell className={classes.textAlign}>
                    {user.email}
                  </TableCell>
                  <TableCell className={classes.textAlign}>
                    {user.password}
                  </TableCell>
                  <TableCell className={classes.textAlign}>
                    {user.createdAt}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        rowsPerPageOptions={[5, 10, 15, 20]}
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={onChangePage}
        onChangeRowsPerPage={onChangeRowsPerPage}
      />
    </Paper>
  );
};

export default UserList;
