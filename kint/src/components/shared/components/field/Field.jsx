import React, { memo } from 'react';
import TextField from '@material-ui/core/TextField';

export const Field = memo((props) => {

  const { onChange, label, defaultValue, type } = props;

  return (
    <TextField onChange={onChange} label={label} defaultValue={defaultValue} type={type} />
  );
})
