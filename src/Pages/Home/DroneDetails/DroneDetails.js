import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import useAuth from "../../hooks/useAuth";

const DroneDetails = () => {
  const [droneDetails, setDroneDetails] = useState({});
  const { user } = useAuth();
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://immense-brushlands-03739.herokuapp.com/drone/${id}`)
      .then((res) => res.json())
      .then((data) => setDroneDetails(data));
  }, []);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.orderName = droneDetails.name;
    data.image = droneDetails.image;
    data.price = droneDetails.price;
    data.description = droneDetails.description;
    data.status = "pending";
    fetch("https://immense-brushlands-03739.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          window.alert("Ordered Successfully");
          reset();
        }
      });
  };
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              style={{
                width: "400px",
              }}
              height="400"
              image={droneDetails.image}
              alt="green iguana"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{ fontWeight: "medium" }}
              variant="h4"
              gutterBottom
              component="div"
            >
              {droneDetails.name}
            </Typography>
            <Typography variant="h5" gutterBottom component="div">
              ${droneDetails.price}
            </Typography>
            <Typography variant="body1" gutterBottom component="div">
              {droneDetails.description}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 1,
          mt: 5,
        }}
      ></Container>
      <Typography
        variant="h5"
        gutterBottom
        component="div"
        sx={{ fontWeight: "medium" }}
      >
        Fill up the form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue={user.displayName}
          {...register("name", { required: true })}
          style={{
            margin: "5px",
            width: "300px",
            padding: "5px 8px",
            border: "1px solid #6029BA",
            outline: "none",
          }}
        />
        <br />
        <input
          value={user.email}
          {...register("email", { required: true })}
          style={{
            margin: "5px",
            width: "300px",
            padding: "5px 8px",
            border: "1px solid #6029BA",
            outline: "none",
          }}
        />
        <br />
        <input
          {...register("phone", { required: true })}
          type="number"
          placeholder="Enter Your Phone"
          style={{
            margin: "5px",
            width: "300px",
            padding: "5px 8px",
            border: "1px solid #6029BA",
            outline: "none",
          }}
        />
        <br />
        <textarea
          {...register("address", { required: true })}
          placeholder="Enter Your Address"
          style={{
            margin: "5px",
            width: "300px",
            height: "200px",
            padding: "5px 8px",
            border: "1px solid #6029BA",
            outline: "none",
          }}
        />
        <br />
        {errors.exampleRequired && <span>This field is required</span>}
        <input
          type="submit"
          value="Place order"
          style={{
            margin: "5px",
            padding: "10px 15px",
            cursor: "pointer",
            backgroundColor: "#6029BA",
            borderRadius: "5px",
            color: "white",
            outline: "none",
            border: "none",
          }}
        />
      </form>
    </Container>
  );
};

export default DroneDetails;
