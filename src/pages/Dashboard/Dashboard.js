import { useState } from "react";
import AddCategory from "../../components/AddCategory";
import AddProduct from "../../components/AddProduct";
import DeleteProduct from "../../components/DeleteProduct";
import EditCategory from "../../components/EditCategory";
import EditProduct from "../../components/EditProduct";

function Dashboard({ products, setProducts, categories, setCategories }) {
  /* All Edit forms are opened, should only be the one clicked */
  const [editProductButtonClicked, setEditProductButtonClicked] = useState(false);
  const [editCategoryButtonClicked, setEditCategoryButtonClicked] = useState(false);

  const handleProductEditClick = (e) => {
    setEditProductButtonClicked(!editProductButtonClicked);
    console.log("Buttons clicked", editProductButtonClicked);
  };

  const handleCategoryEditClick = (e) => {
    setEditCategoryButtonClicked(!editCategoryButtonClicked);
  };

  return (
    <div>
      <h2>List of Products</h2>
      <ul>
        {products.map((elem) => {
          return (
            <div key={elem.name}>
              <h3>{elem.name}</h3>
              <DeleteProduct elem={elem} setProducts={setProducts} />
              {editProductButtonClicked && (
                <EditProduct
                  product={elem}
                  setProducts={setProducts}
                  categories={categories}
                  setEditProductButtonClicked={setEditProductButtonClicked}
                />
              )}
            </div>
          );
        })}
      </ul>
      <button onClick={handleProductEditClick}>Edit Products</button>
      <h2>Add new Product</h2>
      <AddProduct setProducts={setProducts} categories={categories} />
      <h2>List of Categories</h2>
      <ul>
        {categories.map((elem) => {
          return (
            <div key={elem.name}>
              <h3>{elem.name}</h3>
              {editCategoryButtonClicked && (
                <EditCategory
                  category={elem}
                  setCategories={setCategories}
                  setEditCategoryButtonClicked={setEditCategoryButtonClicked}
                />
              )}
            </div>
          );
        })}
      </ul>
      <button onClick={handleCategoryEditClick}>Edit Categories</button>
      <h2>Add new Category</h2>
      <AddCategory setCategories={setCategories} />
    </div>
  );
}

export default Dashboard;
