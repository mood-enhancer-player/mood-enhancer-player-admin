import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const column = [
  {
    id:"user",
    label:"UserName",
    // format: (value) => value.toLocaleString('en-US'),

  },
  {
    id:"email",
    label:"Email",
    // format: (value) => value.toLocaleString('en-US'),

  },
  {
    id:"password",
    label:"Password",
    // format: (value) => value.toLocaleString('en-US'),

  },
  {
    id:"created At",
    label: "Created At",
    // format: (value) => value.toLocaleString('en-US'),
  },
];

const row = [
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

]
// function createData(name, code, population, size) {
//   const density = population / size;
//   return { name, code, population, size, density };
// }

// const rows = [
//   {'India', 'IN', 1324171354, 3287263}
//   'India', 'IN', 1324171354, 3287263,
//   'China', 'CN', 1403500365, 9596961,
//   'Italy', 'IT', 60483973, 301340,
//   'United States', 'US', 327167434, 9833520,
//   'Canada', 'CA', 37602103, 9984670,
//   'Australia', 'AU', 25475400, 7692024,
//   'Germany', 'DE', 83019200, 357578,
//   'Ireland', 'IE', 4857000, 70273,
//   'Mexico', 'MX', 126577691, 1972550,
//   'Japan', 'JP', 126317000, 377973,
//   'France', 'FR', 67022000, 640679,
//   'United Kingdom', 'GB', 67545757, 242495,
//   'Russia', 'RU', 146793744, 17098246,
//   'Nigeria', 'NG', 200962417, 923768,
//   'Brazil', 'BR', 210147125, 8515767,
// ];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 800,
  },
});

export default function SongList() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-email="sticky table">
          <TableHead>
            <TableRow>
              {
                column.map((column) => {
                  return (
                    <TableCell key={column}>
                      {column.label}
                    </TableCell>
                  )
                })
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {row.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {column.map((column) => {
                    const value = row[column.id]
                     return (
                      <TableCell key={column.id}>
                        {value}
                        {/* {column.format && typeof value === 'number' ? column.format(value) : value} */}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={row.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
