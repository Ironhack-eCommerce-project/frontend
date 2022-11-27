import React, { useEffect, useState } from "react";
import axios from "axios";
// import initialProducts from "../../initial-products.json";
import List from "../../components/List";
import "./store.css";

function Store() {
  const [products, setProducts] = useState([]);

  //fetch data using axios

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
    </>
  );
}

export default Store;
