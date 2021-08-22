import { Fab } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    Behind: {
      backgroundColor: '#f44336',
      '&:hover': {
        backgroundColor: '#ef9a9a',
      }
    },
  })
);

export const Behind = ({ onClick, disabledBehind }) => {
  const classes = useStyles();
  return (
    <Fab className={classes.Behind} onClick={onClick} disabled={disabledBehind} >
      遅刻
    </Fab>
  )
}
