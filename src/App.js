import { Route, Routes } from "react-router-dom";
import { Box, Container, CssBaseline, GlobalStyles } from "@mui/material";
import "./App.css";
// import Footer from "./components/Footer";
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
import AddProduct from "./components/AddProduct";
import CheckoutSuccess from "./pages/Cart/CheckoutSuccess";
import NotFound from "./components/NotFound";
import { SERVER_ORIGIN } from "./consts";

function App() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getUser = async () => {
    try {
      const result = await axios.get(SERVER_ORIGIN + "/users/login/success", {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
      const data = await result.data;
      setUser(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log(user);

  // console.log("PRODUCTS: ", products);

  const [productsInCart, setProductsInCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/cart");
      const data = await result.data;
      setProductsInCart(data);
    };
    fetchData();
  }, []);

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
    <>
      <CssBaseline />
      <GlobalStyles styles={{ body: { backgroundColor: "#ffffffcc" } }} />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        margin="0"
      >
        <Navbar productsInCart={productsInCart} />
        <Container>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route
              path="/store"
              element={
                <Store
                  products={products}
                  setProducts={setProducts}
                  categories={categories}
                  setProductsInCart={setProductsInCart}
                  productsInCart={productsInCart}
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
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/cart" element={<Cart productsInCart={productsInCart} />} />
            <Route path="/checkout-success" element={<CheckoutSuccess />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
        {/* <Footer /> */}
      </Box>
    </>
  );
}

export default App;
