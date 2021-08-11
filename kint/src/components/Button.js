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

const FabContainer = styled.div`
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

export const Button = () => {
  const classes = useStyles();
  return (
    <Container>
      <FabContainer>
        <Btn className={classes.Attendance} onClick={() => { alert('出勤が押されました') }}>
          出勤
        </Btn>
        <Btn className={classes.Leaving} onClick={() => { alert('出勤が押されました') }}>
          退勤
        </Btn>
        <Btn className={classes.Behind} onClick={() => { alert('遅刻が押されました') }}>
          遅刻
        </Btn>
        <Btn className={classes.LeaveEarly} onClick={() => { alert('早退が押されました') }}>
          早退
        </Btn>
        <Btn className={classes.Absence} onClick={() => { alert('欠勤が押されました') }}>
          欠勤
        </Btn>
      </FabContainer>
    </Container>
  )
}
