import React, { useState, useEffect } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { TimeData } from '../TimeData';
import { Stamped } from './Stamped';
import { Button } from '../controls/Button';

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

export const ActionButton = (props) => {
  // console.log('button');
  // console.log(props);
  const { startTimeText, finishTimeText } = props;

  const classes = useStyles();

  const [isStamp, setIsStamp] = useState(true)
  const [attendance, setAttendance] = useState(true)
  const [leaving, setLeaving] = useState(true)
  const [behind, setBehind] = useState(true)
  const [leaveEarly, setLeaveEarly] = useState(true)
  const [isStart, setIsStart] = useState(false)
  const [isFinish, setIsFinish] = useState(false)

  const { nowTime } = TimeData();
  const start = startTimeText;
  const finish = finishTimeText;

  useEffect(() => {
    // 出勤 or 遅刻
    if (!isStart) {
      setAttendance(false);
      setBehind(false);
      if (start > nowTime) {
        setBehind(true);
      } else if (start < nowTime) {
        setAttendance(true);
      }
    } else {
      // 退勤 or 早退
      setAttendance(true);
      setBehind(true);
      setLeaving(false);
      setLeaveEarly(false);
      if (finish > nowTime) {
        setLeaving(true);
      } else if (finish < nowTime) {
        setLeaveEarly(true);
      }
    }
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

  return (
    <div className={classes.container}>
      <div className={classes.buttonContainer}>
        <Button disabled={attendance} className={classes.Attendance} onClick={ onClickStart }>出勤</Button>
        <Button disabled={leaving} className={classes.Leaving} onClick={ onClickFinish }>退勤</Button>
        <Button disabled={behind} className={classes.Behind} onClick={ onClickStart }>遅刻</Button>
        <Button disabled={leaveEarly} className={classes.LeaveEarly} onClick={ onClickFinish }>早退</Button>
      </div>
      <Stamped isStamp={isStamp} />
    </div>
  )
}
