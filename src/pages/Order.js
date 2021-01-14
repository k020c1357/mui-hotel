import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Field, Form, FormSpy } from 'react-final-form';
import Typography from '../components/basic/Typography';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import AppForm from '../components/basic/AppForm';
import FormButton from '../components/basic/form/FormButton';
import FormFeedback from '../components/basic/form/FormFeedback';
import withRoot from '../theme/withRoot';
import DatePickers from '../components/orderform/DatePicker';
import RoomType from '../components/orderform/RoomType';
import PersonSelect from '../components/orderform/Person';
import NumOfRooms from '../components/orderform/NumOfRooms';
import FoodChoice from '../components/orderform/FoodChoice';
// import Link from '@material-ui/core/Link';

import { Link } from 'react-router-dom';


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
  const [sent, setSent] = React.useState(false);

  const handleSubmit = () => {
    setSent(true);
  };

  return (
    <React.Fragment>
      <Header />
      <AppForm>
        <Typography variant="h3" gutterBottom marked="center" align="center">
          ホテル＆民宿
        </Typography>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <form onSubmit={handleSubmit2} className={classes.form} noValidate>

              <DatePickers />
              <RoomType />
              <PersonSelect />
              <NumOfRooms />
              <FoodChoice />
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback className={classes.feedback} error>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                className={classes.button}
                disabled={submitting || sent}
                color="secondary"
                fullWidth
              >
                {submitting || sent ? 'In progress…' : '予約する'}
              </FormButton>
            </form>
          )}
        </Form>
      </AppForm>
      <Footer />
    </React.Fragment >
  );
}

export default withRoot(Order);
