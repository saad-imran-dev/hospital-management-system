import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Typography, Box, TextField, Button, Alert } from '@mui/material';

export default function SignUpPatient() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    Cnic : '',
    email: '',
    password: ''
  });

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [CnicError, setCnicError]=useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [validCredentials, setValidCredentials] = useState(false);

  function onTextChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email regular expression
    const isValidEmail = emailRegex.test(formData.email);
  
    if (
      formData.firstName &&
      formData.lastName &&
      formData.Cnic.length === 13 &&
      isValidEmail &&
      formData.password
    ) {
      setFirstNameError(false);
      setLastNameError(false);
      setCnicError(false);
      setEmailError(false);
      setPasswordError(false);
      setValidCredentials(true);
      navigate('/patient/login');
    } else {
      setFirstNameError(!formData.firstName);
      setLastNameError(!formData.lastName);
      setCnicError(formData.Cnic.length !== 13);
      setEmailError(!isValidEmail);
      setPasswordError(!formData.password);
    }
  }

  return (
    <Box
      sx={{
        height: '150vh',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {validCredentials && <Alert severity="success">Signed up successfully</Alert>}
      <Typography variant="h2" mb={2}>
        Sign Up
      </Typography>

      <Box
        component="form"
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#D9D9D9',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          height: '50%',
          width: '75%'
        }}
      >
        <div>
          <TextField
            id="outlined-required-first-name"
            label="First Name"
            required
            type="text"
            value={formData.firstName}
            name="firstName"
            onChange={onTextChange}
            error={firstNameError}
            helperText={firstNameError ? "First name can't be empty" : ''}
          />
        </div>
        <div>
          <TextField
            id="outlined-required-last-name"
            label="Last Name"
            required
            type="text"
            value={formData.lastName}
            name="lastName"
            onChange={onTextChange}
            error={lastNameError}
            helperText={lastNameError ? "Last name can't be empty" : ''}
          />
        </div>
        <div>
          <TextField
            id="outlined-required-CNIC"
            label="CNIC"
            required
            type="text"
            value={formData.Cnic}
            name="Cnic"
            onChange={onTextChange}
            error={CnicError}
            helperText={CnicError ? "Cnic should be 13 character long" : ''}
          />
        </div>
        <div>
          <TextField
            id="outlined-required-email"
            label="Email"
            required
            type="email"
            value={formData.email}
            name="email"
            onChange={onTextChange}
            error={emailError}
            helperText={emailError ? "Enter a valid email" : ''}
          />
        </div>
        <div>
          <TextField
            id="outlined-required-password"
            label="Password"
            required
            type="password"
            value={formData.password}
            name="password"
            onChange={onTextChange}
            error={passwordError}
            helperText={passwordError ? "Password can't be empty" : ''}
          />
        </div>
        <div>
          <Button variant="contained" onClick={handleSubmit}>
            Sign Up
          </Button>
        </div>
        <Typography variant="body2" mt={2}>
          Already have an account? <Link to="/patient/login">Log in</Link>
        </Typography>
      </Box>
    </Box>
  );
}
