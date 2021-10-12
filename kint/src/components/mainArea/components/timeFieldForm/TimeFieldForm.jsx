import React, { memo } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Field } from '../../../shared/components/field/Field'
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

export const TimeFieldForm = memo(() => {

  const classes = useStyles();

  const {
    startTimeText,
    finishTimeText,
    start,
    finish,
    onChangeStartTime,
    onChangeFinishTime,
  } = useTimeFieldForm();

  const Fields = [
    {
      value: startTimeText,
      event: onChangeStartTime,
      label: "Start time",
      defaultValue: start,
    },
    {
      value: finishTimeText,
      event: onChangeFinishTime,
      label: "Finish time",
      defaultValue: finish,
    }
  ]

  return (
    <form className={classes.formContainer} noValidate>
      {
        Fields.map((field, index) => (
          <Field key={index} value={field.value} onChange={field.event} label={field.label} type="time" defaultValue={field.defaultValue} />
        ))
      }
    </form>
  )
})
