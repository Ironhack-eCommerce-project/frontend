import { Link } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import "../pages/Store/store.css";

function List({ products }) {
  console.log(products);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {products[0].name && (<Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12, xl: 12 }}
        justifyContent="space-evenly"
        alignItems="center"
      >
        {products.map((elem) => {
          return (
            <Grid item xs={1} sm={4} md={4} key={elem.slug}>
              <Link to={`/store/${elem.slug}`}>
                <img src={elem.image} alt={elem.name} className="listItemImg" />
              </Link>
              <Typography>{elem.category.name}</Typography>
              <Typography>{elem.name}</Typography>
              <Typography>€ {elem.price}</Typography>
            </Grid>
          );
        })}
      </Grid>)}
    </Box>
  );
}

export default List;
