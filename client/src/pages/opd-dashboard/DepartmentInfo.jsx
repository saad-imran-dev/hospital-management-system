import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { Dashboard, DoctorTable } from '../../components'
import { useParams } from 'react-router-dom'

function DepartmentInfo({ props }) {
    const { name } = useParams()
    return (
        <Dashboard>
            <Typography variant='h3' sx={{ textTransform: 'capitalize' }}>{name}</Typography>
            <Divider sx={{ my: 2.5 }} />


            <DoctorTable />
        </Dashboard>
    )
}

export default DepartmentInfo