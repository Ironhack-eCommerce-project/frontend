import { Box, Button, Container, Divider, Grid, List, ListItem, Paper } from "@mui/material";
import { Fragment, useState } from "react";
import AddCategory from "../../components/AddCategory";
import AddProduct from "../../components/AddProduct";
import DeleteProduct from "../../components/DeleteProduct";
import EditCategory from "../../components/EditCategory";
import EditProduct from "../../components/EditProduct";

function Dashboard({ products, setProducts, categories, setCategories }) {
  /* All Edit forms are opened, should only be the one clicked */
  const [editProductButtonClicked, setEditProductButtonClicked] = useState(false);
  const [editCategoryButtonClicked, setEditCategoryButtonClicked] = useState(false);

  const handleProductEditClick = (e) => {
    setEditProductButtonClicked(!editProductButtonClicked);
    console.log("Buttons clicked", editProductButtonClicked);
  };

  const handleCategoryEditClick = (e) => {
    setEditCategoryButtonClicked(!editCategoryButtonClicked);
  };

  return (
    <Container>
      <Box sx={{ mx: 3, my: 3 }}>
        <h2>List of Products</h2>
        <Paper>
          <ul>
            {products.map((elem) => {
              return (
                <div key={elem.name}>
                  <h3>{elem.name}</h3>
                  <DeleteProduct elem={elem} setProducts={setProducts} />
                  {editProductButtonClicked && (
                    <EditProduct
                      product={elem}
                      setProducts={setProducts}
                      categories={categories}
                      setEditProductButtonClicked={setEditProductButtonClicked}
                    />
                  )}
                </div>
              );
            })}
          </ul>
          <button onClick={handleProductEditClick}>Edit Products</button>
        </Paper>
        <Divider variant="middle" />
        <h2>Add new Product</h2>
        <AddProduct setProducts={setProducts} categories={categories} />
      </Box>
      <Divider variant="middle" />

      <h2>List of Categories</h2>
      <Paper>
        <Grid container gap={2}>
          <>
            {categories.map((elem) => {
              return (
                <List key={elem.name}>
                  <ListItem>{elem.name}</ListItem>

                  {editCategoryButtonClicked && (
                    <EditCategory
                      category={elem}
                      setCategories={setCategories}
                      setEditCategoryButtonClicked={setEditCategoryButtonClicked}
                    />
                  )}
                  <Divider variant="middle" />
                </List>
              );
            })}
          </>
        </Grid>

        <Button variant="contained" onClick={handleCategoryEditClick}>
          Edit Categories
        </Button>
      </Paper>
      <Divider variant="middle" />
      <h2>Add new Category</h2>
      <AddCategory setCategories={setCategories} />
    </Container>
  );
}

export default Dashboard;
