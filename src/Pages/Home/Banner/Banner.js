import React from 'react';
import { Container,Typography,Grid,CardMedia,Button } from '@mui/material';import { deepPurple
} from "@mui/material/colors";
import { Link } from 'react-router-dom';

const Banner = () => {
    const primary = deepPurple[600];
    return (
        <Container sx={{ flexGrow: 1  }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={7}>
        <CardMedia
        component="img"
        image="https://i.ibb.co/CnBv724/png-clipart-drone-uav-cartoon-removebg-preview.png"
        alt="green iguana"
      />
        </Grid>
        <Grid item xs={12} md={5}>
        <Typography variant="h3" gutterBottom component="div" sx={{ fontWeight: 'medium' }}>
        MANY GREAT WAYS TO USE DRONES
      </Typography>
        <Typography variant="body1" gutterBottom component="div" >
        We Currently Operate in the Brooklyn area outside of a 20 mile radius may require travel expenses.
      </Typography>
      <Link to='/drones' style={{textDecoration:'none'}}>
      <Button variant="contained" sx={{ backgroundColor: primary }}>Explore</Button>
      </Link>
        </Grid>
      </Grid>
            
        </Container>
    );
};

export default Banner;