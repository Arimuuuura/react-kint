import React, { createContext, useState, useEffect } from 'react'

export const TimeContext = createContext({});

export const TimeDataProvider = (props) => {
  const { children } = props;
  const [dateTime, setDateTime] = useState('');
  const [isLoading, setIsLoading] = useState(true);

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
      setIsLoading(false);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const dayOfWeekStr = [ '日', '月', '火', '水', '木', '金', '土' ];
  const Today = `${dateTime.years}年${dateTime.month + 1}月${dateTime.date}日(${dayOfWeekStr[dateTime.day]})`;
  const CurrentTime = `${dateTime.hours}:${dateTime.minutes}:${dateTime.seconds}`;

  return (
    <TimeContext.Provider value={{Today, CurrentTime, isLoading}}>
      { children }
    </TimeContext.Provider>
  )
}
