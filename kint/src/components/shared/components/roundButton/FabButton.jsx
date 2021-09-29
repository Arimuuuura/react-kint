import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core';


export const FabButton = (props) => {
  // todo ノーマルボタンをインストールしてスタイリング
  const { label, disabled, onClick, color, hover } = props;
  const useStyles = makeStyles((theme) =>
    createStyles({
      ButtonStyle: {
        backgroundColor: color,
        '&:hover': {
          backgroundColor: hover,
        }
      }
    })
  )
  const classes = useStyles();
  return (
    <Fab className={classes.ButtonStyle} disabled={disabled} onClick={onClick}>{label}</Fab>
  )
}
