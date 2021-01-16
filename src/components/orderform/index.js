import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Form } from 'react-final-form';
import Typography from '../basic/Typography';
import AppForm from '../basic/AppForm';
import FormButton from '../basic/form/FormButton';
import withRoot from '../../theme/withRoot';
import DatePickers from './DatePicker';
import RoomType from './RoomType';
import PersonSelect from './Person';
import NumOfRooms from './NumOfRooms';
import FoodChoice from './FoodChoice';
import { OrderContext } from './context/OrderContext';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { DialogTitle, DialogContent, DialogActions } from './dialog/DialogComps';
import axios from 'axios';

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

function OrderForm() {
  const classes = useStyles();
  const [sent, setSent] = useState(false);
  const [open, setOpen] = React.useState(false);
  const { orderInfo } = useContext(OrderContext);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = (orderInfo) => {
    axios.get('http://www.google.co.jp/', { orderInfo }).then(res => {
      console.log(orderInfo);
    });
    setOpen(false);
  };


  const handleSubmit = () => {
    setSent(true);
    console.log(orderInfo);
  };

  return (
    <React.Fragment>
      <AppForm>
        <Typography variant='h3' gutterBottom marked='center' align='center'>
          ホテル＆民宿
          </Typography>
        <Form onSubmit={handleSubmit} subscription={{ submitting: true }}>
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <form
              onSubmit={handleSubmit2}
              className={classes.form}
              noValidate
            >
              <DatePickers />
              <RoomType />
              <PersonSelect />
              <NumOfRooms />
              <FoodChoice />
              <FormButton
                className={classes.button}
                // disabled={submitting || sent}
                color='secondary'
                fullWidth
                onClick={handleClickOpen}
              >
                {submitting || sent ? 'In PRRCESSING' : '予約する'}
              </FormButton>
            </form>
          )}
        </Form>
      </AppForm>
      <div>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            您的订单详情
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              <h4 style={{ display: 'flex' }}>${JSON.stringify(orderInfo)}</h4>
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleSend} color="secondary">
              确定
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </React.Fragment>
  );
};

export default withRoot(OrderForm);
