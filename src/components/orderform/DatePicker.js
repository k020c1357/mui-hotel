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
  const { state, orderDateIn, orderDateOut } = useContext(OrderContext);
  const [dateIn, setDateIn] = useState(state.selectedDateIn);
  const [dateOut, setDateOut] = useState(state.selectedDateOut);

  const handleDateChangeIn = (dateIn) => {
    orderDateIn(dateIn);
    setDateIn(dateIn);
  };

  const handleDateChangeOut = (dateOut) => {
    orderDateOut(dateOut);
    setDateOut(dateOut);
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
            value={dateIn}
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
            value={dateOut}
            onChange={handleDateChangeOut}
            autoOk
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}
