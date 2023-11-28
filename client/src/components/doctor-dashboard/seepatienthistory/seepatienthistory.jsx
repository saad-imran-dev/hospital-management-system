import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const PatientHistory = () => {
  const patientHistory = [
    {
      name: 'Muaz Zafar',
      email: 'muazzafar@gmail.com',
      contact: '123-456-7890',
      cnic: '12345-6789012-3',
      date: 'October 15, 2023',
    },
    {
      name: 'Ammar Siddiqui',
      email: 'ammar@gmail.com',
      contact: '987-654-3210',
      cnic: '98765-4321098-7',
      date: 'November 5, 2023',
    },
    {
      name: 'Muhammad Saad',
      email: 'saad123@gmail.com',
      contact: '923-644-3329',
      cnic: '98765-4214512-7',
      date: 'November 5, 2023',
    },
  ];

  return (
    <div style={{ backgroundColor: '#f5f5f5', paddingBottom: '20px' }}>
      <Box sx={{ backgroundColor: '#333', color: '#fff', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          Doctor Portal
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/doctor/dashboard">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/doctor/Writeprescription">
            Write Prescription
          </Button>
          <Button color="inherit" component={Link} to="/doctor/Seepatienthistory">
            See Patient History
          </Button>
          <Button color="inherit" component={Link} to="/doctor/login">
            Logout
          </Button>
        </Box>
      </Box>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card style={{ maxWidth: 800, width: '90%', margin: '20px auto', padding: '20px' }}>
          <CardContent>
            <Typography variant="h5" style={{ textDecoration: 'underline' }}>
              Patient History
            </Typography>
            {patientHistory.map((patient, index) => (
              <Card key={index} style={{ backgroundColor: '#eee', padding: '15px', marginBottom: '15px' }}>
                 <Typography variant="h6" gutterBottom>
                  Patient {index + 1}
                </Typography>
                <Typography variant="body1" style={{ marginBottom: '5px' }}>
                  <strong>Name:</strong> {patient.name}
                </Typography>
                <Typography variant="body1" style={{ marginBottom: '5px' }}>
                  <strong>Email:</strong> {patient.email}
                </Typography>
                <Typography variant="body1" style={{ marginBottom: '5px' }}>
                  <strong>Contact:</strong> {patient.contact}
                </Typography>
                <Typography variant="body1" style={{ marginBottom: '5px' }}>
                  <strong>CNIC:</strong> {patient.cnic}
                </Typography>
                <Typography variant="body1" style={{ marginBottom: '15px' }}>
                  <strong>Date:</strong> {patient.date}
                </Typography>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PatientHistory;
