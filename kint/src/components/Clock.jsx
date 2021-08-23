import React from 'react'

export const Clock = (props) => {
  // console.log(props);

  const { time } = props;

  const dayOfWeekStr = [ '日', '月', '火', '水', '木', '金', '土' ];
  const today = `${time.years}年${time.month + 1}月${time.date}日(${dayOfWeekStr[time.day]})`;
  const nowTime = `${time.hours}:${time.minutes}:${time.seconds}`

  return (
    <header>
      <p>
        { today }
      </p>
      <p>
        { nowTime }
      </p>
    </header>
  )
}
