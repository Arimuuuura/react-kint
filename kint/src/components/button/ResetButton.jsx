import React from 'react';
import { makeStyles } from '@material-ui/core';
import { BaseButton } from './base/BaseButton';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import { KEYS } from '../../constants/localStorageKey';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
  },
  buttonContainer: {
    width: '50%',
    textAlign: 'right',
    margin: '0 auto',
  },
  button: {
    marginTop: theme.spacing(3),
  },
}));

export const ResetButton = () => {

  const classes = useStyles();

  const onClickReset = () => {
    alert('localStorage の打刻データを削除しますか？');
    KEYS.map((key) => (
      localStorage.removeItem(key.id)
    ))
    window.location.reload();
  }

  return (
    <div className={classes.container}>
      <div className={classes.buttonContainer}>
        <BaseButton
          onClick={onClickReset}
          variant="contained"
          color="secondary"
          size="large"
          className={classes.button}
          startIcon={<RotateLeftIcon />}
        >
          RESET
        </BaseButton>
      </div>
    </div>
  );
}
