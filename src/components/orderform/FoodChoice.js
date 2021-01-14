import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import { OrderContext } from './context/OrderState';

export default function FoodChoice() {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row >
      <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
        <FormControlLabel
          control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
          label="朝食あり"
        />
      </Grid>
      <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
        <FormControlLabel
          control={<Switch checked={state.checkedB} onChange={handleChange} name="checkedB" />}
          label="夕食あり"
        />
      </Grid >
    </FormGroup>
  );
}
