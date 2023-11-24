import React from 'react'
import { AppointmentModal, ConfirmModal, DashboardOpd, DoctorInfoTable } from '../../components'
import { Typography, Divider } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { closeInputModal, closeReviewModal, openReviewModal, setCNIC, setUserDetail } from '../../features/opdAppointment.slice'

function Doctor() {
  const dispatch = useDispatch()
  const appointment = useSelector(state => state.opd_appointment)
  const name = 'Muhammad Saad'

  function handleSubmit() {
    const txt = appointment.input.cnic.split('-')
    if (txt.length == 3 && txt[0].length == 5 && txt[1].length == 7 && txt[2].length == 1) {
      dispatch(openReviewModal({
        name: 'Muhammad Saad',
        email: 'saad.imran.vohra@gmail.com',
        phone: '0330-2459543',
        doctor: name
      }))
    }
  }

  function handleConfirm() {
    dispatch(closeReviewModal())
  }

  return (
    <DashboardOpd>
      <Typography variant='h3' sx={{ textTransform: 'capitalize' }}>{name}</Typography>
      <Divider sx={{ my: 2.5 }} />

      <DoctorInfoTable />
      <AppointmentModal handleSubmit={handleSubmit} />
      <ConfirmModal handleConfirm={handleConfirm} />
    </DashboardOpd>
  )
}

export default Doctor