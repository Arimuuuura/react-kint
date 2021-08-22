import { Fab } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    Attendance: {
      backgroundColor: '#009688',
      '&:hover': {
        backgroundColor: '#80cbc4',
      }
    },
  })
);

export const Attendance = ({ onClick, disabledAttendance }) => {
  const classes = useStyles();
  return (
    <Fab className={classes.Attendance} onClick={onClick} disabled={disabledAttendance} >
      出勤
    </Fab>
  )
}
