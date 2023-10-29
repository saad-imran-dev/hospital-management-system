import React from 'react'
import { Dashboard, RegisterPatientInput } from '../../components'
import { Box } from '@mui/material'

function RegisterPatient() {
    return (
        <Dashboard>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', p: 2 }}>
                <RegisterPatientInput />
            </Box>
        </Dashboard>
    )
}

export default RegisterPatient