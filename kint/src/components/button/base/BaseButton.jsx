import React from 'react';
import { Button } from '@material-ui/core';

export const BaseButton = (props) => {

  const { onClick, variant, color, size, className, startIcon, children } = props;

  return (
    <Button
      onClick={onClick}
      variant={variant}
      color={color}
      size={size}
      className={className}
      startIcon={startIcon}
    >
      { children }
    </Button>
  );
}
