import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Top from '../../homepage/top';
import NavWithoutImage from '../patient-app-history/nav-without-image';
import Footer from '../../homepage/footer';

const Prescription = () => {
  const prescription = {
    doctorName: 'Dr. Muaz',
    date: 'November 25, 2023',
    patientName: 'Ammar Siddiqui',
    patientAge: 22,
    department: 'Cardiology',
    medicine: ['Medicine A', 'Medicine B', 'Medicine C'],
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5', paddingTop: '20px', paddingBottom: '20px' }}>
      <Top />
      <NavWithoutImage />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card style={{ maxWidth: 600, margin: '20px auto', padding: '20px' }}>
          <CardContent>
            <Typography variant="h5" style={{ textDecoration: 'underline',fontWeight:'bold' }}>
              Prescription
            </Typography>
            <Typography variant="subtitle1" gutterBottom style={{ textDecoration: 'underline' }}>
              Doctor: {prescription.doctorName} | Date: {prescription.date} | Department: {prescription.department}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Patient: {prescription.patientName}, Age: {prescription.patientAge}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Medicine:</strong>
            </Typography>
            <ul>
              {prescription.medicine.map((med, index) => (
                <li key={index}>{med}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Prescription;
