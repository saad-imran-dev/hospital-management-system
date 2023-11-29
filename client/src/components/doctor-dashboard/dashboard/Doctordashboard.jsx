import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box, Button, Card, CardContent } from '@mui/material';

const Doctordashboard = () => {
  const doctorInfo = {
    firstName: 'John',
    lastName: 'Doe',
    department: 'Cardiology',
    contactNumber: '123-456-7890',
    email: 'john.doe@gmail.com',
  };

  return (
    <Box sx={{ backgroundColor: '#f0f0f0' }}>
      <Box
        sx={{
          backgroundColor: '#333',
          color: '#fff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <Typography variant="h6" component="div">
          Doctor Portal
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/doctor/dashboard">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/doctor/writeprescription">
            Write Prescription
          </Button>
          <Button color="inherit" component={Link} to="/doctor/Seepatienthistory">
            See-Patient-History
          </Button>
          <Button color="inherit" component={Link} to="/doctor/login">
            Logout
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 'calc(100vh - 64px)', // Adjust to compensate for the navbar height
        }}
      >
        <Card
          sx={{
            width: '80%',
            backgroundColor: '#f5f5f5', // Light grey background
            padding: '20px',
            fontSize: '1.2rem', // Increased font size
          }}
        >
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Doctor Information
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Name: {doctorInfo.firstName} {doctorInfo.lastName}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Department: {doctorInfo.department}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Contact Number: {doctorInfo.contactNumber}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Email: {doctorInfo.email}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Doctordashboard;
