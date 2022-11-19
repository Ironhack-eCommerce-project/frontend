import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import Store from "./pages/Store/Store";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:slug" element={<ItemDetails />} />
      </Routes>
    </div>
  );
}

export default App;
