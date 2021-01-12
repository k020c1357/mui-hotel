import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme/theme';
import Header from '../components/header/Header';
import Content from '../components/content/Content';
import Footer from '../components/footer/Footer';
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
