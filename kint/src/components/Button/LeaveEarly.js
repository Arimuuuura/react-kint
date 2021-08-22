import { Fab } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    LeaveEarly: {
      backgroundColor: 'orange',
      '&:hover': {
        backgroundColor: '#80cbc4',
      }
    },
  })
);

export const LeaveEarly = ({ onClick, disabledLeaveEarly }) => {
  const classes = useStyles();
  return (
    <Fab className={classes.LeaveEarly} onClick={onClick} disabled={disabledLeaveEarly} >
      早退
    </Fab>
  )
}
