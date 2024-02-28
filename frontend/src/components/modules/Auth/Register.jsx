import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography, Grid, Box } from '@mui/material';
import TextInput from '../../common/TextInput';

import theme from '../../../styles/theme';
import {  useNavigate } from 'react-router-dom';
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
  }, [location.search]);
  const checkInvitedUser = async (signUpCode) => {
    const response = await fetchData({
      url: `/signup/${signUpCode}`,
      method: 'GET'
    });
    if (response.length !== 0) {
      setEmail(response[0].email)
      setName(response[0].first_name + " " + (response[0].last_name || ""))
    }
  }

  const handleRegisteration = async () => {
    const link = inviteCode ? `/signup/${inviteCode}` : '/signup'
    const response = await fetchData({
      url: link,
      method: inviteCode ? 'PATCH' : 'POST',
      data: {
        first_name: (name.split(" "))[0],
        last_name: (name.split(" "))[1] || "",
        email: email.toLowerCase().trim(),
        password: password
      }
    });
    if (response.status === 'success') {
      if (response?.data?.authToken) {
        localStorage.setItem("authToken", response?.data?.authToken);
        const userRole = response.data.user_role;
        if (userRole === "SUPERADMIN") {
          navigate("/super-admin");
        } else if (userRole === "ADMIN") {
          navigate("/admin");
        } else {
          if (!response?.data?.address || !response?.data?.experience) {
            navigate("/details");
          } else {
            navigate("/leader")
          }
        }
      } else {
        console.log("error")
      }
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
            <TextInput autoComplete="off" label="Name" value={name} onChange={(e) => setName(e.target.value)} labelVariant='body1' />
          </Grid>
          <Grid item xs={12}>
            <TextInput autoComplete="off" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} labelVariant='body1' disabled={inviteCode ? true : false} />
          </Grid>
          <Grid item xs={12}>
            <TextInput autoComplete="off" label="Password" value={password}
              onChange={(e) => { setPassword(e.target.value) }} type="password" labelVariant='body1' />
          </Grid>
        </Grid>
      </FormWrapper>
    </>
  );
};

export default Register;
