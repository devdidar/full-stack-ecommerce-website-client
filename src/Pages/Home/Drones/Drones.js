import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Drone from "../Drone/Drone";
import Footer from "../../Shared/Footer/Footer";
import { Box } from "@mui/system";
import Navigation from "../../Shared/Navigation/Navigation";
const Drones = () => {
  const [drones, setDrones] = useState([]);
  useEffect(() => {
    fetch("https://immense-brushlands-03739.herokuapp.com/drones")
      .then((res) => res.json())
      .then((data) => setDrones(data));
  }, []);
  return (
    <Box>
      <Navigation />
    <Container sx={{ width: "100%", mt: 3 }}>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        style={{ textAlign: "center" }}
      >
        Best Drones Your Ever See
      </Typography>
      <Grid container sx={{ gap: 2 }} columns={{ xs: 12, sm: 12, md: 12 }}>
        {drones.map((drone) => (
          <Drone key={drone._id} drone={drone}></Drone>
        ))}
      </Grid>
    </Container>
      <Footer />
      </Box>
  );
};

export default Drones;
