import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function AddButton(props) {
  const classes = useStyles();

  return (
    <Fab className={classes.fab} color="primary" aria-label="add" {...props}>
      <AddIcon />
    </Fab>
  );
}

export default AddButton;
