import React from 'react'
import { Dashboard, PatientTable } from '../../components'
import { Divider, Typography } from '@mui/material'

function PatientRecords() {
    return (
        <Dashboard>
            <Typography variant='h3'>Patient Records</Typography>
            <Divider sx={{ my: 2 }} />

            <PatientTable />
        </Dashboard>
    )
}

export default PatientRecords