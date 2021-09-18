import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { TimeTable } from './table/TimeTable';
import { useTimeDiff } from '../function/getTimeDiff';
import { TimeFieldForm } from './field/TimeFieldForm';
import { AttendanceButton } from './button/AttendanceButton';
import { LeavingButton } from './button/LeavingButton';
import { BehindButton } from './button/BehindButton';
import { LeaveEarlyButton } from './button/LeaveEarlyButton';

const useStyles = makeStyles((theme) =>
  createStyles({
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

export const MainArea = () => {

  const classes = useStyles();

  const {
    attendance,
    leaving,
    behind,
    leaveEarly,
    isStamp,
    onClickStart,
    onClickFinish
  } = useTimeDiff();

  return (
    <div className={classes.container}>
      <TimeFieldForm />
      <div className={classes.buttonContainer}>
        <AttendanceButton disabled={attendance} onClick={ onClickStart }>出勤</AttendanceButton>
        <LeavingButton disabled={leaving} onClick={ onClickFinish }>退勤</LeavingButton>
        <BehindButton disabled={behind} onClick={ onClickStart }>遅刻</BehindButton>
        <LeaveEarlyButton disabled={leaveEarly} onClick={ onClickFinish }>早退</LeaveEarlyButton>
      </div>
      <TimeTable isStamp={isStamp} />
    </div>
  )
}
