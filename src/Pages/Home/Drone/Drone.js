import { Button, CardMedia, Grid } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { deepPurple } from '@mui/material/colors';

const Drone = ({ drone }) => {
  const primary = deepPurple[600]
  const { name, image, price, description } = drone;
  return (
    <Grid
      item
      xs={12}
      container
      spacing={2}
      style={{
        boxShadow: " 0 5px 20px 0 rgb(166, 142, 245)",
      }}
      sx={{
        boxShadow: 0,
        m: 1,
        p: 1,
      }}
    >
      <Grid item xs={12} sm={12} md={4}>
        <CardMedia
          style={{
            width: "200px",
          }}
          component="img"
          height="200px"
          image={image}
          alt="green iguana"
        />
      </Grid>
      <Grid item xs={12}sm={12} md={4}>
        <Typography variant="h5" gutterBottom component="div">
          {name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {description}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <p className="text-xl">${price}</p>
        <Link to={`/drone/${drone._id}`} style={{textDecoration:'none'}}>
          <Button variant="contained" sx={{backgroundColor:primary}}>Buy Now</Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Drone;
