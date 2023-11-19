import React, { useState } from 'react'
import { Dashboard, RegisterPatientInput } from '../../components'
import { Box, Typography } from '@mui/material'

function RegisterPatient() {
    const [patient, setPatient] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        cnic: '',
        gender: '',
        dob: '',
        age: 0,
    })

    function handleChange(e) {
        setPatient(prevPatient => ({
            ...prevPatient,
            [e.target.name]: e.target.value,
        }))
    }

    function handleRegister() {
        console.log(patient)
        setPatient(prevPatient => ({
            ...prevPatient,
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            cnic: '',
            gender: '',
            dob: '',
            age: '',
        }))
    }

    return (
        <Dashboard>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                p: 2
            }}>
                <Typography variant='h3' mr={'auto'}>Patient Registration</Typography>
                <RegisterPatientInput patient={patient} handleChange={handleChange} handleRegister={handleRegister} />
            </Box>
        </Dashboard>
    )
}

export default RegisterPatient