import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Review from '../Review.js/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
      fetch(`https://immense-brushlands-03739.herokuapp.com/review`)
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }, [reviews]);
    return (
        <Container>
          <Box mb={2}>
            <Typography variant="h4" component="h3"  align="center"  sx={{my:4}}>What People are Saying</Typography>
          </Box>
          <Grid container spacing={2}  sx={{ flexGrow: 1, }} 
  justifyContent="center"
  alignItems="center">
            {
                reviews.map(review=><Review key={review._id} reviews={review}></Review>)
            }
          </Grid>
      </Container>
    );
    
};

export default Reviews;