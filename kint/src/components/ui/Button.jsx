import React from 'react'
import { Fab } from '@material-ui/core';
import { TimeData } from '../TimeData';

export const Button = () => {

  const { nowTime } = TimeData();

  const onClickTime = (e) => {
    localStorage.setItem(e.target.innerText, nowTime);
    alert(nowTime);
  }

  return (
    <div>
      <Fab onClick={ onClickTime }>出勤</Fab>
      <Fab onClick={ onClickTime }>退勤</Fab>
      <Fab onClick={ onClickTime }>遅刻</Fab>
      <Fab onClick={ onClickTime }>早退</Fab>
      <Fab onClick={ onClickTime }>欠勤</Fab>
    </div>
  )
}
