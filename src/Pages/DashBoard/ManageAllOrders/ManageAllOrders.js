
import React,{useState,useEffect} from 'react';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder'

const ManageAllOrders = () => {
    const [orders,setOrders] = useState([])
    useEffect(()=>{
        fetch('https://immense-brushlands-03739.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[orders])
    return (
        <Container sx={{ width: "100%", mt: 3 }}>
        <Typography
          variant="h4"
          gutterBottom
          component="div"
          style={{ textAlign: "center" }}
        >
        All Orders: {orders.length}
        </Typography>
        <Grid container sx={{ gap: 2 }}  columns={{ xs: 12, sm: 12, md: 12 }}>
          {orders.map((order) => (
            <ManageAllOrder key={order._id} order={order}></ManageAllOrder>
          ))}
        </Grid>
      </Container>
    );
};

export default ManageAllOrders;