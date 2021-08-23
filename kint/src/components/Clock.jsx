import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    height: '200px',
    paddingTop: theme.spacing(3),
    textAlign: 'center',
    color: '#666',
  },
  today: {
    fontSize: '32px',
  },
  currentTime: {
    fontSize: '56px',
    fontWeight: 'bold',
  },
}))

export const Clock = (props) => {
  // console.log(props);
  const classes = useStyles();

  const { time } = props;

  const dayOfWeekStr = [ '日', '月', '火', '水', '木', '金', '土' ];
  const today = `${time.years}年${time.month + 1}月${time.date}日(${dayOfWeekStr[time.day]})`;
  const nowTime = `${time.hours}:${time.minutes}:${time.seconds}`

  return (
    <header className={classes.container}>
      <div className={classes.today}>
        { today }
      </div>
      <div className={classes.currentTime}>
        { nowTime }
      </div>
    </header>
  )
}
