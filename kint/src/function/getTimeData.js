import { useState, useEffect } from 'react';

export const useTimeData = () => {
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
  const today = `${dateTime.years}年${dateTime.month + 1}月${dateTime.date}日(${dayOfWeekStr[dateTime.day]})`;
  const currentTime = `${dateTime.hours}:${dateTime.minutes}:${dateTime.seconds}`;

  return {today, currentTime, isLoading}
}
