import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Top from './top';
import Nav from './nav';
import Footer from './footer';

const DoctorsList = () => {
  const departments = [
    {
      name: 'Neurology',
      doctors: [
        { name: 'Dr. Fakhar Zaman', experience: '10 years', education: 'MD in Neurology' },
        { name: 'Dr. Abdullah Shafique', experience: '8 years', education: 'MD in Neurology' },
        { name: 'Dr Mitchell Starc' , experience: '2 years' , education:'Mbbs in neurology'}
      ],
    },
    {
      name: 'Bones',
      doctors: [
        { name: 'Dr. Rizwan', experience: '10 years', education: 'MD in Bones' },
        { name: 'Dr. Khushdil Shah', experience: '3 years', education: 'Mbbs in Bones' },
        { name: 'Dr Wasim' , experience: '2 years' , education:'Mbbs in Bones'}
      ],
    },
    {
      name: 'Cardiology',
      doctors: [
        { name: 'Dr. Babar Azam', experience: '12 years', education: 'MD in Cardiology' },
        { name: 'Dr. Saud Shakeel', experience: '6 years', education: 'MD in Cardiology' },
        { name: 'Dr David Warner' , experience: '1 years' , education:'Mbbs in Cardiology'}
      ],
    },
    {
      name: 'Oncology',
      doctors: [
        { name: 'Dr. Virat Kohli', experience: '7 years', education: 'MD in Oncology' },
        { name: 'Dr. Rohit Sharma', experience: '3 years', education: 'MD in Oncology' },
        { name: 'Dr  Misbah' , experience: '1 years' , education:'Mbbs in Oncology'}
      ],
    },
    {
      name: 'Gynaecology',
      doctors: [
        { name: 'Dr. Shaheen Afridi', experience: '10 years', education: 'MD in Gynaecology' },
        { name: 'Dr. Muneeba Ali', experience: '2 years', education: 'Mbbs in Gynaecology' },
        { name: 'Dr Faiza Saleem' , experience: '2 years' , education:'Mbbs in Gynaecology'}
      ],
    },
    {
      name: 'Dermatology',
      doctors: [
        { name: 'Dr. Kane Williamson', experience: '5 years', education: 'MD in Dermatology' },
        { name: 'Dr. Ish Sodhi', experience: '3 years', education: 'MD in Dermatology' },
        { name: 'Dr Ammar Siddiqui' , experience: '1 years' , education:'Mbbs in Dermatology'}
      ],
    },
  ];

  return (
    <div style={{ backgroundColor: '#f5f5f5', paddingTop: '20px', paddingBottom: '20px' }}>
      <Top />
      <Nav />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card style={{ maxWidth: 800, width: '90%', margin: '20px auto', padding: '20px' }}>
          <CardContent>
            <Typography variant="h5" style={{ textDecoration: 'underline' }}>
              Doctors List
            </Typography>
            {departments.map((department, index) => (
              <Card key={index} style={{ marginTop: '20px',backgroundColor:'lightgray' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {department.name}
                  </Typography>
                  {department.doctors.map((doctor, docIndex) => (
                    <div key={docIndex} style={{ marginBottom: '10px' }}>
                      <Typography variant="subtitle1" gutterBottom>
                        {doctor.name}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Experience: {doctor.experience}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Education: {doctor.education}
                      </Typography>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorsList;
