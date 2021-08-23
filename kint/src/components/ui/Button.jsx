import React, { useState } from 'react'
import { Fab } from '@material-ui/core';
import { TimeData } from '../TimeData';
import { Stamped } from './Stamped';

export const Button = () => {
  // console.log('button');

  const [isStamp, setIsStamp] = useState(true)
  const { nowTime } = TimeData();

  const onClickTime = (e) => {
    localStorage.setItem(e.target.innerText, nowTime);
    setIsStamp(!isStamp);
  }

  return (
    <>
      <div>
        <Fab onClick={ onClickTime }>出勤</Fab>
        <Fab onClick={ onClickTime }>退勤</Fab>
        <Fab onClick={ onClickTime }>遅刻</Fab>
        <Fab onClick={ onClickTime }>早退</Fab>
        <Fab onClick={ onClickTime }>欠勤</Fab>
      </div>
      <Stamped isStamp={isStamp} />
    </>
  )
}
