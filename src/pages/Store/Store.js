import React, { useState } from "react";
import initialProducts from "../../initial-products.json";
import List from "../../components/List";
import "./store.css"

function Store() {
  const [products, setProducts] = useState(initialProducts);
  return (
    <>
      <h1>Products:</h1>
      <List products={products}/>
    </>
  );
}

export default Store;
