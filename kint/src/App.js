import React, { useState, useEffect } from 'react';
import { Fab } from '@material-ui/core';

export const App = () => {

  const [dateTime, setDateTime] = useState('');
  const dayOfWeekStr = [ '日', '月', '火', '水', '木', '金', '土' ];

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

  return (
    <>
      <header>
        <p>
          {`${dateTime.years}年${dateTime.month + 1}月${dateTime.date}日(${dayOfWeekStr[dateTime.day]})`}
        </p>
        <p>
          {`${dateTime.hours}:${dateTime.minutes}:${dateTime.seconds}`}
        </p>
      </header>
      <div>
        <Fab>出勤</Fab>
        <Fab>退勤</Fab>
        <Fab>遅刻</Fab>
        <Fab>早退</Fab>
        <Fab>欠勤</Fab>
      </div>
    </>
  )
}
