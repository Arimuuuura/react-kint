import { useState } from 'react'

export const useTimeFieldForm = () => {
  // 出退勤時間入力フォームの state
  const [startTimeText, setStartTimeText] = useState('10:00')
  const [finishTimeText, setFinishTimeText] = useState('19:00')

  const start = localStorage.getItem('StartTime') || startTimeText;
  const finish = localStorage.getItem('FinishTime') || finishTimeText;

  // 出退勤時間入力フォームに変更があった際の onChange event
  const onChangeStartTime = (e) => {
    const startTime = `${e.target.value}:00`;
    setStartTimeText(startTime);
    localStorage.setItem('StartTime', startTime);
  }
  const onChangeFinishTime = (e) => {
    const finishTime = `${e.target.value}:00`;
    setFinishTimeText(finishTime);
    localStorage.setItem('FinishTime', finishTime);
  }

  return {
    startTimeText,
    finishTimeText,
    start,
    finish,
    onChangeStartTime,
    onChangeFinishTime,
  }
}
