import React, { useState } from 'react'
import { DashboardOpd, RegisterPatientInput } from '../../components'
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
        // alert(patient.cnic.replace('-', '').replace('-', '').slice(0, 11))
        fetch('http://localhost:5000/patient', {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "first_name": patient.firstName,
                "last_name": patient.lastName,
                "contact": patient.phone.replace('-', ''),
                "cnic": patient.cnic.replace('-', '').replace('-', ''),
                "email": patient.email,
            })
        }).then(data => {
            if (data.status == 200) {
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
                alert('Patient successfully registered')
            } else {
                alert('Error occured while registering patient')
            }
        }).catch(() => alert('Error occured while registering patient'))
    }

    return (
        <DashboardOpd>
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
        </DashboardOpd>
    )
}

export default RegisterPatient