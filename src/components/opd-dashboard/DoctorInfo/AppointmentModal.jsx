import { Box, Modal, Typography, Input, FormControl, InputLabel, Button } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { closeInputModal, setCNIC } from '../../../features/opdAppointment.slice'
import CNICMask from '../RegisterPatient/CNICMask'

function AppointmentModal({ handleSubmit }) {
    const dispatch = useDispatch()
    const appointment = useSelector(state => state.opd_appointment)

    return (
        <Modal
            open={appointment.input.open}
            onClose={() => {
                dispatch(setCNIC(''))
                dispatch(closeInputModal())
            }}
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
                    Enter CNIC
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2, display: 'flex', flexDirection: 'column' }}>
                    <FormControl variant="standard" sx={{ width: '100%', mb: 2 }} >
                        <Input
                            name="CNIC"
                            id="CNIC"
                            inputComponent={CNICMask}
                            value={appointment.input.cnic}
                            onChange={(e) => dispatch(setCNIC(e.target.value))}
                        />
                    </FormControl>
                    <Button variant='contained' sx={{ ml: 'auto' }} onClick={handleSubmit}>Submit</Button>
                </Typography>
            </Box>
        </Modal>
    )
}

export default AppointmentModal