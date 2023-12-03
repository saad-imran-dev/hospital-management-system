import { React, useState } from 'react';
import { Typography, Box, TextField, Button, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function LoginOpd() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [validCredentials, setValidCredentials] = useState(false)
    function onTextChange(event) {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    function handleSubmit() {
        // console.log('clicked')
        if (formData.email) {
            if (formData.password) {
                fetch('http://localhost:5000/auth/opd', {
                    method: "post",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                }).then(data => {
                    if(data.status === 200){
                        setEmailError(false);
                        setPasswordError(false);
                        setValidCredentials(true)
                        navigate('/opd/register')
                    }
                }).catch(err => setValidCredentials(false))
            }
            else {
                setPasswordError(true)
            }
        }
        else {
            setEmailError(true)
            if (!formData.password) {
                setPasswordError(true)
            }
        }
    }
    return (
        <Box
            sx={{
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            {validCredentials && <Alert severity='success'>Logged in successfully</Alert>}
            <Typography variant='h2' mb={2}>
                Login
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
                        id="outlined-required-email"
                        label='Email'
                        required
                        type='email'
                        value={formData.email}
                        name="email"
                        onChange={onTextChange}
                        error={emailError}
                        helperText={emailError ? "Email can't be empty" : ""}
                    >
                    </TextField>
                </div>
                <div>
                    <TextField
                        id='outlined-required-password'
                        label='Password'
                        required
                        type='password'
                        value={formData.password}
                        name="password"
                        onChange={onTextChange}
                        error={passwordError}
                        helperText={passwordError ? "Password can't be empty" : ""}
                    >

                    </TextField>
                </div>
                <div>
                    <Button variant='contained' onClick={handleSubmit}>Login</Button>
                </div>
            </Box>
        </Box>
    )
}