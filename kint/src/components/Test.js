import React from 'react';
import { useState } from 'react';
import { Absence } from './Button/Absence';
import { Attendance } from './Button/Attendance';
import { Behind } from './Button/Behind';
import { LeaveEarly } from './Button/LeaveEarly';
import { Leaving } from './Button/Leaving';
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 40px;
`

const StampingContainer = styled.div`
  width: 50%;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  & span {
    color: white;
    font-size: 16px;
  }
`

export const Test = ({time, timeValue}) => {
  const [disabledAttendance, setDisabledAttendance] = useState(false)
  const [disabledLeaving, setDisabledLeaving] = useState(true)
  const [disabledBehind, setDisabledBehind] = useState(false)
  const [disabledLeaveEarly, setDisabledLeaveEarly] = useState(true)
  const [disabledAbsence, setDisabledAbsence] = useState(false)

  const onClick = (e) => {
    const result = time.substring(time.indexOf("T")+1, time.indexOf(":")+3);
    if (result > timeValue) {
      console.log('時間を過ぎています');
    } else {
      console.log('打刻しました');
      saveData(e);
    }
  }

  const saveData = (e) => {
    // ローカルストレージへ値を保存
    const key = (e.target.innerText);
    localStorage.setItem(key, time);
    alert(`${key}が押されました`);
    setDisabledAttendance(true);
    setDisabledLeaving(false);
    setDisabledBehind(true);
    setDisabledLeaveEarly(false);
    setDisabledAbsence(true);
  }

  return (
    <Container>
      <StampingContainer>
        <Attendance disabled={disabledAttendance} onClick={onClick} />
        <Leaving disabled={disabledLeaving} onClick={onClick} />
        <Behind disabled={disabledBehind} onClick={onClick} />
        <LeaveEarly disabled={disabledLeaveEarly} onClick={onClick} />
        <Absence disabled={disabledAbsence} onClick={onClick} />
      </StampingContainer>
    </Container>
  )
}
