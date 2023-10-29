import React from 'react';
import { Container, Grid, Typography, Card, CardContent, Box } from '@mui/material';
import { LocalHospital,Healing,Bloodtype,Vaccines,LocalPharmacy } from '@mui/icons-material';

const Services = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <div style={{ textAlign: 'center' }}>
        <Typography variant="h5" style={{ color: 'lightblue',fontWeight:'bold' }}>
          Always Caring
        </Typography>
        <Typography variant="h4" style={{ color: 'darkblue' ,fontWeight:'bold' }}>
          Our Specialist
        </Typography>
        <Grid container spacing={2} justifyContent="center" marginTop={10}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card style={{ backgroundColor: 'darkblue' }}>
              <CardContent>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <LocalHospital fontSize="large" style={{ color: 'white' }} />
                  <Typography variant="h6" style={{ color: 'white' }}>
                    Neurology
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card style={{ backgroundColor: 'lightblue' }}>
              <CardContent>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <LocalPharmacy fontSize="large" style={{ color: 'black' }} />
                  <Typography variant="h6" style={{ color: 'black' }}>
                    Bones
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card style={{ backgroundColor: 'darkblue' }}>
              <CardContent>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Healing fontSize="large" style={{ color: 'white' }} />
                  <Typography variant="h6" style={{ color: 'white' }}>
                    Oncology
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card style={{ backgroundColor: 'lightblue' }}>
              <CardContent>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Bloodtype fontSize="large" style={{ color: 'black' }} />
                  <Typography variant="h6" style={{ color: 'black' }}>
                    Otorhinolaryngology
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card style={{ backgroundColor: 'lightblue' }}>
              <CardContent>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Vaccines fontSize="large" style={{ color: 'black' }} />
                  <Typography variant="h6" style={{ color: 'black' }}>
                    Ophthalmology
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card style={{ backgroundColor: 'darkblue' }}>
              <CardContent>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Healing fontSize="large" style={{ color: 'white' }} />
                  <Typography variant="h6" style={{ color: 'white' }}>
                    Cardiovascular
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card style={{ backgroundColor: 'lightblue' }}>
              <CardContent>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <LocalHospital fontSize="large" style={{ color: 'black' }} />
                  <Typography variant="h6" style={{ color: 'black' }}>
                    Pulmonology
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card style={{ backgroundColor: 'darkblue' }}>
              <CardContent>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Bloodtype fontSize="large" style={{ color: 'white' }} />
                  <Typography variant="h6" style={{ color: 'white' }}>
                    Renal Medicine
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card style={{ backgroundColor: 'darkblue' }}>
              <CardContent>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Vaccines fontSize="large" style={{ color: 'white' }} />
                  <Typography variant="h6" style={{ color: 'white' }}>
                    Gastroenterology
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card style={{ backgroundColor: 'lightblue' }}>
              <CardContent>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <LocalPharmacy fontSize="large" style={{ color: 'black' }} />
                  <Typography variant="h6" style={{ color: 'black' }}>
                    Urology
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card style={{ backgroundColor: 'darkblue' }}>
              <CardContent>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Bloodtype fontSize="large" style={{ color: 'white' }} />
                  <Typography variant="h6" style={{ color: 'white' }}>
                    Dermatology
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card style={{ backgroundColor: 'lightblue' }}>
              <CardContent>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <LocalHospital fontSize="large" style={{ color: 'black' }} />
                  <Typography variant="h6" style={{ color: 'black' }}>
                    Gynaecology
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Services;
