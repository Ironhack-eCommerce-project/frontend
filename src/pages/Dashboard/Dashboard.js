import { useState } from "react";
import AddProduct from "../../components/AddProduct";
import DeleteProduct from "../../components/DeleteProduct";
import EditProduct from "../../components/EditProduct";

function Dashboard({ products, setProducts }) {

  /* All Edit forms are opened, should only be the one clicked */
  const [editButtonClicked, setEditButtonClicked] = useState(false);

  const handleClick = (e) => {    
    setEditButtonClicked(!editButtonClicked);
    console.log("Buttons clicked", editButtonClicked);
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
              <button id={elem.slug} onClick={handleClick}>
                Edit Product
              </button>
              {editButtonClicked && (                
                  <EditProduct                    
                    product={elem}
                    setEditButtonClicked={setEditButtonClicked}
                    setProducts={setProducts}
                  />
              )}
            </div>
          );
        })}
      </ul>
      <h2>Add new Product</h2>
      <AddProduct setProducts={setProducts} />
    </div>
  );
}

export default Dashboard;
