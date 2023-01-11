import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import FilterByCategory from "../../components/FilterByCategory";
import List from "../../components/List";
import "./store.css";

function Store({ products, categories, setProductsInCart, productsInCart }) {
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
        <Box>
          <h1>Products</h1>
        </Box>
        <Box>
          <FilterByCategory
            categories={categories}
            selectedCategoryId={selectedCategoryId}
            setSelectedCategoryId={setSelectedCategoryId}
          />
          {filteredProducts[0] && (
            <List
              products={filteredProducts}
              setProductsInCart={setProductsInCart}
              productsInCart={productsInCart}
            />
          )}
        </Box>
      </Container>
    </>
  );
}

export default Store;
