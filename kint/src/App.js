import React, { useState } from 'react';
import { Clock } from './components/controls/Clock';
import { ActionButton } from './components/ui/ActionButton';
import { TimeTable } from './components/controls/TimeTable';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
}));

export const App = () => {
  const classes = useStyles();

  const [startTimeText, setStartTimeText] = useState('')
  const [finishTimeText, setFinishTimeText] = useState('')

  const onChangeStartTime = (e) => setStartTimeText(`${e.target.value}:00`);
  const onChangeFinishTime = (e) => setFinishTimeText(`${e.target.value}:00`);

  return (
    <>
      <Clock />
      <form className={classes.formContainer} noValidate>
        <TimeTable value={ startTimeText } onChange={onChangeStartTime} label="Start time" type="time" defaultValue="10:00" />
        <TimeTable value={ finishTimeText } onChange={onChangeFinishTime} label="Finish time" type="time" defaultValue="19:00" />
      </form>
      <ActionButton startTimeText={ startTimeText } finishTimeText={ finishTimeText } />
    </>
  )
}
