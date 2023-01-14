import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import "../pages/Store/store.css";
import axios from "axios";
import { SERVER_ORIGIN } from "../consts";

function List({ products, setProductsInCart, productsInCart }) {
  const handleClick = async (e) => {
    e.preventDefault();
    const addedProduct = { product: e.currentTarget.id };
    console.log("AP", addedProduct);
    const resp = await axios.post(SERVER_ORIGIN + "/cart", addedProduct, {
      withCredentials: true,
      // headers: {
      //   "Access-Control-Allow-Origin": "*",
      //   "Content-Type": "application/json",
      // },
    });
    console.log("resp:", resp);
    const fetchData = async () => {
      const result = await axios.get(SERVER_ORIGIN + "/cart");
      const data = await result.data;
      setProductsInCart(data);
    };
    fetchData();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {products[0].name && (
        <Grid container spacing={4} py={3}>
          {products.map((elem) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={4} key={elem.slug}>
                <Card raised>
                  <CardActionArea component={Link} to={`/store/${elem.slug}`}>
                    <CardMedia component="img" height="260" image={elem.image} alt={elem.name} />
                    <CardContent>
                      <Typography variant="body" color="text.secondary" noWrap>
                        {elem.name}
                      </Typography>
                      <Typography variant="subtitle2" color="text.secondary" noWrap>
                        {elem.category.name}
                      </Typography>
                      <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
                        <Button
                          size="small"
                          variant="contained"
                          color="error"
                          id={elem._id}
                          onClick={handleClick}
                        >
                          Add to Cart
                        </Button>
                        <Typography variant="body1" color="text.secondary" align="right">
                          {`${elem.price} €`}
                        </Typography>
                      </CardActions>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Box>
  );
}

export default List;
