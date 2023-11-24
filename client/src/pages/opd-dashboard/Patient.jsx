import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import PatientInfo from '../../components/opd-dashboard/Patient/PatientInfo'
import { DashboardOpd } from '../../components'

function Patient() {
    const [patient, setPatient] = useState({
        firstName: 'Muhammad',
        lastName: 'Saad',
        email: 'saad@gmail.com',
        phone: '0333-245-9543',
        cnic: '42101-1996265-5',
        gender: 'male',
        dob: '',
        age: 22,
    })

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
                <Typography variant='h3' mr={'auto'}>Patient Information</Typography>
                <PatientInfo patient={patient} handleChange={(e) => setPatient(prevPatient => ({
                    ...prevPatient,
                    [e.target.name]: e.target.value
                }))} />
            </Box>
        </DashboardOpd>
    )
}

export default Patient