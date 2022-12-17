import { Link } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import "../pages/Store/store.css";
import { useEffect, useState } from "react";

function List({ products, setCartProducts, cartProducts }) {
  console.log(products);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCartProducts({...cartProducts, ...(selectedProducts)});
    setSelectedProducts([]);
  }

  const handleChange = (e) => {
    let prod = e.target.id;
    let amount = parseInt(e.target.value)
    const obj={[prod]: amount}
    setSelectedProducts({...selectedProducts, ...(obj)})
  }
  useEffect(() => console.log("selectedProd: ", selectedProducts), [selectedProducts])
  useEffect(() => console.log("cartProd: ", cartProducts), [cartProducts])

  return (
    <Box sx={{ flexGrow: 1 }}>
      {products[0].name && (
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
                  <img
                    src={elem.image}
                    alt={elem.name}
                    className="listItemImg"
                  />
                </Link>
                <Typography>{elem.category.name}</Typography>
                <Typography>{elem.name}</Typography>
                <Typography>€ {elem.price}</Typography>
                <form onSubmit={handleSubmit} >
                  <input onChange={handleChange} id={elem._id} type="number" min="0" />
                  <button type="submit">Put in Cart</button>
                </form>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Box>
  );
}

export default List;
