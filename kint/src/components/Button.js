import React from 'react';
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

export const Button = ({dateTime}) => {
  const classes = useStyles();
  const time = (`${dateTime.years}-${dateTime.month}-${dateTime.date}T${dateTime.hours}:${dateTime.minutes}:${dateTime.seconds}`);

  const setData = (e) => {
    // ローカルストレージへ値を保存
    localStorage.setItem(e, time);
    alert(`${e}が押されました`);
    // console.log(e);
  }

  return (
    <Container>
      <BtnContainer>
        <Btn className={classes.Attendance} onClick={(e) => { setData(e.target.innerText) }}>
          出勤
        </Btn>
        <Btn className={classes.Leaving} onClick={(e) => { setData(e.target.innerText) }}>
          退勤
        </Btn>
        <Btn className={classes.Behind} onClick={(e) => { setData(e.target.innerText) }}>
          遅刻
        </Btn>
        <Btn className={classes.LeaveEarly} onClick={(e) => { setData(e.target.innerText) }}>
          早退
        </Btn>
        <Btn className={classes.Absence} onClick={(e) => { setData(e.target.innerText) }}>
          欠勤
        </Btn>
      </BtnContainer>
    </Container>
  )
}
