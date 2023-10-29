import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, InputBase, Paper } from '@mui/material';
import { IoIosSearch } from 'react-icons/io';

const Nav = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div>
    <AppBar position="static" style={{ backgroundColor: 'darkblue' ,width:'100%', marginTop:'10px'}}>
      <Toolbar style={{marginLeft:'90px'}}>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About Us</Button>
        <Button color="inherit">Services</Button>
        <Button color="inherit">Doctors</Button>
        <Button color="inherit">News</Button>
        <Button color="inherit">Contact</Button>
        <div style={{ flexGrow: 1 }}></div>
        <IconButton color="inherit" onClick={handleSearchClick}>
          <IoIosSearch />
        </IconButton>
        <Button color="inherit" onClick={() => console.log('Appointment button clicked')}>
          Appointment
        </Button>
      </Toolbar>
      {searchOpen && (
        <Paper component="form" style={{ padding: '5px', display: 'flex' }}>
          <InputBase
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search' }}
            style={{ flex: 1 }}
          />
          <IconButton type="submit" color="primary" aria-label="search">
            <IoIosSearch />
          </IconButton>
        </Paper>
      )}
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
