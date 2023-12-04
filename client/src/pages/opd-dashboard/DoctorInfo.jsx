import React, { useState } from 'react'
import { AppointmentModal, ConfirmModal, DashboardOpd, DoctorInfoTable } from '../../components'
import { Typography, Divider } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { closeInputModal, closeReviewModal, openReviewModal, setCNIC, setUserDetail } from '../../features/opdAppointment.slice'
import { useLocation } from 'react-router-dom'

function Doctor() {
  const [update, setUpdate] = useState(0)

  const date = new Date

  const dispatch = useDispatch()
  const appointment = useSelector(state => state.opd_appointment)

  async function handleSubmit() {
    const txt = appointment.input.cnic.split('-')
    // if (txt.length == 3 && txt[0].length == 5 && txt[1].length == 7 && txt[2].length == 1) {
    const patient = await fetch('http://localhost:5000/patient')
      .then(async data => {
        if (data.status == 200) {
          const result = await data.json()

          for (let i = 0; i < result.length; i++) {
            if (result[i].cnic == appointment.input.cnic.replace('-', '').replace('-', '')) {
              return result[i]
            }
          }
          return undefined
        }
      })

    if (patient === undefined) {
      dispatch(closeInputModal())
      return
    }

    localStorage.setItem('patient', JSON.stringify(patient))
    dispatch(openReviewModal({
      name: `${patient.first_name} ${patient.last_name}`,
      email: patient.email,
      phone: patient.contact,
      doctor: params.state.first_name + ' ' + params.state.last_name
    }))
    // }
  }

  async function handleConfirm() {
    const patient = JSON.parse(localStorage.getItem('patient'))

    const res = await fetch('http://localhost:5000/patient/appointment/', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        patient: {
          "first_name": patient.first_name,
          "last_name": patient.last_name,
          "contact": patient.contact,
          "cnic": patient.cnic
        },
        date: date.toISOString().split('T')[0],
        doctor: {
          "first_name": params.state.first_name,
          "last_name": params.state.last_name
        },
        department: params.state.name, 
        time: appointment.review.time
      })
    })

    if(res.status != 200){
      alert('Something Went Wrong')
    }

    setUpdate(prevUpdate => prevUpdate + 1)
    dispatch(closeReviewModal())
  }

  const params = useLocation()

  return (
    <DashboardOpd>
      <Typography variant='h3' sx={{ textTransform: 'capitalize' }}>{params.state.first_name + ' ' + params.state.last_name}</Typography>
      <Divider sx={{ my: 2.5 }} />

      <DoctorInfoTable doctor={params.state} update={update} />
      <AppointmentModal handleSubmit={handleSubmit} />
      <ConfirmModal handleConfirm={handleConfirm} />
    </DashboardOpd>
  )
}

export default Doctor