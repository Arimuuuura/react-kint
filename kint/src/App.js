import React from 'react';
import { Clock } from './components/clock/Clock';
import { MainArea } from './components/mainArea/MainArea';
import { ResetButton } from './components/resetButton/ResetButton';
import { TimeDataProvider } from './providers/TimeDataProvider';

export const App = () => {
  // TODO global stateで管理するリファクタ(useContext)

  return (
    <>
      <TimeDataProvider>
        <Clock />
        <MainArea />
      </TimeDataProvider>
      <ResetButton />
    </>
  );
};
