import React,{useState} from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import theme from '../../styles/theme';

const TypographyInput = styled(Typography)({
    textAlign: 'left',
    marginBottom: '.6rem',
  });
  
  const SelectField = styled(Select)({
    '& .MuiInputBase-input': {
      padding: '10px',
      borderRadius: theme.spacing(1.5),
      backgroundColor: '#ee8f8f',
      color: 'white',
      textAlign:'left',
      outline:'none'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
      },
    },
    '& .MuiInputBase-input:focus': {
      backgroundColor: '#ee8f8f',
      border:'none'
    },
    '& .MuiInputBase-input::placeholder': {
      color: 'white',
    },
    '& .MuiInputBase-root.Mui-error': {
      border: "none !important",
    },
    '& .MuiFormHelperText-root.Mui-error': {
      color: theme.palette.error.main,
    },
  });


const SelectInput = ({value,setValue,label,labelVariant = "body2", helperText,...rest}) => {

    const handleChange = (event) => {
        setValue(event.target.value);
    };


    return(
        <FormControl sx={{ minWidth: 120}}>
        {label && <TypographyInput variant={labelVariant}>{label.toUpperCase()}</TypographyInput>}
        <SelectField
          value={value}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem style = {{color:"red"}} value="">
            <em>Select One</em>
          </MenuItem>
          <MenuItem style = {{color:"red"}} value={10}>Ten</MenuItem>
          <MenuItem style = {{color:"red"}} value={20}>Twenty</MenuItem>
          <MenuItem style = {{color:"red"}} value={30}>Thirty</MenuItem>
        </SelectField>
        {helperText && <Typography textAlign={"left"} variant='subtitle2'>If you don’t see your organization in the drop down,email us and we’ll help you get set-up.</Typography>}
      </FormControl>
    )
}

export default SelectInput;