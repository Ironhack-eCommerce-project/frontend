import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Homepage from "./pages/Homepage";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import AddProduct from "./pages/Store/AddProduct";
import Store from "./pages/Store/Store";
import initialProducts from "./initial-products.json"
import { useState } from "react";

function App() {
  const [products, setProducts] = useState(initialProducts);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/store" element={<Store products={products}/>} />
        <Route path="/store/:slug" element={<ItemDetails />} />
        <Route path="/addproduct" element={<AddProduct setProducts={setProducts} products={products} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
