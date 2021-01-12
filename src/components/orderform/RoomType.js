import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RoomType() {
  const [value, setValue] = React.useState('JapaneseStyle');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl
      zcomponent="fieldset"
      margin='normal'
      size='medium'

    >
      <FormLabel component="legend">部屋タイプ</FormLabel>
      <RadioGroup
        aria-label="room"
        name="roomtype"
        value={value}
        onChange={handleChange}
        row
      >
        <FormControlLabel value="JapaneseStyle" control={<Radio />} label="和室" />
        <FormControlLabel value="Single" control={<Radio />} label="シングル" />
        <FormControlLabel value="other" control={<Radio />} label="和洋室" />
      </RadioGroup>
    </FormControl>
  );
}
