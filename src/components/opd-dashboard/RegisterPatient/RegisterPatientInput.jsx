import { Box, Button, FormControl, FormControlLabel, FormLabel, Input, InputLabel, Radio, RadioGroup, TextField, } from '@mui/material'
import React from 'react'
import PhoneMask from './PhoneMask'
import CNICMask from './CNICMask'

function RegisterPatientInput({ patient, handleChange, handleRegister }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5, my: 'auto', width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <TextField
                    variant='standard'
                    label='First Name'
                    value={patient.firstName}
                    name='firstName'
                    onChange={handleChange}
                    sx={{ width: '47%' }}
                />
                <TextField
                    variant='standard'
                    label='Last Name'
                    value={patient.lastName}
                    name='lastName'
                    onChange={handleChange}
                    sx={{ width: '47%' }}
                />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <TextField
                    variant='standard'
                    label='Age'
                    type='number'
                    InputLabelProps={{ shrink: true }}
                    name='age'
                    value={patient.age}
                    onChange={handleChange}
                    sx={{ width: '30%' }}
                />

                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="gender"
                        value={patient.gender}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl>

                <TextField
                    variant='standard'
                    label='Date Of Birth'
                    type='date'
                    name="dob"
                    value={patient.dob}
                    InputLabelProps={{ shrink: true }}
                    sx={{ width: '30%' }}
                    onChange={handleChange}
                />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <FormControl variant="standard" sx={{ width: '47%' }} >
                    <InputLabel htmlFor="formatted-text-mask-input">CNIC</InputLabel>
                    <Input
                        name="cnic"
                        value={patient.cnic}
                        id="cnic"
                        inputComponent={CNICMask}
                        onChange={handleChange}
                    />
                </FormControl>

                <FormControl variant="standard" sx={{ width: '47%' }} >
                    <InputLabel htmlFor="formatted-text-mask-input">Phone</InputLabel>
                    <Input
                        name="phone"
                        value={patient.phone}
                        id="phone"
                        inputComponent={PhoneMask}
                        onChange={handleChange}
                    />
                </FormControl>
            </Box>

            <TextField variant='standard' label='Email' name="email" value={patient.email} onChange={handleChange} />

            <Button variant='contained' onClick={handleRegister} sx={{ mr: 'auto' }}>Register</Button>
        </Box>
    )
}

export default RegisterPatientInput