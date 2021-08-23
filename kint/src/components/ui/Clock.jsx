import React from 'react';
import { makeStyles } from '@material-ui/core'
import { TimeData } from '../TimeData';

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

export const Clock = () => {

  const { today, nowTime } = TimeData()
  const classes = useStyles();

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
