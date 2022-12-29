import { Link } from "react-router-dom";
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";

function List({ products }) {
  console.log(products);

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
