import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { Field, Form, FormSpy } from 'react-final-form';
import Typography from '../components/basic/Typography';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import AppForm from '../components/basic/AppForm';
import FormButton from '../components/basic/form/FormButton';
import withRoot from '../theme/withRoot';
import DatePickers from '../components/orderform/DatePicker';
import RoomType from '../components/orderform/RoomType';
import PersonSelect from '../components/orderform/Person';
import NumOfRooms from '../components/orderform/NumOfRooms';
import FoodChoice from '../components/orderform/FoodChoice';
import ConfirmDialog from '../components/orderform/ConfirmDialog';
import { OrderCtxProvider } from '../components/orderform/context/OrderContext';

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

function Order() {
  const classes = useStyles();
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    setSent(true);
  };

  return (
    <React.Fragment>
      <Header />
      <OrderCtxProvider>
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
                  disabled={submitting || sent}
                  color='secondary'
                  fullWidth
                >
                  {submitting || sent ? 'In PRRCESSING' : '予約する'}
                </FormButton>
              </form>
            )}
          </Form>
        </AppForm>
      </OrderCtxProvider>
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(Order);
