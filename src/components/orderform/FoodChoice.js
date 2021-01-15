import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
// import { OrderContext } from './context/OrderState';

export default function FoodChoice() {
  const [foodType, setFoodType] = useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setFoodType({ ...foodType, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
        <FormControlLabel
          control={
            <Switch
              checked={foodType.checkedA}
              onChange={handleChange}
              name='checkedA'
            />
          }
          label='朝食あり'
        />
      </Grid>
      <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
        <FormControlLabel
          control={
            <Switch
              checked={foodType.checkedB}
              onChange={handleChange}
              name='checkedB'
            />
          }
          label='夕食あり'
        />
      </Grid>
    </FormGroup>
  );
}
