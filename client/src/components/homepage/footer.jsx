import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { Facebook, LinkedIn, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '30px 0', marginTop:'100px' }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h4" style={{ marginBottom: '10px', color:"lightblue" }}>
              Meddical
            </Typography>
            <Typography variant="body2">
              We are dedicated to providing quality healthcare to our community.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h5" style={{ marginBottom: '10px' }}>
              Important Links
            </Typography>
            <Typography>
              <a href="/appointment" style={{ color: 'white', fontSize:"12px",textDecoration:'None' }}>
                Appointment
              </a>
            </Typography>
            <Typography>
              <a href="/doctors" style={{ color: 'white', textDecoration: 'none', fontSize:"12px" }}>
                Doctors
              </a>
            </Typography>
            <Typography>
              <a href="/services" style={{ color: 'white', textDecoration: 'none', fontSize:"12px" }}>
                Services
              </a>
            </Typography>
            <Typography>
              <a href="/about" style={{ color: 'white', textDecoration: 'none', fontSize:"12px" }}>
                About Us
              </a>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h5" style={{ marginBottom: '10px' }}>
              Contact Us
            </Typography>
            <Typography>
              Call Us: +123-456-7890
            </Typography>
            <Typography>
              Email: info@meddical.com
            </Typography>
            <Typography>
              Address: ABC hospital PECHS, karachi, Pakistan
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <hr style={{ border: '1px solid white', marginTop: '30px',width:"80%" }} />
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="20px">
          <Typography variant="body2">2021 Meddical. All rights reserved by Pvt Ltd.</Typography>
          <Box display="flex" alignItems="center">
            <Facebook style={{ marginRight: '10px' }} />
            <LinkedIn style={{ marginRight: '10px' }} />
            <YouTube />
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
