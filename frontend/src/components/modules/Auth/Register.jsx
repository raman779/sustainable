import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography, Grid, Box } from '@mui/material';
import TextInput from '../../common/TextInput';

import theme from '../../../styles/theme';
import { Navigate, useNavigate } from 'react-router-dom';
import FormWrapper from '../../common/StyledFormWrapper';
import useFetch from '../../../hooks/usefetch';
import { useLocation } from 'react-router-dom';

// const StyledPaper = styled("div")(({ theme }) => ({
//     padding: theme.spacing(2),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '80vh',

//   }));

const Register = ({ setLogin }) => {

  const navigate = useNavigate()
  const location = useLocation();
  const [inviteCode, setInviteCode] = useState(null);
  const { loading, error, fetchData } = useFetch();
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('inviteCode');
    setInviteCode(code);
    if (code) {
      // navigate(`/invite/${inviteCode}`)
      checkInvitedUser(code)
    }
    console.log(code)
  }, [location.search]);
  const checkInvitedUser = async (signUpCode) => {
    const response = await fetchData({
      url: `/signup/${signUpCode}`,
      method: 'GET'
    });
    if (response.length !== 0) {
      setEmail(response[0].email)
      setName(response[0].first_name)
    }
  }

  const handleRegisteration = async () => {
    const response = await fetchData({
      url: `/signup/${inviteCode}`,
      method: 'PATCH',
      data: {
        first_name: name,
        email: email,
        password: password
      }
    });
    if (response.status === 'success') {

    }
  }

  return (
    <>
      <CssBaseline />
      <FormWrapper
        subHeadingText={{ text: "Already Registered? Log in here", onClick: () => { setLogin(prev => !prev) } }}
        buttonInputs={[{
          text: "sign up", onClick: () => {
            // navigate("/details")
            handleRegisteration()
          }
        }]}
        headingText='Create new Account'
      >
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextInput autoComplete="new-password" label="Name" value={name} onChange={(e) => setName(e.target.value)} labelVariant='body1' />
          </Grid>
          <Grid item xs={12}>
            <TextInput autoComplete="new-password" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} labelVariant='body1' disabled={inviteCode ? true : false} />
          </Grid>
          <Grid item xs={12}>
            <TextInput autoComplete="new-password" label="Password" value={password}
              onChange={(e) => { setPassword(e.target.value) }} type="password" labelVariant='body1' />
          </Grid>
        </Grid>
      </FormWrapper>
    </>
  );
};

export default Register;
