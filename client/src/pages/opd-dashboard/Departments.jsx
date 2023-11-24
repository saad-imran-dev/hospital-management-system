import React from 'react'
import { DashboardOpd, DepartmentCard } from '../../components'
import { Box, Grid, Typography } from '@mui/material'

const departs = [
    {
        name: "general",
        available: 10,
        doctors: 25
    },
    {
        name: "cardiology",
        available: 10,
        doctors: 25
    },
    {
        name: "dermatology",
        available: 10,
        doctors: 25
    },
]

function Departments() {
    return (
        <DashboardOpd>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: "repeat(auto-fill, 300px)",
                gridGap: "2rem",
                justifyContent: 'space-evenly',
            }}>
                {departs.map(item => {
                    return (
                        <DepartmentCard department={item.name} available={item.available} doctors={item.doctors} />
                    )
                })}
            </Box>
        </DashboardOpd>
    )
}

export default Departments