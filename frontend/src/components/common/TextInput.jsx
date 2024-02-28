import React from 'react';
import { FormHelperText, styled, TextField, Typography } from '@mui/material';
import theme from '../../styles/theme';

const InputContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  marginBlock: theme.spacing(1),
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
        InputProps={{
          theme: theme,
        }}
        {...rest}
      />
    </InputContainer>
  );
};

export default TextInput;
