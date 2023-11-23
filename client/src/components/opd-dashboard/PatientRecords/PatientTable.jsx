import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import PatientFilterInput from './PatientFilterInput';
import { useNavigate } from 'react-router-dom';

const patients = [
  { cnic: '1', lastName: 'Snow', firstName: 'Jon', age: 35 },
  { cnic: '2', lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { cnic: '3', lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { cnic: '4', lastName: 'Stark', firstName: 'Arya', age: 16 },
  { cnic: '5', lastName: 'Targaryen', firstName: 'Daenerys', age: 23 },
  { cnic: '6', lastName: 'Melisandre', firstName: 'null', age: 150 },
  { cnic: '7', lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { cnic: '8', lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { cnic: '9', lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function PatientTable() {
  const [filter, setFilter] = useState({
    cnic: '',
    firstName: '',
    lastName: '',
    age: '',
  })

  const navigate = useNavigate()

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
              <TableCell align="center" sx={{ fontWeight: 700, }}>Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((row) => {
              if (
                row.cnic.includes(filter.cnic) &&
                row.firstName.toLowerCase().includes(filter.firstName.toLowerCase()) &&
                row.lastName.toLowerCase().includes(filter.lastName.toLowerCase()) &&
                ((row.age !== '' && row.age == filter.age) || filter.age === '')
              ) {
                return (
                  <TableRow key={row.cnic} hover
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
                    onDoubleClick={() => navigate(`/opd/patient/${row.cnic}`)}
                  >
                    <TableCell component="th" scope="row">{row.cnic}</TableCell>
                    <TableCell>{row.firstName}</TableCell>
                    <TableCell>{row.lastName}</TableCell>
                    <TableCell align="center">{row.age}</TableCell>
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