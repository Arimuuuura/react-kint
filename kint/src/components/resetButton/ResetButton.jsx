import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import { ResetData } from './useResetButton';

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

  const onClickReset = () => ResetData();

  return (
    <div className={classes.container}>
      <div className={classes.buttonContainer}>
        <Button
          onClick={onClickReset}
          variant="contained"
          color="secondary"
          size="large"
          className={classes.button}
          startIcon={<RotateLeftIcon />}
        >
          RESET
        </Button>
      </div>
    </div>
  );
}
