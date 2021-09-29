import React from 'react';
import { Clock } from './components/clock/Clock';
import { MainArea } from './components/mainArea/MainArea';
import { ResetButton } from './components/resetButton/ResetButton';

export const App = () => {
  // TODO global stateで管理するリファクタ(useContext)

  return (
    <>
      <Clock />
      <MainArea />
      <ResetButton />
    </>
  );
};
