import React, { memo } from 'react'

export const Stamped = memo((props) => {
  // console.log('stamped');

  const attendance = localStorage.getItem('出勤');
  const leaving = localStorage.getItem('退勤');
  const behind = localStorage.getItem('遅刻');
  const leaveEarly = localStorage.getItem('早退');
  const absence = localStorage.getItem('欠勤');

  return (
    <div>
      <p>{ `出勤 : ${attendance}` }</p>
      <p>{ `退勤 : ${leaving}` }</p>
      <p>{ `遅刻 : ${behind}` }</p>
      <p>{ `早退 : ${leaveEarly}` }</p>
      <p>{ `欠勤 : ${absence}` }</p>
    </div>
  )
})
