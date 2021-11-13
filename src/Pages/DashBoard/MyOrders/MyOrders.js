import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Container, Grid, Typography } from "@mui/material";
import MyOrder from "../MyOrder/MyOrder";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(
      `https://immense-brushlands-03739.herokuapp.com/myOrders/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user.email, myOrders]);
  if (myOrders.length < 1) {
    return (
      <Typography variant="h3" gutterBottom component="div">
        Order Not Found
      </Typography>
    );
  } else {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <Typography variant="h3" gutterBottom component="div">
            My Orders: {myOrders.length}
          </Typography>
        </div>
        <Container sx={{ width: "100%", mt: 3 }}>
          <Grid container sx={{ gap: 2 }} columns={{ xs: 12, sm: 12, md: 12 }}>
            {myOrders.map((myOrder) => (
              <MyOrder key={myOrder._id} myOrder={myOrder}></MyOrder>
            ))}
          </Grid>
        </Container>
      </div>
    );
  }
};

export default MyOrders;
