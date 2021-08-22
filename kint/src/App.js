import { useState, useEffect } from 'react';
import { Button } from "./components/Button"
import { Header } from "./components/Header"
import { Shift } from './components/Shift';
import { Status } from './components/Status';
import { Test } from './components/Test';

const App = () => {
  const [dateTime, setDateTime] = useState('');
  const [ isLoading, setIsLoading ] = useState(true)
  const [ timeValue, setTimeValue ] = useState('');
  const dayOfWeekStr = [ '日', '月', '火', '水', '木', '金', '土' ];
  const time = (`${dateTime.years}-${dateTime.month}-${dateTime.date}T${dateTime.hours}:${dateTime.minutes}:${dateTime.seconds}`);

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();

      setDateTime({
        years: date.getFullYear(),
        month: date.getMonth(),
        date: date.getDate(),
        day: date.getDay(),
        // 数字が一桁だった場合0で埋める
        hours: date.getHours().toString().padStart(2, '0'),
        minutes: date.getMinutes().toString().padStart(2, '0'),
        seconds: date.getSeconds().toString().padStart(2, '0')
      });

      setIsLoading(false);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <Header dateTime={dateTime} isLoading={isLoading} dayOfWeekStr={dayOfWeekStr} />
      <Shift timeValue={timeValue} setTimeValue={setTimeValue} />
      <Button time={time} timeValue={timeValue} />
      <Status />
      {/* <Test time={time} timeValue={timeValue} /> */}
    </div>
  );
}

export default App;
