// import { unstable_createCssVarsProvider } from "@mui/system";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";

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

function Cart() {
  const [productsInCart, setProductsInCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/cart");
      const data = await result.data;
      setProductsInCart(data);
    };
    fetchData();
  }, []);

  const totalPrice = productsInCart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);

  console.log("Total Price", totalPrice);
  console.log("Products in Cart: ", productsInCart);

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
                productsInCart.map((elem) => {
                  return (
                    <Fragment>
                      <Grid
                        item
                        xs={12}
                        md={2}
                        display="grid"
                        textAlign="center"
                        justifyContent="center"
                        alignContent="center"
                      >
                        <img src={elem.image} alt={elem.name} width="150" />
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
                        <Typography variant="inherit">{elem.name}</Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={3}
                        md={1}
                        lg={4}
                        display="grid"
                        textAlign="center"
                        justifyContent="center"
                        alignContent="center"
                      >
                        <Box>
                          <FormHelperText>Price</FormHelperText>
                          <Typography variant="inherit">{elem.price} €</Typography>
                        </Box>
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        sm={1}
                        md={2}
                        lg={1}
                        display="grid"
                        textAlign="center"
                        justifyContent="center"
                        alignContent="center"
                      >
                        <Tooltip title="Remove" placement="top">
                          <IconButton>
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </Grid>
                      <Divider />
                    </Fragment>
                  );
                })}
            </>
          </Grid>
          <Divider />
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
