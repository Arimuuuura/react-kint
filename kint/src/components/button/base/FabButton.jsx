import React from 'react';
import { Fab } from '@material-ui/core';

export const FabButton = (props) => {
  // console.log(props);

  const { disabled, onClick, children, className } = props;

  return (
    <Fab className={className} disabled={disabled} onClick={onClick}>{children}</Fab>
  )
}
