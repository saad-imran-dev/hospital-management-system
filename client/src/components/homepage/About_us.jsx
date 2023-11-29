import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Top from './top';
import Nav from './nav';
import Footer from './footer';

const AboutUs = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', paddingTop: '20px', paddingBottom: '20px' }}>
      <Top />
      <Nav />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card style={{ maxWidth: 800, width: '90%', margin: '20px auto', padding: '20px' }}>
          <CardContent>
            <Typography variant="h5" style={{ textDecoration: 'underline' }}>
              About Our Hospital
            </Typography>
            <Typography variant="body1" style={{ marginTop: '15px' }}>
              Our mission at Meddical Hospital is to provide exceptional healthcare services to our community. We are committed to delivering compassionate care, using innovative technology, and fostering a healing environment for our patients.
            </Typography>
            <Typography variant="body1" style={{ marginTop: '15px' }}>
              Our dedicated team of doctors, nurses, and support staff works tirelessly to ensure the well-being of our patients. With a focus on excellence and patient-centric care, we strive to meet the diverse medical needs of our community.
            </Typography>
            <Typography variant="body1" style={{ marginTop: '15px' }}>
              Meddical Hospital is equipped with state-of-the-art facilities and the latest medical advancements to provide comprehensive healthcare services. We aim to create a positive impact on the lives of those we serve by promoting wellness and improving health outcomes.
            </Typography>
            <Typography variant="body1" style={{ marginTop: '15px' }}>
              Thank you for choosing Meddical Hospital for your healthcare needs. We are honored to be your partner on your journey to health and wellness.
            </Typography>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
