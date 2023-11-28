import React, { useState} from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, InputBase, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {

  const navigate = useNavigate()
  return (
    <div>
    <AppBar position="static" style={{ backgroundColor: 'black' ,width:'100%', marginTop:'10px'}}>
      <Toolbar style={{marginLeft:'90px'}}>
      <Link to = {'/'} style= {{color : 'white'}}>
        <Button color="inherit" onClick={()=> navigation.navigate('/')} >Home</Button>
        </Link>
        <Link to = {'/Aboutus'} style= {{color : 'white'}}>
          <Button color="inherit" onClick={()=> navigation.navigate('/Aboutus')}>AboutUS</Button>
        </Link>
        <Link to = {'/doctorpage'} style= {{color : 'white'}}>
          <Button color="inherit" onClick={()=> navigation.navigate('/doctorpage')}>Doctors</Button>
        </Link>
        <div style={{ flexGrow: 1 }}></div>
        <Link to = {'/patient/login'} style= {{color : 'white'}}>
        <Button color="inherit" onClick={() => navigation.navigate('/patient/login')}>
          Login
        </Button>
        </Link>
      </Toolbar>
    </AppBar>
    <img
        src={import.meta.env.BASE_URL + 'pic 1.JPG'}
        alt="Hospital Building"
        style={{ width: '100%', height: '400px' }}
      />
      </div>
  );
};

export default Nav;
