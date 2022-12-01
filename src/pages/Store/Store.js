import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import axios from "axios";
import List from "../../components/List";
import "./store.css";
import AddProduct from "./AddProduct";

function Store() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/products");
      const data = await result.data;
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Container>
        <h1>Products</h1>
        <List products={products} />
      </Container>

      <AddProduct />
    </>
  );
}

export default Store;
