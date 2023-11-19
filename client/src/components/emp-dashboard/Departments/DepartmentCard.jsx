import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import heart from './../../../assets/heart.png'
import React from 'react'

function DepartmentCard({ department, doctors, available }) {
    return (
        <Card elevation={4} sx={{ maxWidth: 300 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    sx={{ width: "95%", mx: 'auto' }}
                    image={heart}
                    alt="image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
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
    )
}

export default DepartmentCard