import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography, Grid, Box } from '@mui/material';
import TextInput from '../../common/TextInput';
import { styled } from '@mui/system';
import theme from '../../../styles/theme';
import { Navigate, useNavigate } from 'react-router-dom';
import FormWrapper from '../../common/StyledFormWrapper';



// const StyledPaper = styled("div")(({ theme }) => ({
//     padding: theme.spacing(2),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '80vh',

//   }));

const Register = ({setLogin}) => {

  const navigate = useNavigate()



  return (
    <>
      <CssBaseline />
      <FormWrapper
        subHeadingText={{text:"Already Registered? Log in here",onClick :() => {setLogin(prev => !prev)}}}
        buttonInputs={[{text:"sign up",onClick:() => {navigate("/details")}}]}
        headingText='Create new Account'
      >
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextInput label="Name" labelVariant='body1' />
              </Grid>
              <Grid item xs={12}>
                <TextInput label="Email" labelVariant='body1' />
              </Grid>
              <Grid item xs={12}>
                <TextInput label="Password" type="password" labelVariant='body1'/>
              </Grid>
            </Grid>
      </FormWrapper>
    </>
  );
};

export default Register;
