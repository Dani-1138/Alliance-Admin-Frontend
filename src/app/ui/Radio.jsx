/* eslint-disable react/prop-types */
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButton({
  radioValue,
  handleRadioChange,
  setRadioValue,
}) {
  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Send to</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={radioValue}
        onChange={handleRadioChange}
      >
        <FormControlLabel value="all" control={<Radio />} label="All" />
        <FormControlLabel value="part" control={<Radio />} label="Part" />
      </RadioGroup>
    </FormControl>
  );
}
