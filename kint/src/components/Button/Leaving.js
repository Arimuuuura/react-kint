import { Fab } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    Leaving: {
      backgroundColor: 'orange',
      '&:hover': {
        backgroundColor: '#80cbc4',
      }
    },
  })
);

export const Leaving = ({ onClick, disabledLeaving }) => {
  const classes = useStyles();
  return (
    <Fab className={classes.Leaving} onClick={onClick} disabled={disabledLeaving} >
      退勤
    </Fab>
  )
}
