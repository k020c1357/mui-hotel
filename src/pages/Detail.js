import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import OrderDetail from '../components/orderdetailform/OrderDetail';
import theme from '../theme/theme';
import CssBaseline from '@material-ui/core/CssBaseline';

function Detail() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <OrderDetail />
      <Footer />
    </ThemeProvider>
  );
}

export default Detail;
