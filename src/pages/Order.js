import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme/theme';
import Header from '../components/header/Header';
import OrderForm from '../components/orderform';
import Footer from '../components/footer/Footer';
import { OrderCtxProvider } from '../components/orderform/context/OrderContext';

function Order() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <OrderCtxProvider>
        <OrderForm />
      </OrderCtxProvider>
      <Footer />
    </ThemeProvider>
  );
}

export default Order;
