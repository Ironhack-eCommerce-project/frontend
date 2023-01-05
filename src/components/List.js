import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import "../pages/Store/store.css";
import axios from "axios";
import { useState } from "react";

function List({ products }) {
  console.log("Products list", products);
  const [addCartProducts, setAddCartProducts] = useState([]);

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(e.target.id);
    const addedProduct = e.target.id;
    console.log("addedProd", addedProduct);
    setAddCartProducts([...addCartProducts, addedProduct]);
    console.log("CartProducts", addCartProducts);
    const resp = await axios.post("/cart", addCartProducts, {
      withCredentials: true,
    });
    console.log("resp:", resp);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {products[0].name && (
        <Grid container spacing={4} py={3}>
          {products.map((elem) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={4} key={elem.slug}>
                <Card raised>
                  <CardActionArea component={Link} to={`/store/${elem.slug}`}>
                    <CardMedia component="img" height="260" image={elem.image} alt={elem.name} />
                    {/* <Link to={`/store/${elem.slug}`}>
                      <img src={elem.image} alt={elem.name} className="listItemImg" />
                    </Link> */}
                    <CardContent>
                      <Typography variant="body" color="text.secondary" noWrap>
                        {elem.name}
                      </Typography>
                      <Typography variant="subtitle2" color="text.secondary" noWrap>
                        {elem.category.name}
                      </Typography>
                      <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
                        <Button
                          size="small"
                          variant="contained"
                          color="error"
                          id={elem._id}
                          onClick={handleClick}
                        >
                          Add to Cart
                        </Button>
                        <Typography variant="body1" color="text.secondary" align="right">
                          {`${elem.price} €`}
                        </Typography>
                      </CardActions>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Box>
  );
}

export default List;

//  <Grid item xs={12} sm={6} lg={3} key={elem.slug}>
//    <Link to={`/store/${elem.slug}`}>
//      <img src={elem.image} alt={elem.name} className="listItemImg" />
//    </Link>
//    <Typography>{elem.category.name}</Typography>
//    <Typography>{elem.name}</Typography>
//    <Typography>€ {elem.price}</Typography>
//    <button id={elem._id} onClick={handleClick}>
//      Add to Cart
//    </button>
//  </Grid>;
