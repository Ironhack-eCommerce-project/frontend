import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Store, Work, Storage, MedicalServices } from "@mui/icons-material";
import { useState } from "react";
import AddCategory from "../../components/AddCategory";
import AddProduct from "../../components/AddProduct";
import DeleteProduct from "../../components/DeleteProduct";
import EditProduct from "../../components/EditProduct";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const itemsList = [
  { text: "Store", icon: <Store />, route: "/store" },
  { text: "Products", icon: <Work />, route: "" },
  { text: "Add Product", icon: <MedicalServices />, route: "" },
  { text: "Categories", icon: <Storage />, route: "" },
];

function Dashboard({ products, setProducts, categories, setCategories }) {
  /* All Edit forms are opened, should only be the one clicked */
  const [editButtonClicked, setEditButtonClicked] = useState(false);

  const handleClick = (e) => {
    setEditButtonClicked(!editButtonClicked);
    console.log("Buttons clicked", editButtonClicked);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography>Dashboard</Typography>
        </Toolbar>
        <Divider />
        <List>
          {itemsList.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton component={Link} to={item.route}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <h2>List of Products</h2>
        <ul>
          {products.map((elem) => {
            return (
              <div key={elem.name}>
                <h3>{elem.name}</h3>
                <DeleteProduct elem={elem} setProducts={setProducts} />
                <button id={elem.slug} onClick={handleClick}>
                  Edit Product
                </button>
                {editButtonClicked && (
                  <EditProduct
                    product={elem}
                    setEditButtonClicked={setEditButtonClicked}
                    setProducts={setProducts}
                    categories={categories}
                  />
                )}
              </div>
            );
          })}
        </ul>
        <h2>Add new Product</h2>
        <AddProduct setProducts={setProducts} categories={categories} />
        <h2>List of Categories</h2>
        <ul>
          {categories.map((elem) => {
            return (
              <div key={elem.name}>
                <h3>{elem.name}</h3>
              </div>
            );
          })}
        </ul>
        <h2>Add new Category</h2>
        <AddCategory setCategories={setCategories} />
      </Box>
    </Box>
  );
}

export default Dashboard;
