import React from 'react';
// import { Field, Form, FormSpy } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '../basic/Typography';
import AppForm from '../basic/AppForm';
import Button from '../basic/Button';

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(0),
  },

  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
}));

function OrderDetail() {
  const classes = useStyles();

  return (
    <AppForm className={classes.form} >
      <Typography variant="h2" marked="center" align="center">
        订单详情
        </Typography>
      <Button className={classes.button} color="primary">Test Button</Button>
    </AppForm>
  );
}

export default OrderDetail;
