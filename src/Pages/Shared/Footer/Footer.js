import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import { Link, useHistory } from "react-router-dom";

const Footer = () => {
    const history = useHistory();
  const handleGoToHome = () => {
    history.push("/");
  };
    return (
        <Box style={{backgroundColor:'#ECFCFF',marginTop:'40px',padding:'50px'}}>
      <Box sx={{display: 'flex',
          justifyContent: 'space-between', alignItems: 'center' }} >
        <Box onClick={handleGoToHome}>
        <Typography variant="h4" component="div" gutterBottom >
       Drone Zone
      </Typography>
        </Box>
        <Box className="flex justify-between flex-col	">
          <Typography variant="h5" component="div" gutterBottom >Important Links</Typography>
          <nav className="flex flex-col	">
            <Link to="/home" style={{textDecoration:'none',color:'black',display:'block'}}>Home</Link>
            <Link to="/drones" style={{textDecoration:'none',color:'black',display:'block'}}>Drones</Link>
            <Link to="/register" style={{textDecoration:'none',color:'black',display:'block'}}>Register</Link>
            <Link to="/login" style={{textDecoration:'none',color:'black',display:'block'}}>Login</Link>
          </nav>
        </Box>
      </Box>
      <Typography variant="body" component="div" gutterBottom style={{textAlign:'center'}} >© 2021 All rights reserved.</Typography>
    </Box>
    );
};

export default Footer;