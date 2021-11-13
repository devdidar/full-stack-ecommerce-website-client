import { Button, CardMedia, Grid } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import { deepPurple,green,yellow } from '@mui/material/colors';

const ManageAllOrder = ({ order }) => {
  const primary = deepPurple[600]
  const greenColor = green[600]
  const yellowColor = yellow[600]
  const { orderName, image, price, description,status } = order;

  const updateStatus = id =>{
    fetch(`https://immense-brushlands-03739.herokuapp.com/updateStatus`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({id})
    }).then(res=>res.json())
    .then(data=>{
    })
  }
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
      <Grid item xs={12} sm={12} md={4}>
        <Typography variant="h5" gutterBottom component="div">
          {orderName}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {description}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <p className="text-xl">${price}</p>
        <Typography style={{width:'150px',padding:'3px 5px'}} variant="h5" gutterBottom component="div" sx={ status === 'pending'?{backgroundColor:yellowColor}:{backgroundColor:greenColor} }>
          {status}
          </Typography>
          <Button onClick={()=>updateStatus(order._id)} variant="contained" sx={{backgroundColor:primary}}>Ship Now</Button>
      </Grid>
    </Grid>
  );
};

export default ManageAllOrder;

