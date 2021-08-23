import React from 'react';
import TextField from '@material-ui/core/TextField';

export const TimeTable = (props) => {
  // console.log(props);

  const { onChange, label, defaultValue, type } = props;

  return (
    <TextField onChange={onChange} label={label} defaultValue={defaultValue} type={type} />
  );
}
