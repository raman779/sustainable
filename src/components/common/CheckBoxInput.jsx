import { Typography, useTheme } from '@mui/material';
import React from 'react';

const CheckBoxInput = ({ label, checked, onChange }) => {

    const theme = useTheme();


  return (
    <div style={{ display: 'flex',alignItems: 'center', justifyContent:'start',paddingTop:theme.spacing(2)}}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        style={{
          marginRight: '8px',
          width: '20px',
          height: '20px',
          backgroundColor: checked ? 'primary' : 'white',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
      <label style={{ fontSize: '16px' }}><Typography variant='body2'>{label.toUpperCase()}</Typography></label>
    </div>
  );
};

export default CheckBoxInput;
