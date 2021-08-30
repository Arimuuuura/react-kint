import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { TimeField } from '../TimeField';
import { Button } from '../Button';
import { TimeTable } from './TimeTable';
import { useTimeDiff } from '../../function/getTimeDiff';

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

  const {
    startTimeText,
    finishTimeText,
    start,
    finish,
    attendance,
    leaving,
    behind,
    leaveEarly,
    isStamp,
    onChangeStartTime,
    onChangeFinishTime,
    onClickStart,
    onClickFinish
  } = useTimeDiff();

  return (
    <div className={classes.container}>
      <form className={classes.formContainer} noValidate>
        <TimeField value={ startTimeText } onChange={onChangeStartTime} label="Start time" type="time" defaultValue={start} />
        <TimeField value={ finishTimeText } onChange={onChangeFinishTime} label="Finish time" type="time" defaultValue={finish} />
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
