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



const TextInput = ({ label, error, helperText,labelVariant = "body2", ...rest }) => {
  return (
    <InputContainer>
      {label && <TypographyInput variant={labelVariant}>{label.toUpperCase()}</TypographyInput>}
      <TextField
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
