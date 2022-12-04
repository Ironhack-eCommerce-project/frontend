import { Route, Routes } from "react-router-dom";
import { Box, Container } from "@mui/material";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Profile from "./pages/Auth/Profile";
import Store from "./pages/Store/Store";
import ItemDetails from "./pages/ItemDetails/ItemDetails";

function App() {
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
          <Route path="/store" element={<Store />} />
          <Route path="/store/:slug" element={<ItemDetails />} />
        </Routes>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
