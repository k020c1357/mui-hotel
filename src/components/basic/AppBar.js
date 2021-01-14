import * as React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.common.white,
  }
}));

function AppBar(props) {
  const classes = useStyles();

  return (
    <MuiAppBar
      className={classes.root}
      elevation={2}
      position="fixed"
      {...props}
    />);
}

export default AppBar;