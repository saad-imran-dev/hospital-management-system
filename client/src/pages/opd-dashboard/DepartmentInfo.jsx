import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { DashboardOpd, DoctorTable } from '../../components'
import { useParams } from 'react-router-dom'

function DepartmentInfo({ props }) {
    const { name } = useParams()
    return (
        <DashboardOpd>
            <Typography variant='h3' sx={{ textTransform: 'capitalize' }}>{name}</Typography>
            <Divider sx={{ my: 2.5 }} />


            <DoctorTable />
        </DashboardOpd>
    )
}

export default DepartmentInfo