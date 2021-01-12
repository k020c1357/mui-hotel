import React from 'react';
// import { Field, Form, FormSpy } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';
// import Link from '@material-ui/core/Link';
import Typography from '../basic/Typography';
import AppForm from '../basic/AppForm';
import Button from '../basic/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../../theme/theme';

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
}));

function OrderDetail() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <AppForm>
        <CssBaseline />
        <Typography variant="h3" marked="center" align="center">
          订单详情
        </Typography>

        <Button className={classes.button} color="secondary">Test Button</Button>

        <Typography variant="body2" align="center">
          {'Detail Of Your Order'}
        </Typography>
      </AppForm>
    </ThemeProvider>
  );
}

export default OrderDetail;
