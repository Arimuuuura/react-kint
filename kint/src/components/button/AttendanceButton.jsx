import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { FabButton } from './base/FabButton'

const useStyles = makeStyles((theme) =>
  createStyles({
    Attendance: {
      backgroundColor: '#009688',
      '&:hover': {
        backgroundColor: '#80cbc4',
      }
    }
  })
)

export const AttendanceButton = (props) => {
  const classes = useStyles();
  const { disabled, onClick, children } = props;
  return (
    <FabButton disabled={disabled} className={classes.Attendance} onClick={ onClick }>{ children }</FabButton>
  )
}
