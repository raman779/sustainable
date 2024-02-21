import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid } from '@mui/material';
import TextInput from '../../common/TextInput';
import FormWrapper from '../../common/StyledFormWrapper';
import CheckBoxInput from '../../common/CheckBoxInput';
import useFetch from '../../../hooks/usefetch';
import { useNavigate } from 'react-router-dom';



const Login = ({ setLogin }) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const { loading, error, fetchData } = useFetch();


  const onLogin = async () => {
    const requestData = await fetchData({
      url: "/login",
      data: {
        email, password
      },
      method:'POST'
    })
    console.log(requestData, "fdhjfdfj")
  }

  // const navigate = useNavigate()

  return (
    <>
      <CssBaseline />

      <FormWrapper
        subHeadingText={{ text: "New ? Create an Account", onClick: () => { setLogin(prev => !prev) } }}
        buttonInputs={[{
          text: "sign in", onClick: () => {
            // navigate("/group")
            onLogin()
          }
        }]}
        headingText='Log In'
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              error={email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)}
              helperText={email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "Please enter a valid email" : ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput value={password}
              onChange={(e) => setPassword(e.target.value)} type="password" label="Password" />
          </Grid>
        </Grid>
      </FormWrapper>
      <CheckBoxInput checked={false} label="Remember Login" />

    </>
  );
};

export default Login;
