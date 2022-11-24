import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Homepage from "./pages/Homepage";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import Store from "./pages/Store/Store";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:slug" element={<ItemDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
