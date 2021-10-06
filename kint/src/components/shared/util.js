// import { useState, useEffect } from 'react'

// const useUtil = () => {
//   const [dateTime, setDateTime] = useState('');
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const date = new Date();
//       setDateTime({
//         years: date.getFullYear(),
//         month: date.getMonth(),
//         date: date.getDate(),
//         day: date.getDay(),
//         hours: date.getHours().toString().padStart(2, '0'),
//         minutes: date.getMinutes().toString().padStart(2, '0'),
//         seconds: date.getSeconds().toString().padStart(2, '0'),
//       });
//       setIsLoading(false);
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   return {dateTime, isLoading}
// }

// export const Today = () => {
//   const { dateTime } = useUtil();
//   const dayOfWeekStr = [ '日', '月', '火', '水', '木', '金', '土' ];
//   return `${dateTime.years}年${dateTime.month + 1}月${dateTime.date}日(${dayOfWeekStr[dateTime.day]})`;
// };

// export const CurrentTime = () => {
//   const { dateTime } = useUtil();
//   return `${dateTime.hours}:${dateTime.minutes}:${dateTime.seconds}`;
// };

// export const IsLoading = () => {
//   const { isLoading } = useUtil();
//   return isLoading;
// };
