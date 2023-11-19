import { Paper, Table, TableRow, TableBody, TableCell, TableContainer, TableHead, TableFooter, Button, Box, Typography } from '@mui/material'
import React from 'react'

function createData(id, item, quantity, price) {
    return { id, item, quantity, price };
}

const rows = [
    createData(102763, 'Frozen yoghurt', 1, 100),
    createData(102763, 'Ice cream sandwich', 1, 100),
    createData(102763, 'Eclair', 1, 100),
    createData(102763, 'Cupcake', 1, 100),
    createData(102763, 'Gingerbread', 1, 100),
];

function ItemsTable({ handlePay }) {
    let total = 0;
    rows.map(row => { total += row.price * row.quantity })

    return (
        <Paper>
            <TableContainer sx={{ maxHeight: 350 }}>
                <Table stickyHeader aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 700, pl: 3 }}>Name</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 700, }}>Quantity</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 700, }}>Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
                                hover
                            >
                                <TableCell component="th" scope="row" sx={{ pl: 3 }}>
                                    {row.item}
                                </TableCell>
                                <TableCell align="center">
                                    {row.quantity}
                                </TableCell>
                                <TableCell align="right">
                                    {row.price * row.quantity}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ p: 2, borderTop: '1px solid rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center' }}>
                <Button variant='contained' onClick={handlePay}>Pay</Button>
                <Typography sx={{ ml: 'auto', fontWeight: 600 }}>
                    Total &#8212;
                    <Typography component={'span'}> Rs {total}</Typography>
                </Typography>
            </Box>
        </Paper>
    )
}

export default ItemsTable