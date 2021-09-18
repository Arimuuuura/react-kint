import React from 'react';
import { ResetButton } from './components/button/ResetButton';
import { Clock } from './components/clock/Clock';
import { MainArea } from './components/MainArea';

export const App = () => {

  return (
    <>
      <Clock />
      <MainArea />
      <ResetButton />
    </>
  )
}
