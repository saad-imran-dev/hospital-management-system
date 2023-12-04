import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { openInputModal } from '../../../features/opdAppointment.slice';

function createData(timing) {
    return { timing, booked: false };
}

function DoctorInfoTable({ doctor, update }) {
    const dispatch = useDispatch()
    const date = new Date()
    const [data, setData] = useState([
        createData('10:00 - 10:30'),
        createData('10:30 - 11:00'),
        createData('11:00 - 11:30'),
        createData('11:30 - 12:00'),
        createData('12:00 - 12:30'),
        createData('13:00 - 13:30'),
        createData('13:30 - 14:00'),
        createData('14:00 - 14:30'),
        createData('14:30 - 15:00'),
        createData('15:00 - 15:30'),
        createData('15:30 - 16:00'),
    ])

    useEffect(() => {
        fetch(`http://localhost:5000/doctor/appointments?first_name=${doctor.first_name}&last_name=${doctor.last_name}&date=${date.toISOString().split('T')[0]}`)
            .then(async res => {
                if (res.status === 200) {
                    const result = await res.json();
                    let rows = data
                    
                    result.map((item) => {
                        for(let i=0 ; i<rows.length ; i++){
                            if(rows[i].timing === item.time){
                                rows[i].booked = true
                            }
                        }
                    })

                    setData(prevData => {
                        return prevData.map((item, index) => {
                            if(rows[index].booked){
                                item.booked = true
                            }

                            return item
                        })
                    })
                }
            })
    }, [update])

    return (
        <TableContainer component={Paper} sx={{ maxHeight: 450 }}>
            <Table stickyHeader aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" sx={{ fontWeight: 700, pl: 3 }}>Timing</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 700, }}>Status</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 700, }}>Appointment</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow
                            key={row.timing}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
                            hover
                        >
                            <TableCell component="th" scope="row" align="center">
                                {row.timing}
                            </TableCell>
                            <TableCell align="center">
                                {row.booked ? 'Booked' : 'Free'}
                            </TableCell>
                            <TableCell align="center">
                                <Button
                                    variant='contained'
                                    disabled={row.booked}
                                    onClick={() => dispatch(openInputModal(row.timing))}
                                >
                                    Continue
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default DoctorInfoTable