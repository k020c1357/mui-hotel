import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import Header from '../views/Header';
import Content from '../views/Content';
import Footer from '../views/Footer';
// 平铺整个画面  ？！
import CssBaseline from '@material-ui/core/CssBaseline';

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Content />
      <Footer />
    </ThemeProvider>
  );
}

export default Home;
