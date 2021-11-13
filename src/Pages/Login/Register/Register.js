import { Typography, Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { createUser } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.name,data.email, data.password, location, history);
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
          Create your Drone Zone account
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Enter Your Name"
            style={{ margin: "5px", width: "300px", padding: "5px 8px",border: "1px solid #6029BA",
            outline: "none", }}
          />
          <br />
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Enter Your Email"
            style={{ margin: "5px", width: "300px", padding: "5px 8px",border: "1px solid #6029BA",
            outline: "none", }}
          />
          <br />
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Enter Your Password"
            style={{ margin: "5px", width: "300px", padding: "5px 8px",border: "1px solid #6029BA",
            outline: "none", }}
          />
          <br />
          {errors.exampleRequired && <span>This field is required</span>}
          <input
            type="submit"
            value="Create account"
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
        <span>have an account?</span>
        <Link to="/login">
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
            Login
          </button>
        </Link>
      </Box>
    </Container>
  );
};

export default Register;
