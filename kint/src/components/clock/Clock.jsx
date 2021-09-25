import React from 'react';
import { makeStyles } from '@material-ui/core'
import { CurrentTime, IsLoading, Today } from '../shared/util';

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

  const classes = useStyles();

  // 必要なデータを取得
  const today = Today();
  const currentTime = CurrentTime();
  const isLoading = IsLoading();

  return (isLoading ?
    (
      <header className={classes.container}>
        <h1>Loading...</h1>
      </header>
    ) : (
      <header className={classes.container}>
        <div className={classes.today}>
          { today }
        </div>
        <div className={classes.currentTime}>
          { currentTime }
        </div>
      </header>
    )
  )
}
