import React from 'react';
import { RadioGroup, Checkbox, FormControlLabel, Radio } from '@mui/material';

const Question = ({ type, text, choices }) => {
  const getOptionComponent = (choice) => {
    switch (type) {
      case 'radio':
        return <FormControlLabel key={choice} value={choice} control={<Radio />} label={choice} />;
      case 'checkbox':
        return <FormControlLabel key={choice.value} value={choice.value} control={<Checkbox />} label={choice.text} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h3>{text}</h3>
      {type === 'radio' && <RadioGroup row>{choices.map(getOptionComponent)}</RadioGroup>}
      {type === 'checkbox' && choices.map(getOptionComponent)}
    </div>
  );
};

export default Question;
