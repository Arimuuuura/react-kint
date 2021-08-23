import React, { useState } from 'react'
import { Fab } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { TimeData } from '../TimeData';
import { Stamped } from './Stamped';

const useStyles = makeStyles((theme) =>
  createStyles({
    Attendance: {
      backgroundColor: '#009688',
      '&:hover': {
        backgroundColor: '#80cbc4',
      }
    },
    Leaving: {
      backgroundColor: '#03a9f4',
      '&:hover': {
        backgroundColor: '#81d4fa',
      }
    },
    Behind: {
      backgroundColor: '#ff5722',
      '&:hover': {
        backgroundColor: '#ffab91',
      }
    },
    LeaveEarly: {
      backgroundColor: '#e91e63',
      '&:hover': {
        backgroundColor: '#f48fb1',
      }
    },
    Absence: {
      backgroundColor: '#9c27b0',
      '&:hover': {
        backgroundColor: '#ce93d8',
      }
    },
    container: {
      width: '100%',
      textAlign: 'center',
    },
    buttonContainer: {
      width: '50%',
      textAlign: 'center',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      margin: '0 auto',
      '& .MuiFab-root': {
        width: '70px',
        height: '70px',
        '& .MuiFab-label': {
          color: 'white',
          fontSize: '18px',
          fontWeight: 'bold',
        }
      }
    }
  })
);

export const Button = () => {
  // console.log('button');

  const classes = useStyles();

  const [isStamp, setIsStamp] = useState(true)
  const { nowTime } = TimeData();

  const onClickTime = (e) => {
    localStorage.setItem(e.target.innerText, nowTime);
    setIsStamp(!isStamp);
  }

  return (
    <div className={classes.container}>
      <div className={classes.buttonContainer}>
        <Fab className={classes.Attendance} onClick={ onClickTime }>出勤</Fab>
        <Fab className={classes.Leaving} onClick={ onClickTime }>退勤</Fab>
        <Fab className={classes.Behind} onClick={ onClickTime }>遅刻</Fab>
        <Fab className={classes.LeaveEarly} onClick={ onClickTime }>早退</Fab>
        <Fab className={classes.Absence} onClick={ onClickTime }>欠勤</Fab>
      </div>
      <Stamped isStamp={isStamp} />
    </div>
  )
}
