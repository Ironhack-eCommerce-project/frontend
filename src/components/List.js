import { Link } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import "../pages/Store/store.css";

function List({ products }) {
  console.log(products);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="space-evenly"
        alignItems="center"
      >
        {products.map((elem) => {
          return (
            <Grid item xs={2} sm={4} md={4} key={elem.slug}>
              <Link to={`/store/${elem.slug}`}>
                <img src={elem.image} alt={elem.name} className="listItemImg" />
              </Link>
              <p>{elem.category}</p>
              <h2>{elem.name}</h2>
              <h2>€ {elem.price}</h2>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default List;
