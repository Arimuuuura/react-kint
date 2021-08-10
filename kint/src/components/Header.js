import { useState, useEffect } from 'react';

export const Header = () => {
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
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header>
      <div>{dateTime.years}年{dateTime.month}月{dateTime.date}日({dayOfWeekStr[dateTime.day]})</div>
      <div>{dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}</div>
    </header>
  )
}