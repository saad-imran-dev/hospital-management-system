import React, { useState } from 'react'
import { Dashboard, ItemsTable, PaidModal, SearchBar } from '../../components'
import { Divider, Typography } from '@mui/material'

function Payment() {
    const [open, setOpen] = useState(false)

    return (
        <Dashboard>
            <Typography variant='h3'>Payment</Typography>
            <Divider sx={{ my: 2 }} />
            
            <SearchBar />
            <ItemsTable handlePay={() => setOpen(true)} />
            <PaidModal open={open} handleClose={() => setOpen(false)} />
        </Dashboard>
    )
}

export default Payment