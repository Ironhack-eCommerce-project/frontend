import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./itemDetails.css";

import {
  Box,
  Card,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

function ItemDetails() {
  const [product, setProduct] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    const findProduct = async () => {
      const result = await axios.get(`/products/${slug}`);
      const data = await result.data;
      setProduct(data);
    };
    findProduct();
  }, [slug]);

  return (
    <>
      <Container>
        <Grid container mt={5} spacing={3}>
          {product && (
            <>
              <Grid item sm={6} md={4} lg={6}>
                <Card raised>
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                  />
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={8} lg={6}>
                <Typography variant="h5" textAlign="left" gutterBottom>
                  {product.name}
                </Typography>
                <Divider />
                <Grid sx={{ my: 3 }}>
                  <Typography variant="paragraph" component="p">
                    {product.description}
                  </Typography>
                  <Box display="flex" mt={1}>
                    <Typography component="h6" variant="h6">
                      {product.price} €
                    </Typography>
                  </Box>
                </Grid>
                <Divider sx={{ mb: 2 }} />
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </>
  );
}

export default ItemDetails;
