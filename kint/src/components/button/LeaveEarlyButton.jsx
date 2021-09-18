import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { FabButton } from './base/FabButton'

const useStyles = makeStyles((theme) =>
  createStyles({
    LeaveEarly: {
      backgroundColor: '#e91e63',
      '&:hover': {
        backgroundColor: '#f48fb1',
      }
    }
  })
)

export const LeaveEarlyButton = (props) => {
  const classes = useStyles();
  const { disabled, onClick, children } = props;
  return (
    <FabButton disabled={disabled} className={classes.LeaveEarly} onClick={ onClick }>{ children }</FabButton>
  )
}
