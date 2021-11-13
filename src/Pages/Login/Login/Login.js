import React from "react";
import { Typography, Container } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { logInUser } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    logInUser(data.email, data.password, location, history);
  };
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        p: 1,
        mt: 5,
      }}
    >
      <Box>
        <Typography variant="h5" gutterBottom component="div">
          Log In
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Enter Your Email"
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
            type="password"
            {...register("password", { required: true })}
            placeholder="Enter Your Password"
            style={{
              margin: "5px",
              width: "300px",
              padding: "5px 8px",
              border: "1px solid #6029BA",
              outline: "none",
            }}
          />
          <br />
          {errors.exampleRequired && <span>This field is required</span>}
          <input
            type="submit"
            value="Log In"
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
        <span>Don't have an account?</span>
        <Link to="/register">
          <button
            style={{
              marginLeft: "10px",
              padding: "10px 15px",
              cursor: "pointer",
              backgroundColor: "#6029BA",
              borderRadius: "5px",
              color: "white",
              outline: "none",
              border: "none",
            }}
          >
            Register
          </button>
        </Link>
      </Box>
    </Container>
  );
};

export default Login;
