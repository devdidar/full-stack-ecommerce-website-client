import React from 'react';
import { Button, CardMedia, Grid } from "@mui/material"
import Typography from "@mui/material/Typography";
import { deepPurple } from '@mui/material/colors';
const Blog = ({blog}) => {
    const { name, image, description } = blog;
  const primary = deepPurple[600]
    return (
        <Grid
      item
      xs={12}
      container
      alignItems='center'
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
      <Grid item xs={12} sm={12} md={4}>
        <Typography variant="h5" gutterBottom component="div">
          {name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {description}
        </Typography>
      </Grid>
      <Grid item xs={4}>
          <Button variant="contained" sx={{backgroundColor:primary}}>Learn More</Button>
      </Grid>
    </Grid>
    );
};

export default Blog;