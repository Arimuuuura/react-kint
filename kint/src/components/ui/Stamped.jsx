import React, { memo } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) =>
  createStyles({
    tableContainer: {
      maxWidth: '50%',
      marginTop: theme.spacing(5),
      marginLeft: 'auto',
      marginRight: 'auto',
      border: '1px solid #e0e0e0',
      borderRadius: '10px',
    },
    table: {
      '& thead': {
        backgroundColor: '#eee',
        '& th': {
          color: '#666',
          fontSize: '16px',
          fontWeight: 'bold',
        }
      },
    },
  })
);

export const Stamped = memo((props) => {
  // console.log('stamped');
  const classes = useStyles();

  const rows = [
    {id: '出勤', time: localStorage.getItem('出勤')},
    {id: '退勤', time: localStorage.getItem('退勤')},
    {id: '遅刻', time: localStorage.getItem('遅刻')},
    {id: '早退', time: localStorage.getItem('早退')},
    {id: '欠勤', time: localStorage.getItem('欠勤')},
  ];

  return (
    <>
      <TableContainer className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">打刻内容</TableCell>
              <TableCell align="center">時刻</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row" align="center">
                  {row.id}
                </TableCell>
                <TableCell align="center">{row.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
})
