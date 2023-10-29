import React from 'react';
import { Typography, Box } from '@mui/material';
import { IoIosCall, IoIosTime, IoIosPin } from 'react-icons/io';

const Top = () => {
  const iconSize = 20;
  const iconColor = 'darkblue';

  return (
    <Box display="flex" alignItems="center" marginLeft={15}>
      <Typography variant="h5" style={{ color: 'darkblue', fontWeight: 'bold' }}>
        MED
      </Typography>
      <Typography variant="h5" style={{ color: 'lightblue', fontWeight: 'bold' }}>
        DICAL
      </Typography>
      <Box display="flex" alignItems="center" flexDirection="column" marginLeft={40}>
        <Box display="flex" alignItems="center">
          <IoIosCall size={iconSize} color={iconColor} />
          <Typography variant="subtitle1" style={{ color: 'darkblue', marginLeft: '5px' }}>
            Emergency
          </Typography>
        </Box>
        <Typography variant="body2" style={{ color: 'lightblue', marginLeft: '5px' }}>
          123-456-7890
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" flexDirection="column" marginLeft={10}>
        <Box display="flex" alignItems="center">
          <IoIosTime size={iconSize} color={iconColor} />
          <Typography variant="subtitle1" style={{ color: 'darkblue', marginLeft: '5px' }}>
            Work Hours
          </Typography>
        </Box>
        <Typography variant="body2" style={{ color: 'lightblue', marginLeft: '5px', marginLeft:'100px' }}>
          9:00 AM - 5:00 PM (Mon to FRI)
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" flexDirection="column" marginLeft={10}>
        <Box display="flex" alignItems="center">
          <IoIosPin size={iconSize} color={iconColor} />
          <Typography variant="subtitle1" style={{ color: 'darkblue', marginLeft: '5px' }}>
            Location
          </Typography>
        </Box>
        <Typography variant="body2" style={{ color: 'lightblue',marginLeft:'100px' }}>
          Pechs society agha khan hospital
        </Typography>
      </Box>
    </Box>
  );
};

export default Top;
