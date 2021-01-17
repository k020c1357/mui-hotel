import React from 'react';
import withRoot from '../theme/withRoot';
import { Field, Form, FormSpy } from 'react-final-form';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme/theme';
import Link from '@material-ui/core/Link';
import Typography from '../components/basic/Typography';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import AppForm from '../components/basic/AppForm';
import { email, required } from '../components/basic/form/validation';
import RFTextField from '../components/basic/form/RFTextField';
import FormButton from '../components/basic/form/FormButton';
import FormFeedback from '../components/basic/form/FormFeedback';

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

function Login() {
  const classes = useStyles();
  const [sent, setSent] = React.useState(false);

  const validate = (values) => {
    const errors = required(['email', 'password'], values);

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
    <ThemeProvider theme={theme}>
      <Header />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Login
        </Typography>
          <Typography variant="body2" align="center">
            {'Not a member yet? '}
            <Link
              href="/signup"
              align="center"
              underline="always"
            >
              HERE
            </Link>
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <form onSubmit={handleSubmit2} className={classes.form} noValidate>
              <Field
                autoComplete="email"
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
                size="large"
              />
              <Field
                fullWidth
                size="large"
                component={RFTextField}
                disabled={submitting || sent}
                required
                name="password"
                autoComplete="current-password"
                label="Password"
                type="password"
                margin="normal"
              />
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
                size="large"
                color="secondary"
                fullWidth
              >
                {submitting || sent ? 'In progress…' : 'Login'}
              </FormButton>
            </form>
          )}
        </Form>
        <Typography align="center">
          <Link underline="hover" href="/">
            Forgot password?
          </Link>
        </Typography>
      </AppForm>
      <Footer />
    </ThemeProvider>
  );
}

export default withRoot(Login);
