import React from 'react';
// import { Field, Form, FormSpy } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';
// import Link from '@material-ui/core/Link';
import Typography from '../basic/Typography';
import AppForm from '../basic/AppForm';
import Button from '../basic/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({

  form: {
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(20),
  },

  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(10),
    displaq: 'flex',
  },
}));

function OrderDetail() {
  const classes = useStyles();

  return (

    <AppForm >
      <Typography variant="h2" marked="center" align="center">
        订单详情
        </Typography>
      <Button className={classes.button} color="primary">Test Button</Button>
      {/* <Typography variant="body1" align="center">
        {'Detail Of Your Order'}
      </Typography> */}
    </AppForm>

  );
}

export default OrderDetail;
