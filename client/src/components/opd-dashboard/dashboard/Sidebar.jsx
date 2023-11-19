import { Box, Button, Divider, Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import doctor from './../../../assets/doctor.avif'
import { Link } from 'react-router-dom'

function Sidebar() {
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

            <Link to={'/opd/'} style={{ width: '100%', color: 'black' }}>
                <Button variant='contained' color='white' disableElevation sx={{ width: '100%' }}>Register Patient</Button>
            </Link>

            <Link to={'/opd/patient'} style={{ width: '100%', color: 'black' }}>
                <Button variant='contained' color='white' disableElevation sx={{ width: '100%' }}>Patient List</Button>
            </Link>

            <Link to={'/opd/department'} style={{ width: '100%', color: 'black' }}>
                <Button variant='contained' color='white' disableElevation sx={{ width: '100%' }}>Departments</Button>
            </Link>

            <Link to={'/opd/payment'} style={{ width: '100%', color: 'black' }}>
                <Button variant='contained' color='white' disableElevation sx={{ width: '100%' }}>Payment</Button>
            </Link>

            <Button variant='contained' color='yellow' disableElevation sx={{ width: '100%' }}>
                <FontAwesomeIcon icon={faRightFromBracket} style={{ paddingRight: '0.5rem' }} />
                Log out
            </Button>
        </Box>
    )
}

export default Sidebar