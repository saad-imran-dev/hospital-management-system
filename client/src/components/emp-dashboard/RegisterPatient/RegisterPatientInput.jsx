import { Box, Button, FormControl, FormControlLabel, FormLabel, Input, InputLabel, Radio, RadioGroup, TextField, } from '@mui/material'
import React from 'react'
import PhoneMask from './PhoneMask'

function RegisterPatientInput() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5, my: 'auto', width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <TextField variant='standard' label='First Name' sx={{ width: '47%' }} />
                <TextField variant='standard' label='Last Name' sx={{ width: '47%' }} />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <TextField variant='standard' label='Age' type='number' sx={{ width: '30%' }} />

                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl>

                <TextField
                    variant='standard'
                    label='Date Of Birth'
                    type='date'
                    InputLabelProps={{ shrink: true }}
                    sx={{ width: '30%' }}
                />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <TextField variant='standard' label='Email' type='email' sx={{ width: '47%' }} />

                <FormControl variant="standard" sx={{ width: '47%' }} >
                    <InputLabel htmlFor="formatted-text-mask-input">Phone</InputLabel>
                    <Input
                        // value={values.textmask}
                        // onChange={handleChange}
                        name="Phone"
                        id="phone"
                        inputComponent={PhoneMask}
                    />
                </FormControl>
            </Box>

            <TextField variant='standard' label='House address' />

            <Button variant='contained' sx={{ width: 150 }}>Register</Button>
        </Box>
    )
}

export default RegisterPatientInput