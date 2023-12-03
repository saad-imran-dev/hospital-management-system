import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PatientFilterInput from './PatientFilterInput';
import { useNavigate } from 'react-router-dom';

function PatientTable() {
  const [patients, setPatients] = useState([])

  const [filter, setFilter] = useState({
    cnic: '',
    firstName: '',
    lastName: '',
    age: '',
  })

  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:5000/patient').then(async data => {
      if (data.status === 200) {
        const result = await data.json();
        setPatients(result)
      }
    })
  }, [])

  return (
    <Paper>
      <PatientFilterInput
        filter={filter}
        handleChange={(e) => setFilter(prevFilter => ({
          ...prevFilter,
          [e.target.name]: e.target.value
        }))}
      />

      <TableContainer sx={{ maxHeight: 350 }}>
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 700, }}>CNIC</TableCell>
              <TableCell sx={{ fontWeight: 700, }}>First Name</TableCell>
              <TableCell sx={{ fontWeight: 700, }}>Last Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((row) => {
              if (
                row.cnic.includes(filter.cnic) &&
                row.first_name.toLowerCase().includes(filter.firstName.toLowerCase()) &&
                row.last_name.toLowerCase().includes(filter.lastName.toLowerCase()) &&
                ((row.age !== '' && row.age == filter.age) || filter.age === '')
              ) {
                return (
                  <TableRow key={row.cnic} hover
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
                    onDoubleClick={() => navigate(`/opd/patient/${row.cnic}`, { state: row })}
                  >
                    <TableCell component="th" scope="row">{row.cnic}</TableCell>
                    <TableCell>{row.first_name}</TableCell>
                    <TableCell>{row.last_name}</TableCell>
                  </TableRow>
                )
              }
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default PatientTable