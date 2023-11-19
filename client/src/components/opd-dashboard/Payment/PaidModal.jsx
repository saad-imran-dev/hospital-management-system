import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Modal, Typography } from '@mui/material'
import React from 'react'

function PaidModal({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
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
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
      }}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          All charges due paid
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: 30, display: 'flex', justifyContent: 'center' }}>
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'green' }} />
        </Typography>
      </Box>
    </Modal>
  )
}

export default PaidModal