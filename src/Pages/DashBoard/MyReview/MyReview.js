import { Alert, Button, Container, Rating, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { deepPurple } from "@mui/material/colors";
import { Box } from "@mui/system";
const MyReview = () => {
  const primary = deepPurple[600];
  const [value, setValue] = React.useState(3);
  const { user } = useAuth();
  const [successful, setSuccessful] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.name = user.displayName;
    data.rating = value;
    fetch("https://immense-brushlands-03739.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccessful(true);
        reset();
      });
  };
  return (
    <Container>
      <Typography variant="h3" gutterBottom component="div">
        Tell Something About Us
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          {...register("review", { required: true })}
          placeholder="write here..."
          rows="15"
          cols="45"
          style={{ border: "1px solid #5E35B1", outline: "none" }}
        />
        <br />
        <Box display="flex" alignItems="center" sx={{ mt: 3 }}>
          <span style={{ marginRight: "5px" }}>Give Rating</span>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
        <br />
        {errors.exampleRequired && <span>This field is required</span>}

        <input
          type="submit"
          style={{
            backgroundColor: primary,
            color: "white",
            border: "none",
            padding: "10px 81px",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        />
      </form>
      {successful && <Alert severity="success">Thank you so much</Alert>}
    </Container>
  );
};

export default MyReview;
