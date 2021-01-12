import React from 'react';
import Banner from './elements/Banner';
import HotelCategories from './elements/HotelCategories';
import CssBaseline from '@material-ui/core/CssBaseline';

function Content() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Banner />
      <HotelCategories />
    </React.Fragment>
  );
}

export default Content;