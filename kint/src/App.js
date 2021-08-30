import React from 'react';
import { Clock } from './components/Clock';
import { ActionButton } from './components/controls/ActionButton';
import { ResetButton } from './components/ResetButton';

export const App = () => {

  return (
    <>
      <Clock />
      <ActionButton />
      <ResetButton />
    </>
  )
}
