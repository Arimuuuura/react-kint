import React, { useState, useEffect } from 'react'
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

export const Button = (props) => {
  // console.log('button');
  console.log(props);
  const { startTimeText, finishTimeText } = props;

  const classes = useStyles();

  const [isStamp, setIsStamp] = useState(true)
  const [attendance, setAttendance] = useState(true)
  const [leaving, setLeaving] = useState(true)
  const [behind, setBehind] = useState(true)
  const [leaveEarly, setLeaveEarly] = useState(true)
  const [absence, setAbsence] = useState(true)
  const [isStart, setIsStart] = useState(false)
  const [isFinish, setIsFinish] = useState(false)

  const { nowTime } = TimeData();
  const start = startTimeText;
  const finish = finishTimeText;

  useEffect(() => {
    // 出勤前
    if (!isStart) {
      setAttendance(false);
      setBehind(false);
      setAbsence(false);
    }
    // 出勤時間を過ぎても打刻されていない時
    if (!isStart && start < nowTime) {
      setAttendance(true);
    }
    // 出勤 or 遅刻が押された時
    if (isStart) {
      setAttendance(true);
      setBehind(true);
      setAbsence(true);
      setLeaving(false);
      setLeaveEarly(false);
    }
    // 退勤時間前に打刻する場合
    if (isStart && finish > nowTime) {
      setLeaving(true);
    }
    // 退勤 or 早退が押された時
    if (isFinish) {
      setLeaving(true);
      setLeaveEarly(true);
    }
  }, [nowTime])

  const onClickStart = (e) => {
    localStorage.setItem(e.target.innerText, nowTime);
    setIsStamp(!isStamp);
    setIsStart(true);
  }

  const onClickFinish = (e) => {
    localStorage.setItem(e.target.innerText, nowTime);
    setIsStamp(!isStamp);
    setIsFinish(true);
  }

  const onClickAbsence = (e) => {
    localStorage.setItem(e.target.innerText, nowTime);
    setIsStamp(!isStamp);
    setIsStart(true);
    setIsFinish(true);
  }

  return (
    <div className={classes.container}>
      <div className={classes.buttonContainer}>
        <Fab disabled={attendance} className={classes.Attendance} onClick={ onClickStart }>出勤</Fab>
        <Fab disabled={leaving} className={classes.Leaving} onClick={ onClickFinish }>退勤</Fab>
        <Fab disabled={behind} className={classes.Behind} onClick={ onClickStart }>遅刻</Fab>
        <Fab disabled={leaveEarly} className={classes.LeaveEarly} onClick={ onClickFinish }>早退</Fab>
        <Fab disabled={absence} className={classes.Absence} onClick={ onClickAbsence }>欠勤</Fab>
      </div>
      <Stamped isStamp={isStamp} />
    </div>
  )
}
