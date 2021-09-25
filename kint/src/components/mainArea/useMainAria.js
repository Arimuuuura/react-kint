import { useState, useEffect } from 'react'
import { useUtil } from '../shared/util'

export const useTimeDiff = () => {
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

  const { currentTime } = useUtil();
  const start = localStorage.getItem('StartTime') || '10:00';
  const finish = localStorage.getItem('FinishTime') || '19:00';

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
    attendance,
    leaving,
    behind,
    leaveEarly,
    isStamp,
    onClickStart,
    onClickFinish
  }
}
