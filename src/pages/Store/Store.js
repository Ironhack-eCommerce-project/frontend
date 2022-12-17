import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import FilterByCategory from "../../components/FilterByCategory";
import List from "../../components/List";
import "./store.css";

function Store({ products, categories, setProducts }) {
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([products]);
  console.log("FILTERED PROD", filteredProducts);

  useEffect(() => {
    selectedCategoryId !== "Show all"
      ? setFilteredProducts(products.filter((elem) => elem.category._id === selectedCategoryId))
      : setFilteredProducts(products);
  }, [selectedCategoryId, products]);

  return (
    <>
      <Box>
        <h1>Products</h1>
      </Box>
      <Box>
        <FilterByCategory
          categories={categories}
          selectedCategoryId={selectedCategoryId}
          setSelectedCategoryId={setSelectedCategoryId}
        />
      </Box>
      <Box>{filteredProducts[0] && <List products={filteredProducts} />}</Box>
    </>
  );
}

export default Store;
