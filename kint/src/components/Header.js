import { useState, useEffect } from 'react';
import styled from "styled-components"

const Container = styled.header`
  width: 100%;
  height: 200px;
  text-align: center;
  color: #666;
  padding-top: 24px;
`

const Today = styled.div`
  font-size: 32px;
`

const CurrentTime = styled.div`
  font-size: 56px;
  font-weight: bold;
`

const Loading = styled.div`
  font-size: 32px;
  margin-top: 80px;
`

export const Header = () => {
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

  return (isLoading ? (
    <Container>
      <Loading>Loading..</Loading>
    </Container>
  ) : (
    <Container>
      <Today>{dateTime.years}年{dateTime.month}月{dateTime.date}日({dayOfWeekStr[dateTime.day]})</Today>
      <CurrentTime>{dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}</CurrentTime>
    </Container>
  ))
}
