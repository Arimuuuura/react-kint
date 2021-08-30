import React, { useState, useEffect } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useTimeData } from '../../function/getTimeData';
import { TimeField } from '../TimeField';
import { Button } from '../Button';
import { TimeTable } from './TimeTable';

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
    },
    formContainer: {
      width: '50%',
      display: 'flex',
      flexWrap: 'wrap',
      margin: '0 auto',
      justifyContent: 'space-around',
      marginBottom: theme.spacing(5),
      '& .MuiTextField-root': {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '200px',
      }
    },
  })
);

export const ActionButton = () => {
  // console.log('button');
  // console.log(props);

  const classes = useStyles();

  // 出退勤時間入力フォームの state
  const [startTimeText, setStartTimeText] = useState('10:00')
  const [finishTimeText, setFinishTimeText] = useState('19:00')

  // 各ボタンの state
  const [attendance, setAttendance] = useState(true)
  const [leaving, setLeaving] = useState(true)
  const [behind, setBehind] = useState(true)
  const [leaveEarly, setLeaveEarly] = useState(true)

  // 出退勤時間と現在時刻の差異を見るための state
  const [isStart, setIsStart] = useState(false)
  const [isFinish, setIsFinish] = useState(false)

  // 打刻された際 localStorage の表示を更新するための state
  const [isStamp, setIsStamp] = useState(true)

  const { nowTime } = useTimeData();
  const start = startTimeText;
  const finish = finishTimeText;

  // 出退勤時間入力フォームの state と現在時刻の差異を毎秒ごとに監視
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

  // 出退勤時間入力フォームに変更があった際の onChange event
  const onChangeStartTime = (e) => {
    const startTime = `${e.target.value}:00`;
    setStartTimeText(startTime);
    localStorage.setItem('StartTime', startTime);
  }
  const onChangeFinishTime = (e) => {
    const finishTime = `${e.target.value}:00`;
    setFinishTimeText(finishTime);
    localStorage.setItem('FinishTime', finishTime);
  }

  // 打刻があった際の onClick event
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
      <form className={classes.formContainer} noValidate>
        <TimeField value={ startTimeText } onChange={onChangeStartTime} label="Start time" type="time" defaultValue={localStorage.getItem('StartTime') || startTimeText} />
        <TimeField value={ finishTimeText } onChange={onChangeFinishTime} label="Finish time" type="time" defaultValue={localStorage.getItem('FinishTime') || finishTimeText} />
      </form>
      <div className={classes.buttonContainer}>
        <Button disabled={attendance} className={classes.Attendance} onClick={ onClickStart }>出勤</Button>
        <Button disabled={leaving} className={classes.Leaving} onClick={ onClickFinish }>退勤</Button>
        <Button disabled={behind} className={classes.Behind} onClick={ onClickStart }>遅刻</Button>
        <Button disabled={leaveEarly} className={classes.LeaveEarly} onClick={ onClickFinish }>早退</Button>
      </div>
      <TimeTable isStamp={isStamp} />
    </div>
  )
}
