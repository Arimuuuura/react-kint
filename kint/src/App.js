import { useState, useEffect } from 'react';
import { Button } from "./components/Button"
import { Header } from "./components/Header"

const App = () => {
  const [dateTime, setDateTime] = useState('');
  const [ isLoading, setIsLoading ] = useState(true)
  const dayOfWeekStr = [ '日', '月', '火', '水', '木', '金', '土' ];

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
      <Button dateTime={dateTime} />
    </div>
  );
}

export default App;
