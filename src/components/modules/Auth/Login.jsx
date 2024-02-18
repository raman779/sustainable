import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {Grid } from '@mui/material';
import TextInput from '../../common/TextInput';
import FormWrapper from '../../common/StyledFormWrapper';
import CheckBoxInput from '../../common/CheckBoxInput';
import CommonContainer from '../../common/CommonContainer';
import { useNavigate } from 'react-router-dom';






const Login = ({ setLogin }) => {

  const navigate = useNavigate()



  return (
    <>
      <CssBaseline />
      <CommonContainer>
      <FormWrapper
        subHeadingText={{text:"New ? Create an Account",onClick :() => {setLogin(prev => !prev)}}}
        buttonInputs={[{text:"sign in",onClick:() => {navigate("/group")}}]}
        headingText='Log In'
      >
          <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextInput label="Email" />
              </Grid>
              <Grid item xs={12}>
                <TextInput type="password" label="Password" />
              </Grid>
          </Grid>
      </FormWrapper>
      <CheckBoxInput checked = {false} label = "Remember Login"/>
      </CommonContainer>
    </>
  );
};

export default Login;
