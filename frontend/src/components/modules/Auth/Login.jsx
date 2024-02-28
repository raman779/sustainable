import React, { useState, useEffect, useRef } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid } from '@mui/material';
import TextInput from '../../common/TextInput';
import FormWrapper from '../../common/StyledFormWrapper';
import CheckBoxInput from '../../common/CheckBoxInput';
import useFetch from '../../../hooks/usefetch';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';

const Login = ({ setLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { loading, fetchData } = useFetch();
  const navigate = useNavigate();

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        setError('Please fill all the fields.');
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError('Please enter a valid email.');
        return;
      }

      const response = await fetchData({
        url: "/login",
        data: { email: email.toLowerCase(), password },
        method: 'POST'
      });

      if (response?.authToken) {
        localStorage.setItem("authToken", response.authToken);
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
        setError('Invalid login credentials.');
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError('An unexpected error occurred.');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <>
      <CssBaseline />
      <FormWrapper
        subHeadingText={{ text: "New ? Create an Account", onClick: () => setLogin(prev => !prev) }}
        buttonInputs={[{ text: "Log In", onClick: handleLogin }]}
        headingText='Log In'
      >
        <Grid container mt={2}>
          <Grid item xs={12}>
            <TextInput
              inputRef={emailRef}
              value={email}
              autoComplete='off'
              onChange={(e) => { setEmail(e.target.value); clearError(); }}
              label="Email"
              error={(email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))}
              helperText={(email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) ? "Please enter a valid email" : ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              value={password}
              autoComplete='new-password'
              onChange={(e) => { setPassword(e.target.value); clearError(); }}
              onKeyPress={handleKeyPress}
              type="password"
              label="Password"
            />
          </Grid>
          <Grid item xs={12}>
            {error && <Alert severity="error">{error}</Alert>}
          </Grid>
        </Grid>
      </FormWrapper>
      <CheckBoxInput checked={false} label="Remember Login" />
    </>
  );
};

export default Login;
