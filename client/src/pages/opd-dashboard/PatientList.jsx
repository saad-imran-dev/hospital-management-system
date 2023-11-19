import React from 'react'
import { Dashboard, PatientTable } from '../../components'
import { Divider, Typography } from '@mui/material'

function PatientList() {
    return (
        <Dashboard>
            <Typography variant='h3'>Registered Patients</Typography>
            <Divider sx={{ my: 2 }} />

            <PatientTable />
        </Dashboard>
    )
}

export default PatientList