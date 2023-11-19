import React from 'react';
import { Typography, Grid, Box, Link, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ArrowRightAlt } from '@mui/icons-material';

const Middle = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', margin: '40px 0' }}>
      <Typography variant="h5" style={{ color: 'lightblue', fontWeight: 'bold', marginTop: '10px' }}>
        Welcome to Meddical
      </Typography>
      <Typography variant="h4" style={{ color: 'darkblue', fontWeight: 'bold', marginTop: '5px' }}>
        A Great Place To Receive Care
      </Typography>
      <Typography style={{ marginTop: '5px' }}>
        Hospitals are institutions that deal with health care activities. They offer treatment to<br /> patients with specialized staff and equipment.
        In other words, hospitals serve humanity<br /> and play a vital role in the social welfare of any society.
      </Typography>
      <Link component="button">
        <List component="nav">
          <ListItem>
          <ListItemText primary="Learn More" />
            <ListItemIcon>
              <ArrowRightAlt  color="primary" />
            </ListItemIcon>
          </ListItem>
        </List>
      </Link>
      <img
        src={import.meta.env.BASE_URL + 'pic 2.JPG'}
        alt="Image"
        style={{ width: '70%', marginTop: '30px' }}
      />
      <img
        src={import.meta.env.BASE_URL + 'pic 3.JPG'}
        alt="Image"
        style={{ width: '50%', marginTop: '40px', border: '1px solid whitesmoke' }}
      />
    </div>
  );
};

export default Middle;
