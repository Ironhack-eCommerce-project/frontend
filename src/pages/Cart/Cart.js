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

function Cart({ productsInCart }) {
  const totalPrice = productsInCart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);

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
                    <Fragment key={index}>
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
                        lg={3}
                        display="grid"
                        textAlign="center"
                        justifyContent="center"
                        alignContent="center"
                      >
                        <Grid item>
                          <FormHelperText>Price</FormHelperText>
                          <Typography variant="inherit">{elem.price} €</Typography>
                        </Grid>
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
                          <IconButton>
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
