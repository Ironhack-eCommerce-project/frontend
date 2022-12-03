import { Link } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import "../pages/Store/store.css";
import DeleteProduct from "./DeleteProduct";

function List({ products, setProducts }) {
  console.log(products);
 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
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
              <Typography>{elem.category}</Typography>
              <Typography>{elem.name}</Typography>
              <Typography>€ {elem.price}</Typography>
              <DeleteProduct elem={elem} setProducts={setProducts} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default List;
