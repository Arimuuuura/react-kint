import React from 'react';
import { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core';
import styled from "styled-components";

const useStyles = makeStyles(() =>
  createStyles({
    Attendance: {
      backgroundColor: '#009688',
      '&:hover': {
        backgroundColor: '#80cbc4',
      }
    },

    Leaving: {
      backgroundColor: 'orange',
      '&:hover': {
        backgroundColor: '#80cbc4',
      }
    },

    Behind: {
      backgroundColor: '#f44336',
      '&:hover': {
        backgroundColor: '#ef9a9a',
      }
    },

    LeaveEarly: {
      backgroundColor: 'orange',
      '&:hover': {
        backgroundColor: '#80cbc4',
      }
    },

    Absence: {
      backgroundColor: '#9c27b0',
      '&:hover': {
        backgroundColor: '#ce93d8',
      }
    }
  })
);

const Container = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 40px;
`

const BtnContainer = styled.div`
  width: 50%;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
`

const Btn = styled(Fab)`
  & span {
    color: white;
    font-size: 16px;
  }
`

export const Button = ({time, timeValue}) => {
  const classes = useStyles();
  const [disabledAttendance, setDisabledAttendance] = useState(false)
  const [disabledLeaving, setDisabledLeaving] = useState(true)
  const [disabledBehind, setDisabledBehind] = useState(false)
  const [disabledLeaveEarly, setDisabledLeaveEarly] = useState(true)
  const [disabledAbsence, setDisabledAbsence] = useState(false)

  const setData = (e) => {
    const result = time.substring(time.indexOf("T")+1, time.indexOf(":")+3);
    if (result > timeValue) {
      console.log('時間を過ぎています');
    } else {
      console.log('打刻しました');
      saveData(e);
    }
  }
  
  const saveData = (e) => {
    // ローカルストレージへ値を保存
    localStorage.setItem(e, time);
    alert(`${e}が押されました`);
    setDisabledAttendance(true);
    setDisabledLeaving(false);
    setDisabledBehind(true);
    setDisabledLeaveEarly(false);
    setDisabledAbsence(true);
  }

  return (
    <Container>
      <BtnContainer>
        <Btn disabled={disabledAttendance} className={classes.Attendance} onClick={(e) => { setData(e.target.innerText) }}>
          出勤
        </Btn>
        <Btn disabled={disabledLeaving} className={classes.Leaving} onClick={(e) => { setData(e.target.innerText) }}>
          退勤
        </Btn>
        <Btn disabled={disabledBehind} className={classes.Behind} onClick={(e) => { setData(e.target.innerText) }}>
          遅刻
        </Btn>
        <Btn disabled={disabledLeaveEarly} className={classes.LeaveEarly} onClick={(e) => { setData(e.target.innerText) }}>
          早退
        </Btn>
        <Btn disabled={disabledAbsence} className={classes.Absence} onClick={(e) => { setData(e.target.innerText) }}>
          欠勤
        </Btn>
      </BtnContainer>
    </Container>
  )
}
