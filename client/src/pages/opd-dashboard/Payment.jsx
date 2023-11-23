import React, { useState } from 'react'
import { Dashboard, ItemsTable, PaidModal, SearchBar } from '../../components'
import { Divider, Typography } from '@mui/material'

function Payment() {
    const [open, setOpen] = useState(false)
    const [cnic, setCnic] = useState('')

    return (
        <Dashboard>
            <Typography variant='h3'>Payment</Typography>
            <Divider sx={{ my: 2 }} />

            <SearchBar cnic={cnic} handleChange={(e) => setCnic(e.target.value)} />
            <ItemsTable handlePay={() => setOpen(true)} />
            <PaidModal open={open} handleClose={() => setOpen(false)} />
        </Dashboard>
    )
}

export default Payment