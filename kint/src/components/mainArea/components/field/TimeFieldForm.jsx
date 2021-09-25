import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Field } from './Field'
import { useTimeFieldForm } from './useTimeFieldForm';

const useStyles = makeStyles((theme) =>
  createStyles({
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
    }
  })
);

export const TimeFieldForm = () => {

  const classes = useStyles();

  const {
    startTimeText,
    finishTimeText,
    start,
    finish,
    onChangeStartTime,
    onChangeFinishTime,
  } = useTimeFieldForm();

  return (
    <form className={classes.formContainer} noValidate>
      <Field value={ startTimeText } onChange={onChangeStartTime} label="Start time" type="time" defaultValue={start} />
      <Field value={ finishTimeText } onChange={onChangeFinishTime} label="Finish time" type="time" defaultValue={finish} />
    </form>
  )
}
