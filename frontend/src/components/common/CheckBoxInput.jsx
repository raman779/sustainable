// CheckBoxInput.jsx
import React from 'react';
import { Typography, useTheme } from '@mui/material';

const CheckBoxInput = ({ label, checked, onChange }) => {
    const theme = useTheme();
  console.log(label,"fdghdfhjrfj")
    const handleChange = (event) => {
        onChange(event.target.checked);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start', paddingTop: theme.spacing(1) }}>
            <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                style={{
                    marginRight: '8px',
                    width: '20px',
                    height: '20px',
                    backgroundColor: checked ? theme.palette.primary.main : 'white',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                }}
            />
            <label style={{ fontSize: '16px' }}><Typography variant='body2'>{label?.toUpperCase() || label}</Typography></label>
        </div>
    );
};

export default CheckBoxInput;
