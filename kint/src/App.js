import React from 'react';
import { Clock } from './components/controls/Clock';
import { ActionButton } from './components/ui/ActionButton';
import { ResetButton } from './components/controls/ResetButton';

export const App = () => {

  return (
    <>
      <Clock />
      <ActionButton />
      <ResetButton />
    </>
  )
}
