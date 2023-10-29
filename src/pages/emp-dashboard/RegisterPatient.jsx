import React from 'react'
import { Dashboard, RegisterPatientInput } from '../../components'
import { Box, Typography } from '@mui/material'

function RegisterPatient() {
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
                <RegisterPatientInput />
            </Box>
        </Dashboard>
    )
}

export default RegisterPatient