import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import FilterByCategory from "../../components/FilterByCategory";
import List from "../../components/List";
import "./store.css";

function Store({ products, categories, setProducts, cartProducts, setCartProducts }) {
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([products]);
  console.log("FILTERED PROD", filteredProducts);

  useEffect(() => {
    selectedCategoryId !== "Show all" && selectedCategoryId !== ""
      ? setFilteredProducts(
          products.filter((elem) => elem.category._id === selectedCategoryId)
        )
      : setFilteredProducts(products);
  }, [selectedCategoryId, products]);

  return (
    <>
      <Container>
        <h1>Products</h1>
        <FilterByCategory
          categories={categories}
          selectedCategoryId={selectedCategoryId}
          setSelectedCategoryId={setSelectedCategoryId}
        />
        {filteredProducts[0] && (
          <List
            products={filteredProducts}
            setCartProducts={setCartProducts}
            cartProducts={cartProducts}
          />
        )}
      </Container>
    </>
  );
}

export default Store;
