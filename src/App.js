import { Route, Routes } from "react-router-dom";
import { Box, Container } from "@mui/material";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Home from "./pages/Home";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import Store from "./pages/Store/Store";

function App() {
  return (
    <Box>
      <Container>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/:slug" element={<ItemDetails />} />
        </Routes>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
