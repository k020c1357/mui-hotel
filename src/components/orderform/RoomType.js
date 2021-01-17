import React, { useState, useContext } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { OrderContext } from './context/OrderContext';

export default function RoomType() {
  const { state, orderRoomType } = useContext(OrderContext);
  const [roomType, setRoomType] = useState(state.roomType);

  const handleChange = (event) => {
    setRoomType(event.target.value);
    orderRoomType(event.target.value);
  };

  return (
    <FormControl zcomponent='fieldset' margin='normal' size='medium'>
      <FormLabel component='legend'>部屋タイプ</FormLabel>
      <RadioGroup
        aria-label='room'
        name='roomtype'
        value={roomType}
        onChange={handleChange}
        row
      >
        <FormControlLabel
          value='JapaneseStyle'
          control={<Radio />}
          label='和室'
        />
        <FormControlLabel value='Single' control={<Radio />} label='シングル' />
        <FormControlLabel value='other' control={<Radio />} label='和洋室' />
      </RadioGroup>
    </FormControl>
  );
}
