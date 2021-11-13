import { Button, CardMedia, Grid } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import { red } from '@mui/material/colors';

const ManageProduct = ({ product }) => {
  const primary = red[700]
  const { name, image, price, description } = product;

  const productDelete = id =>{
    const confirm = window.confirm('are you sure?');
    if(confirm){
fetch('https://immense-brushlands-03739.herokuapp.com/deleteProduct',{
        method:'DELETE',
        headers:{
  'content-type':'application/json'
        },
        body:JSON.stringify({id})
      }).then(res=>res.json())
      .then(data=>{
        if(data.deletedCount){
            window.alert('Deleted Successfully')
          }
      })
    }
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
          {name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {description}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <p className="text-xl">${price}</p>
          <Button onClick={()=>productDelete(product._id)} variant="contained" sx={{backgroundColor:primary}}>Delete Product</Button>
      </Grid>
    </Grid>
  );
};

export default ManageProduct;
