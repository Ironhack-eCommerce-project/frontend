import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "../../components/List";
import "./store.css";
import AddProduct from "./AddProduct";

function Store() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/products");
      const data = await result.data;
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Products</h1>
      <List products={products} />
      <AddProduct />
    </>
  );
}

export default Store;
