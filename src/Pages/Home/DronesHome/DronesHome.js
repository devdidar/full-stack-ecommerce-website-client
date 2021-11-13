import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Drone from '../Drone/Drone';

const DronesHome = () => {
    const [drones, setDrones] = useState([]);
  useEffect(() => {
    fetch("https://immense-brushlands-03739.herokuapp.com/dronesHome")
      .then((res) => res.json())
      .then((data) => setDrones(data));
  }, []);
    return (
        <Container sx={{ width: "100%", mt: 3 }}>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        style={{ textAlign: "center" }}
      >
        Best Drones Your Ever See
      </Typography>
      <Grid container sx={{ gap: 2 }}>
        {drones.map((drone) => (
          <Drone key={drone._id} drone={drone}></Drone>
        ))}
      </Grid>
    </Container>
    );
};

export default DronesHome;