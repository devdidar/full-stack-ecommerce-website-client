import { Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../hooks/useAuth';
const DashboardHome = () => {
    const {user} = useAuth();
    return (
        <div>
             <Typography variant="h4" gutterBottom component="div">
             Welcome {user.displayName}
      </Typography>
        </div>
    );
};

export default DashboardHome;