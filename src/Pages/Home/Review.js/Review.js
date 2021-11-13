import React from "react";
import { Grid, Rating, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Box } from "@mui/system";
const Review = ({ reviews }) => {
  const primary = blue[700];
  const { review, name, rating } = reviews;
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={6}
      sx={{ backgroundColor: primary, m: 1, pr: 3, pb: 2 }}
      style={{ width: "100px" }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          py: 2,
          px: 3,
        }}
      >
        <Typography variant="body1" gutterBottom component="div">
          {review}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          Rating <Rating name="read-only" value={rating} readOnly />
        </Box>
      </Box>
      <br />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ marginRight: "15px" }}>
          by
          <span style={{ fontSize: "1.2em", fontWeight: "500" }}> {name}</span>
        </span>
        <img
          src="https://i.ibb.co/0XN9LVb/avatar-png-11554021819gij72acuim-removebg-preview.png"
          alt=""
          width="50px"
        />
      </Box>
    </Grid>
  );
};

export default Review;
