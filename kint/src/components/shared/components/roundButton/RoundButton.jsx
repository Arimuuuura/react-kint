import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

export const RoundButton = (props) => {
  const { label, disabled, onClick, color, hover } = props;
  const useStyles = makeStyles((theme) =>
    createStyles({
      ButtonStyle: {
        width: "70px",
        height: "70px",
        backgroundColor: () => (disabled ? "rgba(0, 0, 0, 0.12)" : color),
        color: "white",
        borderRadius: "50%",
        fontSize: "18px",
        fontWeight: "bold",
        boxShadow: () => (disabled ? "none" : "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)"),
        '&:hover': {
          backgroundColor: hover,
        },
      }
    })
  )
  const classes = useStyles();
  return (
    <Button className={classes.ButtonStyle} disabled={disabled} onClick={onClick}>{label}</Button>
  )
}
