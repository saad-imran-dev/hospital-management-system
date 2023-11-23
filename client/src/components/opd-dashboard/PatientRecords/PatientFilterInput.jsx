import { Box, IconButton, InputBase, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import CNICMask from '../RegisterPatient/CNICMask'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'

function PatientFilterInput({ filter, handleChange }) {
    return (
        <Box sx={{ p: 2, borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
            <Typography variant='h5' sx={{ mb: 1 }}>
                <FontAwesomeIcon icon={faSort} style={{ marginRight: 10 }} size='xs' />
                Filter
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
                <InputBase
                    name='cnic'
                    placeholder='Filter by CNIC'
                    inputComponent={CNICMask}
                    value={filter.cnic}
                    onChange={handleChange}
                    sx={{ p: 0.5, border: '1px solid rgba(0,0,0,0.2)', borderRadius: 1, '&:focus': { border: '1px solid black' } }}
                />
                <InputBase
                    name='firstName'
                    placeholder='Filter by First name' 
                    value={filter.firstName}
                    onChange={handleChange}
                    sx={{ p: 0.5, border: '1px solid rgba(0,0,0,0.2)', borderRadius: 1, '&:focus': { border: '1px solid black' } }}
                />
                <InputBase
                    name='lastName'
                    placeholder='Filter by Last name'
                    value={filter.lastName}
                    onChange={handleChange}
                    sx={{ p: 0.5, border: '1px solid rgba(0,0,0,0.2)', borderRadius: 1, '&:focus': { border: '1px solid black' } }}
                />
                <InputBase
                    name='age'
                    placeholder='Filter by age' type='number'
                    value={filter.age}
                    onChange={handleChange}
                    sx={{ p: 0.5, border: '1px solid rgba(0,0,0,0.2)', borderRadius: 1, '&:focus': { border: '1px solid black' } }}
                />
            </Box>
        </Box>
    )
}

export default PatientFilterInput