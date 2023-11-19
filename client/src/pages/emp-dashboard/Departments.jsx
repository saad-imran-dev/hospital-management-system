import React from 'react'
import { Dashboard, DepartmentCard } from '../../components'
import { Box, Grid, Typography } from '@mui/material'

const departs = [
    {
        name: "Cardiology",
        available: 10,
        doctors: 25
    },
    {
        name: "OPD",
        available: 10,
        doctors: 25
    },
    {
        name: "Dermatologist",
        available: 10,
        doctors: 25
    },
    {
        name: "Cardiology",
        available: 10,
        doctors: 25
    },
    {
        name: "Cardiology",
        available: 10,
        doctors: 25
    },
]

function Departments() {
    return (
        <Dashboard>
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
        </Dashboard>
    )
}

export default Departments