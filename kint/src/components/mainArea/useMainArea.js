import { useState, useEffect, useContext } from 'react'
import { TimeContext } from '../../providers/TimeDataProvider'

export const useMainArea = () => {
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

  // 現在時刻を取得
  const { CurrentTime, isLoading } = useContext(TimeContext);

  const start = localStorage.getItem('StartTime') || '10:00';
  const finish = localStorage.getItem('FinishTime') || '19:00';

  // 出退勤時間入力フォームの state と現在時刻の差異を毎秒ごとに監視
  useEffect(() => {
    if (isLoading) return;
    if (isStart) {
      // 退勤 or 早退
      setAttendance(true);
      setBehind(true);
      setLeaving(false);
      setLeaveEarly(false);
      finish > CurrentTime && setLeaving(true);
      finish < CurrentTime && setLeaveEarly(true);
    } else {
      // 出勤 or 遅刻
      setAttendance(false);
      setBehind(false);
      start > CurrentTime && setBehind(true);
      start < CurrentTime && setAttendance(true);
    }
    if (isFinish) {
      setLeaving(true);
      setLeaveEarly(true);
    }
    // eslint-disable-next-line
  }, [CurrentTime, isStamp])

  // 打刻があった際の onClick event
  const onClickStart = (e) => {
    localStorage.setItem(e.target.innerText, CurrentTime);
    setIsStamp(!isStamp);
    setIsStart(true);
  }
  const onClickFinish = (e) => {
    localStorage.setItem(e.target.innerText, CurrentTime);
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
