import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import { openInputModal } from '../../../features/opdAppointment.slice';

function createData(timing, booked) {
    return { timing, booked };
}

const rows = [
    createData('10:30 - 11:00', false),
    createData('11:00 - 11:30', true),
    createData('11:30 - 12:00', false),
    createData('12:00 - 12:30', false),
    createData('13:00 - 13:30', true),
    createData('13:30 - 14:00', false),
    createData('14:00 - 14:30', true),
    createData('14:30 - 15:00', false),
    createData('15:00 - 15:30', true),
    createData('15:30 - 16:00', true),
];

function DoctorInfoTable() {
    const dispatch = useDispatch()

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
                    {rows.map((row) => (
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