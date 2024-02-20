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
      <Container component="main" style={{padding:0 ,}} maxWidth="sm">

          <Typography variant="h3" >Create new Account</Typography>
          <Typography onClick={() => setLogin(true)} style={{cursor:'pointer'}} variant="h6">
            Already Registered? Log in here.
          </Typography>

          <form style={{ width: '100%', marginTop: '20px' }}>
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

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              onClick={() => {navigate("/details")}}
              style={{ marginTop: '20px' }}
            >
              Sign Up
            </Button>
          </form>
        {/* </StyledPaper> */}
      </Container>
    </>
  );
};

export default Register;
