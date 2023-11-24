import { Box, Button, Divider, Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import doctor from './../../../assets/doctor.avif'
import { useNavigate } from 'react-router-dom'

function Sidebar() {
    const navigate = useNavigate()

    return (
        <Box sx={{
            width: '25vw',
            height: '100vh',
            backgroundColor: 'blue.dark',
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1.5,
        }}>
            <Box component='img' src={doctor} sx={{ borderRadius: '50%', height: '125px', width: '125px' }} />

            <Divider sx={{ m: 3, width: '100%' }} />

            <Button variant='contained' color='white' disableElevation    onClick={() => navigate('/doctor/patient/info/5')}           
                sx={{ width: '100%' }}
            >
                Patient Information
            </Button>

            <Button variant='contained' color='white' disableElevation onClick={() => navigate('/doctor/patient/history/5')}
                sx={{ width: '100%' }}
            >
                Patient History
            </Button>

            <Button variant='contained' color='white' disableElevation onClick={() => navigate('/doctor/patient/prescription/5')}
                sx={{ width: '100%' }}
            >
                Prescription
            </Button>
        </Box>
    )
}

export default Sidebar