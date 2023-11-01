import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Box, Button, TextField, Typography } from "@mui/material";
import {
  StyledInputBase,
  modalHeaderStyle,
  ButtonStyle1,
  ButtonStyle2,
} from "./styles";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
        email,
        password,
      });

      if (response.status === 200) {
        setErrorMessage('');
        setIsLoggedIn(true);
      } else {
        setErrorMessage('Authentication failed.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Authentication failed.');
    }
  };

  return (
    <div>
      {/* <h2>Login</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label sx={{modalHeaderStyle}}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" sx={{ ButtonStyle1 }}>Login</button>
      </form>
      {isLoggedIn && (
        <p>
          Authentication successful.{' '}
          <Link to="/calendar">Go to the calendar.</Link>
        </p>
      )} */}
      <Box>
      <h2 sx={{ modalHeaderStyle }}>LOG IN</h2>
            <div style={{ margin: "20px" }}></div>
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ fontFamily: 'Poppins' }}
            />
            <br></br><br></br>
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ fontFamily: 'Poppins' }}
            />
            <Box sx={{ justifyContent: "space-between" }}>
              <div style={{ margin: "20px" }}></div>
              <Button
                variant="contained"
                sx={ButtonStyle1}
                style={{ marginRight: "15px" }}
                onSubmit={handleLogin}
              >
                Log in 
              </Button>
            </Box>
            </Box>
    </div>
  );
}

export default Login;
