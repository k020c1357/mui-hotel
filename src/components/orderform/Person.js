import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
// import { OrderContext } from './context/OrderState';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function PersonSelect() {
  const classes = useStyles();

  const [personNumber, setPersonNumber] = useState({
    adult: 0,
    children: 0,
    baby: 0,
  });

  const handleChangeAdult = (personNumber, event) => {
    setPersonNumber({
      ...personNumber,
      personNumber.adult: event.target.value,
    });
    console.log(event.target.value);
  };
  const handleChangeChildren = (event) => {
    setPersonNumber(event.target.value);
  };
  const handleChangeBaby = (event) => {
    setPersonNumber(event.target.value);
  };

  return (
    <React.Fragment>
      <FormLabel component='legend'>ご利用人数</FormLabel>
      <Grid justifyContent='space-around'>
        <FormControl variant='outlined' className={classes.formControl}>
          <InputLabel id='demo-simple-select-outlined-label'>大人</InputLabel>
          <Select
            labelId='demo-simple-select-outlined-label'
            id='demo-simple-select-outlined'
            value={personNumber.adult}
            onChange={handleChangeAdult}
            label='Persons'
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
            <MenuItem value={4}>Four</MenuItem>
            <MenuItem value={5}>Five</MenuItem>
            <MenuItem value={6}>Six</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant='outlined' className={classes.formControl}>
          <InputLabel id='demo-simple-select-outlined-label'>子ども</InputLabel>
          <Select
            labelId='demo-simple-select-outlined-label'
            id='demo-simple-select-outlined'
            value={personNumber.children}
            onChange={handleChangeChildren}
            label='Persons'
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
            <MenuItem value={4}>Four</MenuItem>
            <MenuItem value={5}>Five</MenuItem>
            <MenuItem value={6}>Six</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant='outlined' className={classes.formControl}>
          <InputLabel id='demo-simple-select-outlined-label'>乳幼児</InputLabel>
          <Select
            labelId='demo-simple-select-outlined-label'
            id='demo-simple-select-outlined'
            value={personNumber.baby}
            onChange={handleChangeBaby}
            label='Persons'
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
            <MenuItem value={4}>Four</MenuItem>
            <MenuItem value={5}>Five</MenuItem>
            <MenuItem value={6}>Six</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </React.Fragment>
  );
}
