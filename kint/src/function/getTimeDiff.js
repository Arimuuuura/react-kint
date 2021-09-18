import { useState, useEffect } from 'react'
import { useTimeData } from './getTimeData'

export const useTimeDiff = () => {
  // 出退勤時間入力フォームの state
  const [startTimeText, setStartTimeText] = useState('10:00')
  const [finishTimeText, setFinishTimeText] = useState('19:00')

  // 各ボタンの state
  const [attendance, setAttendance] = useState(true)
  const [leaving, setLeaving] = useState(true)
  const [behind, setBehind] = useState(true)
  const [leaveEarly, setLeaveEarly] = useState(true)

  // 出退勤時間と現在時刻の差異を見るための state
  const [isStart, setIsStart] = useState(false)
  const [isFinish, setIsFinish] = useState(false)

  // 打刻された際 localStorage の表示を更新するための state
  const [isStamp, setIsStamp] = useState(true)

  const { currentTime } = useTimeData();
  const start = localStorage.getItem('StartTime') || startTimeText;
  const finish = localStorage.getItem('FinishTime') || finishTimeText;

  // 出退勤時間入力フォームの state と現在時刻の差異を毎秒ごとに監視
  useEffect(() => {
    // 出勤 or 遅刻
    if (!isStart) {
      setAttendance(false);
      setBehind(false);
      if (start > currentTime) {
        setBehind(true);
      } else if (start < currentTime) {
        setAttendance(true);
      }
    } else {
      // 退勤 or 早退
      setAttendance(true);
      setBehind(true);
      setLeaving(false);
      setLeaveEarly(false);
      if (finish > currentTime) {
        setLeaving(true);
      } else if (finish < currentTime) {
        setLeaveEarly(true);
      }
    }
    if (isFinish) {
      setLeaving(true);
      setLeaveEarly(true);
    }
    // eslint-disable-next-line
  }, [currentTime])

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

  // 打刻があった際の onClick event
  const onClickStart = (e) => {
    localStorage.setItem(e.target.innerText, currentTime);
    setIsStamp(!isStamp);
    setIsStart(true);
  }
  const onClickFinish = (e) => {
    localStorage.setItem(e.target.innerText, currentTime);
    setIsStamp(!isStamp);
    setIsFinish(true);
  }

  return {
    startTimeText,
    finishTimeText,
    start,
    finish,
    attendance,
    leaving,
    behind,
    leaveEarly,
    isStamp,
    onChangeStartTime,
    onChangeFinishTime,
    onClickStart,
    onClickFinish
  }
}
