import React from 'react'
import { DashboardOpd, PatientTable } from '../../components'
import { Divider, Typography } from '@mui/material'

function PatientRecords() {
    return (
        <DashboardOpd>
            <Typography variant='h3'>Patient Records</Typography>
            <Divider sx={{ my: 2 }} />

            <PatientTable />
        </DashboardOpd>
    )
}

export default PatientRecords