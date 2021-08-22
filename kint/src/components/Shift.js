import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const Container = styled.div`
  width: 100%;
  text-align: center;
`

const FormContainer = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
`

export const Shift = ({ timeValue, setTimeValue }) => {
  const classes = useStyles();
  // console.log(timeValue);
  // console.log(setTimeValue);

  return (
    <Container>
      <FormContainer>
        <form className={classes.container} noValidate>
          <TextField
            id="time"
            label="出勤時間"
            type="time"
            // defaultValue="10:00"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            onChange={(e) => setTimeValue(e.target.value)}
          />
        </form>
        <form className={classes.container} noValidate>
          <TextField
            id="time"
            label="退勤時間"
            type="time"
            defaultValue="19:00"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
        </form>
      </FormContainer>
    </Container>
  );
}
