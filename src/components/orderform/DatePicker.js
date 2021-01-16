import React, { useState, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import jaLocale from 'date-fns/locale/ja';
import { OrderContext } from './context/OrderContext';

const defaultMaterialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: '#ff9100',
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        backgroundColor: 'white',
        color: 'black',
      },
    },
    MuiPickersDay: {
      day: {
        color: 'black',
      },
      daySelected: {
        backgroundColor: '#ff9100',
      },
      dayDisabled: {
        color: 'grey',
      },
      current: {
        color: '#ff9100',
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: '#ff9100',
      },
    },
  },
});

export default function DatePickers() {
  const [selectedDateIn, setSelectedDateIn] = useState(new Date());
  const [selectedDateOut, setSelectedDateOut] = useState(new Date());

  const { orderDateIn, orderDateOut } = useContext(OrderContext);


  const handleDateChangeIn = (selectedDateIn) => {
    setSelectedDateIn(selectedDateIn);
    orderDateIn(selectedDateOut);
  };

  const handleDateChangeOut = (selectedDateOut) => {
    setSelectedDateOut(selectedDateOut);
    orderDateOut(selectedDateOut);
  };

  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={jaLocale}>
        <Grid container direction='row' justify='center' alignItems='center'>
          <KeyboardDatePicker
            animateYearScrolling={false}
            variant='inline'
            margin='normal'
            inputVariant='outlined'
            format='yyyy/MM/dd'
            allowKeyboardControl='false'
            disablePast='true'
            label='チェックイン'
            value={selectedDateIn}
            onChange={handleDateChangeIn}
            autoOk
          />
        </Grid>
        <Grid container direction='row' justify='center' alignItems='center'>
          <KeyboardDatePicker
            margin='normal'
            animateYearScrolling={false}
            variant='inline'
            inputVariant='outlined'
            disablePast='true'
            label='チェックアウト'
            format='yyyy/MM/dd'
            value={selectedDateOut}
            onChange={handleDateChangeOut}
            autoOk
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}
