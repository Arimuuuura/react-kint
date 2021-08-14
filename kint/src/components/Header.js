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

export const Header = ({ dateTime, isLoading, dayOfWeekStr }) => {
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
