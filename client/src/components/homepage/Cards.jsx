import React from 'react';
import { Button, Card, CardContent, Typography, Grid } from '@mui/material';
import { LocalHospital, LocalPharmacy, Vaccines } from '@mui/icons-material';

const Cards = () => {
  return (
    <Grid container spacing={2} justifyContent={'center'}>
      <Grid>
        <Button>
          <Card style={{ backgroundColor: 'rgb(31,43,108)' }}>
            <CardContent>
              <LocalHospital fontSize="large" />
              <Typography style={{color:"white"}}>Book an appointment</Typography>
            </CardContent>
          </Card>
        </Button>
      </Grid>
      <Grid>
        <Button>
          <Card style={{ backgroundColor: 'rgb(191,210,248)' }}>
            <CardContent>
              <LocalPharmacy fontSize="large" />
              <Typography style={{color:"black"}}>Book an appointment.</Typography>
            </CardContent>
          </Card>
        </Button>
      </Grid>
      <Grid>
        <Button>
          <Card style={{ backgroundColor: 'rgb(21,158,236)' }}>
            <CardContent>
              <Vaccines fontSize="large" />
              <Typography style={{color:"white"}}>Book an appointment</Typography>
            </CardContent>
          </Card>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Cards;