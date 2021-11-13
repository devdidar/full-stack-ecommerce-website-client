import React from 'react';
import { Button, CardMedia, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { red,yellow,green } from '@mui/material/colors';
const MyOrder = ({myOrder}) => {
  const redColor = red[600];
    const yellowColor = yellow[600];
    const greenColor = green[600];
  const { orderName, image, price, description,_id ,status } = myOrder;

  const cancelOrder = (id)=>{
    const confirm = window.confirm('are you sure?');
    if(confirm){
      fetch('https://immense-brushlands-03739.herokuapp.com/cancelOrder',{
        method:'DELETE',
        headers:{
  'content-type':'application/json'
        },
        body:JSON.stringify({id})
      }).then(res=>res.json())
      .then(data=> {
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
            <Button onClick={()=>cancelOrder(_id)} variant="contained" sx={{backgroundColor:redColor}}>Cancel</Button>
        </Grid>
      </Grid>
    );
};

export default MyOrder;