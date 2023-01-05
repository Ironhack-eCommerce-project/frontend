import { Grid } from "@mui/material";
import React from "react";

function NotFound() {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        textAlign="center"
        justifyContent="center"
        style={{ minHeight: "90vh" }}
      >
        <Grid item xs={3}>
          <h1>404</h1>
          <h4>Page not found</h4>
        </Grid>
      </Grid>
    </>
  );
}

export default NotFound;
