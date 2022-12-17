import { Route, Routes } from "react-router-dom";
import { Box, Container } from "@mui/material";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Profile from "./pages/Auth/Profile";
import Store from "./pages/Store/Store";
import Dashboard from "./pages/Dashboard/Dashboard";
import { useEffect, useState } from "react";
import axios from "axios";
import Cart from "./pages/Cart/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  console.log("PRODUCTS: ", products);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/products");
      const data = await result.data;
      setProducts(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/categories");
      const data = await result.data;
      setCategories(data);
    };
    fetchData();
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      margin="0"
    >
      <Navbar />
      <Container>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/store"
            element={
              <Store
                products={products}
                setProducts={setProducts}
                categories={categories}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
              />
            }
          />
          <Route path="/store/:slug" element={<ItemDetails />} />
          <Route
            path="/dashboard"
            element={
              <Dashboard
                products={products}
                setProducts={setProducts}
                categories={categories}
                setCategories={setCategories}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
              />
            }
          />
        </Routes>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
