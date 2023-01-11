import React from "react";
import { Grid } from "@mui/material";

function CheckoutSucess() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
      sx={{ marginTop: "calc(10% - 120px)" }}
    >
      <Grid item>
        <h1>Thanks for your order!</h1>
      </Grid>
    </Grid>
  );
}

export default CheckoutSucess;
