import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import AppBar from '../basic/AppBar';
// import Toolbar, { styles as toolbarStyles } from '../basic/Toolbar';
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 26,
  },
  // placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
}));


function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Grid alignItems="center" xs={10} >
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              className={classes.title}
              href="/"
            >
              HOTEL
          </Link>
          </Grid>
          <Grid container xs={1} spacing={3}>
            <Link
              color="inherit"
              variant="h6"
              underline="hover"
              className={classes.rightLink}
              href="/sign-in"
            >
              ログイン
            </Link>
          </Grid>
          <Grid container xs={1} spacing={3}>
            <Link
              variant="h6"
              underline="hover"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              href="/detail"
            >
              登録
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment >
  );
}

Header.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object.isRequired,
};

export default Header;
