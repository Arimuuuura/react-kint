import { Fab } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    Absence: {
      backgroundColor: '#9c27b0',
      '&:hover': {
        backgroundColor: '#ce93d8',
      }
    }
  })
);

export const Absence = ({ onClick, disabledAbsence }) => {
  const classes = useStyles();
  return (
    <Fab className={classes.Absence} onClick={onClick} disabled={disabledAbsence}>
      欠勤
    </Fab>
  )
}
