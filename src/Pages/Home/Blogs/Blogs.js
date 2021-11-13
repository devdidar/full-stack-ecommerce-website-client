import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Blog from "../Blog/Blog";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://immense-brushlands-03739.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <Container sx={{ width: "100%", mt: 3 }}>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        style={{ textAlign: "center" }}
      >
        Our Blogs
      </Typography>
      <Grid container sx={{ gap: 2 }}  columns={{ xs: 12, sm: 12, md: 12 }}>
        {blogs.map((blog) => (
          <Blog key={blog._id} blog={blog}></Blog>
        ))}
      </Grid>
    </Container>
  );
};

export default Blogs;
