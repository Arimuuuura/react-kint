import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { FabButton } from './base/FabButton'

const useStyles = makeStyles((theme) =>
  createStyles({
    Leaving: {
      backgroundColor: '#03a9f4',
      '&:hover': {
        backgroundColor: '#81d4fa',
      }
    }
  })
)

export const LeavingButton = (props) => {
  const classes = useStyles();
  const { disabled, onClick, children } = props;
  return (
    <FabButton disabled={disabled} className={classes.Leaving} onClick={ onClick }>{ children }</FabButton>
  )
}
