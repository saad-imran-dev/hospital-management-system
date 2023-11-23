import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, IconButton, InputBase, Paper } from '@mui/material'
import React from 'react'
import CNICMask from '../RegisterPatient/CNICMask'

function SearchBar({ cnic, handleChange }) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, borderRadius: 50 }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter CNIC No."
                    inputComponent={CNICMask}
                    inputProps={{ 'aria-label': 'Enter CNIC No.' }}
                    value={cnic}
                    onChange={handleChange}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </IconButton>
            </Paper>
        </Box>

    )
}

export default SearchBar