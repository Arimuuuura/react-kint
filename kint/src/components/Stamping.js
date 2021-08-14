import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-top: 40px;
  color: #666;
`

const StampingContainer = styled.div`
  width: 50%;
  margin: 0 auto;
`

const Text = styled.p`
  font-size: 16px;
`

export const Stamping = () => {
  // ローカルストレージから値を取得
  const attendance = localStorage.getItem('出勤');
  const leaving = localStorage.getItem('退勤');
  const behind = localStorage.getItem('遅刻');
  const leaveEarly = localStorage.getItem('早退');
  const absence = localStorage.getItem('欠勤');

  return (
    <Container>
      <StampingContainer>
        <Text>出勤 : { attendance ? attendance : 'No Data..' }</Text>
        <Text>退勤 : { leaving ? leaving : 'No Data..' }</Text>
        <Text>遅刻 : { behind ? behind : 'No Data..' }</Text>
        <Text>早退 : { leaveEarly ? leaveEarly : 'No Data..' }</Text>
        <Text>欠勤 : { absence ? absence : 'No Data..' }</Text>
      </StampingContainer>
    </Container>
  )
}
