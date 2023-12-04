import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Button, TextField, TextareaAutosize } from '@mui/material';
import { Link } from 'react-router-dom';

const WritePrescription = () => {
  const [prescriptionData, setPrescriptionData] = useState({
    patientName: '',
    date: '',
    prescription: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPrescriptionData({
      ...prescriptionData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    // Perform actions upon form submission or data storage
    fetch('')
  };

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
          <Button color="inherit" component={Link} to="/doctor/write-prescription">
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
        <Card style={{ maxWidth: 800, width: '95%', margin: '20px auto', padding: '20px', backgroundColor: '#ccc', minHeight: '70vh' }}>
          <CardContent>
            <Typography variant="h5" style={{ textDecoration: 'underline' }}>
              Write Prescription
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                margin="normal"
                label="Patient Name"
                name="patientName"
                value={prescriptionData.patientName}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                margin="normal"
                type="date"
                name="date"
                value={prescriptionData.date}
                onChange={handleInputChange}
              />
              <TextareaAutosize
                rows={8}
               placeholder="Prescription"
                name="prescription"
                value={prescriptionData.prescription}
                onChange={handleInputChange}
                style={{ width: '100%', marginTop: '20px', resize: 'vertical', minHeight: '150px', '::placeholder': {fontSize: '1.2em' }}}
              />
              <Button type="submit" variant="contained" style={{ marginTop: '20px' }}>
                Submit Prescription
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WritePrescription;
