import { Box, Button, FormControl, FormControlLabel, FormLabel, Input, InputLabel, Radio, RadioGroup, TextField, } from '@mui/material'
import { IMaskInput } from 'react-imask'
import React from 'react'

const PhoneMask = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="0000-0000000"
            placeholder="0000-0000000"
            definitions={{
                '#': /[1-9]/,
            }}
            inputRef={ref}
            onAccept={(value) => onChange({ target: { name: props.name, value } })}
            overwrite
        />
    );
});


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
                        defaultValue="female"
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
                <TextField variant='standard' label='House Address' sx={{ width: '47%' }} />

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

            <Button variant='contained' sx={{ width: 150 }}>Register</Button>
        </Box>
    )
}

export default RegisterPatientInput