import { Container,Typography,Grid } from '@mui/material';
import React ,{useState,useEffect} from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("https://immense-brushlands-03739.herokuapp.com/drones")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, [products]);
    return (
            <Container sx={{ width: "100%", mt: 3 }}>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        style={{ textAlign: "center" }}
      >
         All Products in the Store : {products.length}
      </Typography>
      <Grid container sx={{ gap: 2 }}  columns={{ xs: 12, sm: 12, md: 12 }}>
        {products.map((product) => (
          <ManageProduct key={product._id} product={product}></ManageProduct>
        ))}
      </Grid>
    </Container>
    );
};

export default ManageProducts;