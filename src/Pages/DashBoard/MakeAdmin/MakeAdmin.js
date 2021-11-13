import React, { useState } from "react";
import { TextField, Button, Alert ,Container,Typography} from "@mui/material";
import {deepPurple} from "@mui/material/colors"
import { useForm } from "react-hook-form";


const MakeAdmin = () => {
  const [success, setSuccess] = useState(false);
  const primary= deepPurple[600]
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const onSubmit = data => {
    fetch("https://immense-brushlands-03739.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
          reset();
        }
      });
  };
  return (
    <Container>
        <Typography variant="h5" gutterBottom component="div">
        Make An Admin
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          type="email"
          label="Email"
          variant="standard"
          sx={{width:'25%'}}
          {...register("email", { required: true })} 
        />
        <br />
        <Button sx={{ mt: 2 ,backgroundColor:primary}} type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success">Made Admin Successfully</Alert>}
    </Container>
  );
};

export default MakeAdmin;