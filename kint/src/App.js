import React, { useState, useEffect } from 'react';
import { Fab } from '@material-ui/core';
import { Stamped } from './components/Stamped';
import { Clock } from './components/Clock';

export const App = () => {

  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDateTime({
        years: date.getFullYear(),
        month: date.getMonth(),
        date: date.getDate(),
        day: date.getDay(),
        hours: date.getHours().toString().padStart(2, '0'),
        minutes: date.getMinutes().toString().padStart(2, '0'),
        seconds: date.getSeconds().toString().padStart(2, '0'),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const nowTime = `${dateTime.hours}:${dateTime.minutes}:${dateTime.seconds}`

  const onClickTime = (e) => {
    localStorage.setItem(e.target.innerText, nowTime);
  }

  return (
    <>
      <Clock time={ dateTime } />
      <div>
        <Fab onClick={ onClickTime }>出勤</Fab>
        <Fab onClick={ onClickTime }>退勤</Fab>
        <Fab onClick={ onClickTime }>遅刻</Fab>
        <Fab onClick={ onClickTime }>早退</Fab>
        <Fab onClick={ onClickTime }>欠勤</Fab>
      </div>
      <Stamped />
    </>
  )
}
