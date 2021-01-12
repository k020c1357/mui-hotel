import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Field, Form, FormSpy } from 'react-final-form';
import Typography from '../components/basic/Typography';
import Header from '../components/header/Header';
import AppForm from '../components/basic/AppForm';
import { email, required } from '../components/basic/form/validation';
import FormButton from '../components/basic/form/FormButton';
import FormFeedback from '../components/basic/form/FormFeedback';
import withRoot from '../theme/withRoot';
import DatePickers from '../components/orderform/DatePicker';
import RoomType from '../components/orderform/RoomType';
import PersonSelect from '../components/orderform/Person';
import NumOfRooms from '../components/orderform/NumOfRooms';
import FoodChoice from '../components/orderform/FoodChoice';
import Link from '@material-ui/core/Link';

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

  const validate = (values) => {
    const errors = required(['firstName', 'lastName', 'email', 'password'], values);

    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }

    return errors;
  };

  const handleSubmit = () => {
    setSent(true);
  };

  return (
    <React.Fragment>
      <Header />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            宿泊先
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <form onSubmit={handleSubmit2} className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  {/* <Field
                    autoFocus
                    component={RFTextField}
                    disabled={submitting || sent}
                    autoComplete="fname"
                    fullWidth
                    label="*******"
                    name="firstName"
                    required={false}
                  /> */}
                </Grid>
              </Grid>
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

              <FormButton
                className={classes.button}
                color="secondary"
                fullWidth
              >
                <Link
                  href="/detail"
                  align="center"
                  underline="always"
                >
                  予約する
              </Link>
              </FormButton>

            </form>
          )}
        </Form>
      </AppForm>

    </React.Fragment >
  );
}

export default withRoot(Order);
