import { Fragment } from "react";

import {
  Box,
  Container,
  Divider,
  FormHelperText,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PayButton from "../../utils/PayButton";
import axios from "axios";

function Cart({ productsInCart, setProductsInCart }) {
  const totalPrice = productsInCart.reduce((acc, curr) => acc + curr.product.price, 0).toFixed(2);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/cart/${e.currentTarget.id}`, {
        withCredentials: true,
      });

      const fetchData = async () => {
        const result = await axios.get("/cart");
        const data = await result.data;
        setProductsInCart(data);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }

    const resp = await axios.delete(`/cart/${e.currentTarget.id}`, {
      withCredentials: true,
    });
    console.log("resp:", resp);
  };

  return (
    <>
      <h2>Cart</h2>
      <hr />
      <br />
      <>
        <Container>
          <Grid container gap={2}>
            <>
              {productsInCart[0] &&
                productsInCart.map((elem, index) => {
                  return (
                    <Fragment key={elem._id}>
                      <Grid
                        item
                        xs={12}
                        md={2}
                        display="grid"
                        textAlign="center"
                        justifyContent="center"
                        alignContent="center"
                      >
                        <img src={elem.product.image} alt={elem.product.name} width="150" />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={7}
                        md={6}
                        lg={4}
                        display="grid"
                        textAlign="center"
                        justifyContent="center"
                        alignContent="center"
                      >
                        <Typography variant="inherit">{elem.product.name}</Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={3}
                        md={1}
                        lg={3}
                        display="grid"
                        textAlign="center"
                        justifyContent="center"
                        alignContent="center"
                      >
                        <Box>
                          <FormHelperText>Price</FormHelperText>
                          <Typography variant="inherit">{elem.product.price} €</Typography>
                        </Box>
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        sm={1}
                        md={1}
                        lg={1}
                        display="grid"
                        textAlign="center"
                        justifyContent="center"
                        alignContent="center"
                      >
                        <Tooltip title="Remove" placement="top">
                          <IconButton onClick={handleClick} id={elem._id}>
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </Grid>
                      <Divider variant="middle" />
                    </Fragment>
                  );
                })}
              <Divider variant="middle" />
            </>
          </Grid>
          <Typography variant="h6" align="right" my={2}>
            Total: {totalPrice} €
          </Typography>
        </Container>

        <Box display="flex" gap justifyContent={"center"} my>
          <PayButton cartItems={productsInCart} />
        </Box>
      </>
    </>
  );
}

export default Cart;
