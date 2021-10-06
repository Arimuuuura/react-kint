import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { TimeTable } from './components/timeTable/TimeTable';
import { TimeFieldForm } from './components/timeFieldForm/TimeFieldForm';
import { useTimeDiff } from './useMainAria';
import { RoundButton } from '../shared/components/roundButton/RoundButton';

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

  const Buttons = [
    {
      label: '出勤',
      action: attendance,
      event: onClickStart,
      color: '#009688',
      hover: '#80cbc4',
    },
    {
      label: '退勤',
      action: leaving,
      event: onClickFinish,
      color: '#03a9f4',
      hover: '#81d4fa',
    },
    {
      label: '遅刻',
      action: behind,
      event: onClickStart,
      color: '#ff5722',
      hover: '#ffab91',
    },
    {
      label: '早退',
      action: leaveEarly,
      event: onClickFinish,
      color: '#e91e63',
      hover: '#f48fb1',
    },
  ]

  return (
    <div className={classes.container}>
      <TimeFieldForm />
      <div className={classes.buttonContainer}>
        {
          Buttons.map((button, index) => (
            <RoundButton
              key={index}
              label={button.label}
              disabled={button.action}
              onClick={button.event}
              color={button.color}
              hover={button.hover}
            />
          ))
        }
      </div>
      <TimeTable isStamp={isStamp} />
    </div>
  )
}
