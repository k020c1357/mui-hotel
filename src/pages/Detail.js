import React from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import OrderDetail from '../components/orderdetailform/OrderDetail';
import AppForm from '../components/basic/AppForm';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme/theme';

function Detail() {
  // const classes = useStyles();
  // const [sent, setSent] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <AppForm>
        <OrderDetail />
      </AppForm>
      <Footer />
    </ThemeProvider>
  );
}

export default Detail;
