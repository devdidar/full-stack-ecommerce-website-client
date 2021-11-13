import * as React from "react";
import './Navigation.css';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { deepPurple } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Navigation = () => {
  const { user, logOut } = useAuth();
  const primary = deepPurple[600];
  return (
    <Container sx={{ flexGrow: 1, mb: 3 }}>
      <Grid container spacing={2} alignItems="center" className='header'>
        <Grid item xs={12} md={6}>
          <Link
            to="/"
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: "#5E35B1",
            }}
          >
            <Typography variant="h4" gutterBottom component="div">
              Drone Zone
            </Typography>
          </Link>
        </Grid>
        <Grid
          justifyContent="flex-end"
          alignItems="center"
          container
          item
          md={6}
          style={{ float: "right" }}
          sx={{ fontSize: "h6.fontSize" }}
        >
          <Link
            to="/home"
            style={{
              textDecoration: "none",
              color: "black",
              marginRight: "15px",
            }}
          >
            Home
          </Link>
          <Link
            to="/drones"
            style={{
              textDecoration: "none",
              color: "black",
              marginRight: "15px",
            }}
          >
            Drones
          </Link>
          {user?.email && (
            <Link
              to="/dashboard"
              style={{
                textDecoration: "none",
                color: "black",
                marginRight: "15px",
              }}
            >
              Dashboard
            </Link>
          )}
          {user?.email ? (
            <Button
              onClick={logOut}
              variant="contained"
              sx={{ backgroundColor: primary }}
            >
              Log Out
            </Button>
          ) : (
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "black",
                marginRight: "15px",
              }}
            >
              <Button variant="contained" sx={{ backgroundColor: primary }}>
                Log In
              </Button>
            </Link>
          )}
        </Grid>
      </Grid>
      
    </Container>
  );
};

export default Navigation;
