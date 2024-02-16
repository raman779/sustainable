import React from 'react';
import { styled, TextField, Typography } from '@mui/material';
import theme from '../../styles/theme';

const InputContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '16px',
});

const TypographyInput = styled(Typography)({
  textAlign: 'left',
  marginBottom: '.6rem',
});

const InputField = styled(TextField)({
  '& .MuiInputBase-input': {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: theme.spacing(1.5),
    backgroundColor: '#ee8f8f',
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
    },
  },
  '& .MuiInputBase-input:focus': {
    backgroundColor: '#ee8f8f',
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

const TextInput = ({ label, error, helperText, ...rest }) => {
  return (
    <InputContainer>
      {label && <TypographyInput variant="body2">{label.toUpperCase()}</TypographyInput>}
      <InputField
        error={error}
        helperText={helperText}
        InputProps={{
          theme: theme,
        }}
        {...rest}
      />
    </InputContainer>
  );
};

export default TextInput;
