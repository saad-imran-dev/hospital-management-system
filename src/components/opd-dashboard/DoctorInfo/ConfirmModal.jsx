import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeReviewModal } from '../../../features/opdAppointment.slice'

function ConfirmModal({ handleConfirm }) {
    const dispatch = useDispatch()
    const appointment = useSelector(state => state.opd_appointment)

    return (
        <Modal
            open={appointment.review.open}
            onClose={() => dispatch(closeReviewModal())}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                boxShadow: 24,
                borderRadius: 2,
                p: 4,
            }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Apointment Confirmation
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField label='Name' value={appointment.review.name} />
                    <TextField label='Phone' value={appointment.review.phone} />
                    <TextField label='Email' value={appointment.review.email} />
                    <TextField label='Time' value={appointment.review.time} />
                    <Button color='error' variant='contained' onClick={handleConfirm} sx={{ ml: 'auto' }} >Confirm</Button>
                </Typography>
            </Box>
        </Modal>
    )
}

export default ConfirmModal