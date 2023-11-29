import React, { useState } from 'react';
import { TextField, Button, MenuItem, Box } from '@mui/material';
import { Event, AccessTime, Edit } from '@mui/icons-material';
import Top from '../../homepage/top';
import App_nav from './app_nav';
import Footer from '../../homepage/footer';
const doctorsByDepartment = {
  Neurology: [
    {
      first_name : 'Dr',
      last_name : 'Smith'
    },
    {
      first_name:'Dr',
      last_name :'Muaz'
    }
  ],
   Orthopedics: [
    {
      first_name : 'Dr',
      last_name : 'Watson'
    },
    {
      first_name:'Dr',
      last_name :'Ammar'
    }
  ],
   Ocology: [
    {
      first_name : 'Dr',
      last_name : 'Saad'
    },
    {
      first_name:'Dr',
      last_name :'David'
    }
  ],
   Cardiology: [
    {
      first_name : 'Dr',
      last_name : 'Ali'
    },
    {
      first_name:'Dr',
      last_name :'Anderson'
    }
  ]
};
const AppointmentForm = () => {
  const departments = ['Neurology', 'Orthopedics', 'Oncology', 'Cardiology']; // Add your departments here

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    date: '',
    time: '',
    department: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log('Form submitted:', formData);
    // Clear form fields after submission (optional)
    setFormData({
      firstName: '',
      lastName: '',
      date: '',
      time: '',
      department: '',
    });
  };
  const handleDepartmentChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      department: value,
      doctor: '', // Reset doctor selection when department changes
    });
  };
  return (
    <div>
      <Top />
      <App_nav />
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" bgcolor="lightgrey" marginTop={10} >
      <form onSubmit={handleSubmit} style={{ width: '50%', margin: '20px auto' }}>
        <TextField
          name="firstName"
          label="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
          InputProps={{
            endAdornment: <Edit />,
          }}
          style={{ margin: '10px 0' ,border:'1px solid black'}}
          fullWidth
        />
        <TextField
          name="lastName"
          label="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
          InputProps={{
            endAdornment: <Edit />,
          }}
          style={{ margin: '10px 0', border:'1px solid black' }}
          fullWidth
        />
        <TextField
          name="date"
          type='date'
          value={formData.date}
          onChange={handleInputChange}
          style={{ margin: '10px 0',border:'1px solid black' }}
          fullWidth
        />
        <TextField
          name="time"
          select
          label="Time"
          value={formData.time}
          onChange={handleInputChange}
          style={{ margin: '10px 0' ,border:'1px solid black'}}
          fullWidth
        >
          {/* Populate options for time */}
          {Array.from(Array(5).keys()).map((hour) => (
            <MenuItem key={hour} value={`${hour + 4}:00`}>{`${hour + 9}:00`}</MenuItem>
          ))}
        </TextField>
        <TextField
            name="department"
            select
            label="Department"
            value={formData.department}
            onChange={handleDepartmentChange}
            style={{ margin: '10px 0', border: '1px solid black' }}
            fullWidth
          >
            {departments.map((department) => (
              <MenuItem key={department} value={department}>{department}</MenuItem>
            ))}
          </TextField>
          <TextField
  name="doctor"
  select
  label="Doctor"
  value={formData.doctor}
  onChange={handleInputChange}
  style={{ margin: '10px 0', border: '1px solid black' }}
  fullWidth
  disabled={!formData.department}
  SelectProps={{
    renderValue: (selected) => (selected ? selected : 'Select Doctor'),
  }}
  >
  {formData.department
    ? doctorsByDepartment[formData.department]?.map((doctor, index) => (
        <MenuItem key={index} value={`${doctor.first_name} ${doctor.last_name}`}>
          {`${doctor.first_name} ${doctor.last_name}`}
        </MenuItem>
      ))
    : null}
</TextField>

        <Button variant="contained" color="primary" type="submit" style={{ margin: '20px 0',marginTop:'30px' }}>
          Submit
        </Button>
      </form>
    </Box>
    <Footer />
    </div>
  );
};

export default AppointmentForm;
