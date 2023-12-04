import { faSquareCheck, faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function createData(id, name, available, timing) {
    return { id, name, available, timing };
}

const rows = [
    createData(102763, 'Frozen yoghurt', false, '10:00 to 15:00'),
    createData(102763, 'Ice cream sandwich', true, '9:00 to 5:00'),
    createData(102763, 'Eclair', true, '10:00 to 15:00'),
    createData(102763, 'Cupcake', false, '10:00 to 15:00'),
    createData(102763, 'Gingerbread', true, '9:00 to 5:00'),
    createData(102763, 'Frozen yoghurt', true, '9:00 to 5:00'),
    createData(102763, 'Ice cream sandwich', true, '9:00 to 5:00'),
    createData(102763, 'Eclair', false, '6:00 to 23:00'),
    createData(102763, 'Cupcake', true, '9:00 to 5:00'),
    createData(102763, 'Gingerbread', true, '9:00 to 5:00'),
    createData(102763, 'Frozen yoghurt', false, '6:00 to 23:00'),
    createData(102763, 'Ice cream sandwich', true, '9:00 to 5:00'),
    createData(102763, 'Eclair', true, '9:00 to 5:00'),
    createData(102763, 'Cupcake', false, '6:00 to 23:00'),
    createData(102763, 'Gingerbread', true, '9:00 to 5:00'),
];

function DoctorTable({ name }) {
    const navigate = useNavigate()

    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/doctor').then(async data => {
            if (data.status === 200) {
                const result = await data.json();
                console.log(result)
                let docs = []
                result.map(item => {
                    if (item.dept_name == name) {
                        docs.push({ ...item, available: true, timing: '9:00am to 5:00pm' })
                    }
                })
                setDoctors(docs)
            }
        })
    }, [])

    return (
        <TableContainer component={Paper} sx={{ maxHeight: 450 }}>
            <Table stickyHeader aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 700, pl: 3 }}>Name</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 700, }}>Available</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 700, }}>Timing</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {doctors.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
                            hover
                            onDoubleClick={() => navigate(`/opd/doctor/${row.id}`, { state: { ...row, name } })}
                        >
                            <TableCell component="th" scope="row" sx={{ pl: 3 }}>
                                {row.first_name}{' '}{row.last_name}
                            </TableCell>
                            <TableCell align="center">
                                {row.available && <FontAwesomeIcon icon={faSquareCheck} size='lg' style={{ color: 'green' }} />}
                                {!row.available && <FontAwesomeIcon icon={faSquareXmark} size='lg' style={{ color: 'red' }} />}
                            </TableCell>
                            <TableCell align="center">
                                {row.timing}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default DoctorTable