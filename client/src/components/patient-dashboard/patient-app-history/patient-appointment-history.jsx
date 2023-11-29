import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Top from '../../homepage/top';
import NavWithoutImage from './nav-without-image';
import Footer from '../../homepage/footer';

const AppointmentHistory = () => {
  const appointmentHistory = [
    {
      doctorName: 'Dr. Muaz',
      date: 'September 10, 2023',
      department: 'Neurology',
    },
    {
      doctorName: 'Dr. Saad',
      date: 'November 1 , 2023',
      department: 'Orthopedics',
    },
    {
      doctorName: 'Dr. Mariam',
      date: 'November 12, 2023',
      department: 'Oncology',
    },
  ];

  return (
    <div style={{ backgroundColor: '#f5f5f5', paddingTop: '20px', paddingBottom: '20px' }}>
      <Top />
      <NavWithoutImage />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card style={{ maxWidth: 800, width: '90%', margin: '20px auto', padding: '20px' }}>
          <CardContent>
            <Typography variant="h5" style={{ textDecoration: 'underline' }}>
              Appointment History
            </Typography>
            {appointmentHistory.map((appointment, index) => (
              <Card key={index} style={{ backgroundColor: '#eee', padding: '15px', marginBottom: '15px' }}>
                <Typography variant="h6" gutterBottom>
                  Appointment {index + 1}
                </Typography>
                <Typography variant="body1" style={{ marginBottom: '5px' }}>
                  <strong>Doctor:</strong> {appointment.doctorName}
                </Typography>
                <Typography variant="body1" style={{ marginBottom: '5px' }}>
                  <strong>Department:</strong> {appointment.department}
                </Typography>
                <Typography variant="body1" style={{ marginBottom: '15px' }}>
                  <strong>Date:</strong> {appointment.date}
                </Typography>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default AppointmentHistory;
