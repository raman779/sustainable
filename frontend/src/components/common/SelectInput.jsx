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
  
  


const SelectInput = ({value,setValue,label,labelVariant = "body2", helperText,placeholder = "enter something",...rest}) => {

    const handleChange = (event) => {
        setValue(event.target.value);
    };


    return(
        <FormControl sx={{width:'100%',paddingBlock:theme.spacing(1)}}>
        {label && <TypographyInput variant={labelVariant}>{label.toUpperCase()}</TypographyInput>}
        <Select
          variant='outlined'
          value={value}
          onChange={handleChange}
        >
          <MenuItem disabled value={0} style = {{color:"GrayText",background:'white',opacity:1}}>{placeholder}</MenuItem>
          <MenuItem style = {{color:"red",background:'white'}} value={10}>Ten</MenuItem>
          <MenuItem style = {{color:"red",background:'white'}} value={20}>Twenty</MenuItem>
          <MenuItem style = {{color:"red",background:'white'}} value={30}>Thirty</MenuItem>
        </Select>
        {helperText && <Typography textAlign={"left"} variant='subtitle2'>If you don’t see your organisation in the drop down,email us and we’ll help you get set-up.</Typography>}
      </FormControl>
    )
}

export default SelectInput;