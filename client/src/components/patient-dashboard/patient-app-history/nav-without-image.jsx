import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, InputBase, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'

const Nav_without_image = () => {
   const navigate=useNavigate()
  return (
    <div>
    <AppBar position="static" style={{ backgroundColor: 'darkblue' ,width:'100%', marginTop:'10px'}}>
      <Toolbar style={{marginLeft:'90px'}}>
        <Link to = {'/patient/dashboard'} style= {{color : 'white'}}>
        <Button color="inherit" onClick={()=> navigation.navigate('/patient/dashboard')} >Home</Button>
        </Link>
        <Link to = {'/patient/appointment'} style= {{color : 'white'}}>
        <Button color="inherit" onClick={()=> navigation.navigate('/patient/appointment')} >Book Appointment</Button>
        </Link>
        <Link to = {'/patient/history'} style= {{color : 'white'}}>
        <Button color="inherit" onClick={()=> navigation.navigate('/patient/history')} >Appointment History</Button>
        </Link>
        <Link to = {'/patient/prescription'} style= {{color : 'white'}}>
        <Button color="inherit" onClick={()=> navigation.navigate('/patient/prescription')} >See Prescription</Button>
        </Link>
        <div style={{ flexGrow: 1 }}></div>
        <Link to = {'/patient/login'} style= {{color : 'white'}}>
        <Button color="inherit" onClick={()=> navigation.navigate('/patient/login')} >Logout</Button>
        </Link>
      </Toolbar>
    </AppBar>
    </div>
  );
};

export default Nav_without_image;
