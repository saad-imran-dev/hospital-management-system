import React from 'react'
import Sidebar from './Sidebar'
import { Box } from '@mui/material'

function Dashboard({ children: Children }) {
    return (
        <Box sx={{ width: '100vw', height: '100vh', display: 'flex' }}>
            <Sidebar />
            <Box sx={{ width: '75vw', height: '100vh', p: 3, overflow: 'auto', backgroundColor: 'whitesmoke' }}>
                {Children}
            </Box>
        </Box>
    )
}

export default Dashboard