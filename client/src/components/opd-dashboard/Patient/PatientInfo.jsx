import { Box, Button, FormControl, FormControlLabel, FormLabel, Input, InputLabel, Radio, RadioGroup, TextField, } from '@mui/material'
import React, { useState } from 'react'
import PhoneMask from '../RegisterPatient/PhoneMask'
import CNICMask from '../RegisterPatient/CNICMask'

function PatientInfo({ patient, handleChange }) {
    const [edit, setEdit] = useState(true)

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
                    disabled={!edit}
                />
                <TextField
                    variant='standard'
                    label='Last Name'
                    value={patient.lastName}
                    name='lastName'
                    onChange={handleChange}
                    sx={{ width: '47%' }}
                    disabled={!edit}
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
                    disabled={!edit}
                />

                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="gender"
                        value={patient.gender}
                        onChange={handleChange}
                        disabled={!edit}
                    >
                        <FormControlLabel value="female" disabled={!edit} control={<Radio />} label="Female" />
                        <FormControlLabel value="male" disabled={!edit} control={<Radio />} label="Male" />
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
                    disabled={!edit}
                />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <FormControl variant="standard" sx={{ width: '47%' }} >
                    <InputLabel htmlFor="formatted-text-mask-input">CNIC</InputLabel>
                    <Input
                        name="cnic"
                        value={patient.cnic}
                        id="cnic"
                        placeholder="00000-0000000-0"
                        inputComponent={CNICMask}
                        onChange={handleChange}
                        disabled={!edit}
                    />
                </FormControl>

                <FormControl variant="standard" sx={{ width: '47%' }} >
                    <InputLabel htmlFor="formatted-text-mask-input">Phone</InputLabel>
                    <Input
                        name="phone"
                        value={patient.phone}
                        placeholder="0000-0000000"
                        id="phone"
                        inputComponent={PhoneMask}
                        onChange={handleChange}
                        disabled={!edit}
                    />
                </FormControl>
            </Box>

            <TextField
                variant='standard'
                label='Email'
                name="email"
                value={patient.email}
                onChange={handleChange}
                disabled={!edit}
            />

            {/* {!edit ?
                <Button variant='contained' sx={{ mr: 'auto' }} onClick={() => setEdit(prevEdit => !prevEdit)}>Edit</Button>
                :
                <Button variant='contained' sx={{ mr: 'auto' }} onClick={() => setEdit(prevEdit => !prevEdit)}>Save</Button>
            } */}
        </Box>
    )
}

export default PatientInfo