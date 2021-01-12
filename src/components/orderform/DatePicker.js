import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import jaLocale from "date-fns/locale/ja";

const defaultMaterialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: '#ff9100',
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        // backgroundColor: "white",
        color: "black",
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

  const [selectedDate, setSelectedDate] = React.useState(new Date('2021-01-16'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={jaLocale}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            // disableToolbar
            animateYearScrolling={false}
            variant="inline"
            format="yyyy/MM/dd"
            allowKeyboardControl="false"
            disablePast='true'
            margin="normal"
            // id="date-picker-dialog"
            label="チェックイン"
            value={selectedDate}
            onChange={handleDateChange}
            okLabel="決定"
            cancelLabel="キャンセル"
          />
          <KeyboardDatePicker
            margin="normal"
            variant="inline"
            disablePast='true'
            label="チェックアウト"
            format="yyyy/MM/dd"
            value={selectedDate}
            onChange={handleDateChange}
            okLabel="決定"
            cancelLabel="キャンセル"
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}
