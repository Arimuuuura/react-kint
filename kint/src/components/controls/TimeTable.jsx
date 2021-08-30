import React, { memo } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { KEYS } from '../../_constants/localStorageKey';

const useStyles = makeStyles((theme) =>
  createStyles({
    tableContainer: {
      maxWidth: '50%',
      marginTop: theme.spacing(5),
      marginLeft: 'auto',
      marginRight: 'auto',
      border: '1px solid #b0bec5',
      borderRadius: '10px',
    },
    table: {
      '& thead': {
        backgroundColor: '#b0bec5',
        '& th': {
          color: '#666',
          fontSize: '16px',
          fontWeight: 'bold',
        }
      },
    },
  })
);

export const TimeTable = memo((props) => {
  // console.log('stamped');
  // console.log(props);
  const classes = useStyles();

  return (
    <TableContainer className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">打刻内容</TableCell>
            <TableCell align="center">時刻</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            KEYS.map((key) => (
              key.showFlag &&
              <TableRow key={key.id}>
                <TableCell component="th" scope="row" align="center">
                  {key.id}
                </TableCell>
                <TableCell align="center">{localStorage.getItem(key.id)}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
})
