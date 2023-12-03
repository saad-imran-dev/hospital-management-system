import React, { useEffect, useState } from 'react'
import { DashboardOpd, DepartmentCard } from '../../components'
import { Box } from '@mui/material'

function Departments() {
    const [depart, setDepart] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/doctor').then(async data => {
            if (data.status === 200) {
                const result = await data.json();
                let dept = new Set()
                result.map(item => dept.add({ name: item.dept_name }))
                dept = [...dept]
                setDepart(dept)
            }
        })
    }, [])

    return (
        <DashboardOpd>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: "repeat(auto-fill, 300px)",
                gridGap: "2rem",
                justifyContent: 'space-evenly',
            }}>
                {depart.map(item => {
                    return (
                        <DepartmentCard department={item.name} available={item.available} doctors={item.doctors} />
                    )
                })}
            </Box>
        </DashboardOpd>
    )
}

export default Departments