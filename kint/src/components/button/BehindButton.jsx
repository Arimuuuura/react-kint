import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { FabButton } from './base/FabButton'

const useStyles = makeStyles((theme) =>
  createStyles({
    Behind: {
      backgroundColor: '#ff5722',
      '&:hover': {
        backgroundColor: '#ffab91',
      }
    }
  })
)

export const BehindButton = (props) => {
  const classes = useStyles();
  const { disabled, onClick, children } = props;
  return (
    <FabButton disabled={disabled} className={classes.Behind} onClick={ onClick }>{ children }</FabButton>
  )
}
