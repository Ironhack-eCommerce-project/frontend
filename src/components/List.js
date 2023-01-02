import { Link } from "react-router-dom";
import "../pages/Store/store.css";
import axios from "axios";
import { useState } from "react";
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";

function List({ products }) {
  console.log(products);  
  const [addCartProducts, setAddCartProducts] = useState([]);

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(e.target.id);
    const addedProduct = e.target.id;
    console.log("addedProd", addedProduct);
    setAddCartProducts([...addCartProducts, addedProduct]);
    console.log("CartProducts", addCartProducts)
    const resp = await axios.post("/cart", addCartProducts, {
      withCredentials: true,
    });
    console.log("resp:", resp);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {products[0].name && (
        <Grid
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
                <button id={elem._id} onClick={handleClick}>Put in Cart</button>
              </Grid>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea component={Link} to={`/store/${elem.slug}`}>
                  <CardMedia component="img" height="200" image={elem.image} alt={elem.name} />
                  <CardContent>
                    <Typography>{elem.category}</Typography>
                    <Typography>{elem.name}</Typography>
                    <Typography sx={{ fontWeight: "bold" }}>€ {elem.price}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
        </Grid>
      )}
    </Box>
  );
}

export default List;
