import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import PatientInfo from '../../components/opd-dashboard/Patient/PatientInfo'
import { DashboardOpd } from '../../components'
import { useLocation, useParams } from 'react-router-dom'

function Patient({ route }) {
    const params = useLocation()

    const [patient, setPatient] = useState({
        firstName: params.state.first_name,
        lastName: params.state.last_name,
        email: params.state.email,
        phone: params.state.contact,
        cnic: params.state.cnic,
        gender: '',
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
                    // [e.target.name]: e.target.value
                }))} />
            </Box>
        </DashboardOpd>
    )
}

export default Patient