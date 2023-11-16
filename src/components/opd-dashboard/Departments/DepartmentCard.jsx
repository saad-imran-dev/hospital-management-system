import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import heart from './../../../assets/heart.png'

function DepartmentCard({ department, doctors, available }) {
    return (
        <Link to={`/opd/department/${department}`} style={{ textDecoration: 'none', color: 'black' }} >
            <Card elevation={2} sx={{ maxWidth: 300, '&:active': { boxShadow: 0 } }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        sx={{ width: "95%", mx: 'auto' }}
                        image={heart}
                        alt="image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ textTransform: 'capitalize' }}>
                            {department}
                        </Typography>

                        <Stack direction='row' spacing={2.5} >
                            <Typography variant="body2" color="text.secondary">
                                Doctors: {doctors}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Available: {available}
                            </Typography>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
}

export default DepartmentCard