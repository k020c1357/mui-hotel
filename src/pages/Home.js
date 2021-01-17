import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme/theme';
import Header from '../components/header/Header';
import Content from '../components/content/Content';
import Footer from '../components/footer/Footer';

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Content />
      <Footer />
    </ThemeProvider>
  );
}

export default Home;
