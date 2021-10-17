import React, { useContext, memo } from 'react';
import { makeStyles } from '@material-ui/core'
import { TimeContext } from '../../providers/TimeDataProvider';

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

export const Clock = memo(() => {

  const classes = useStyles();

  // 必要なデータを取得
  const { Today, CurrentTime, isLoading } = useContext(TimeContext);

  return (isLoading ?
    (
      <header className={classes.container}>
        <h1>Loading...</h1>
      </header>
    ) : (
      <header className={classes.container}>
        <div className={classes.today}>
          { Today }
        </div>
        <div className={classes.currentTime}>
          { CurrentTime }
        </div>
      </header>
    )
  )
})
