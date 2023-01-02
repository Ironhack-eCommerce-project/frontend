import axios from "axios";
import { useEffect, useState } from "react";
import { slugify } from "../functions";

function EditProduct({
  product,
  setEditProductButtonClicked,
  setProducts,
  categories,
}) {
  const [editedProduct, setEditedProduct] = useState(product);

  const handleChange = (e) => {
    setEditedProduct((old) => {
      let newValue = e.target.value;
      console.log("EPCN", editedProduct.category.name);
      if (typeof old[e.target.name] === "number") {
        newValue = parseFloat(e.target.value);
      }
      if (e.target.name === "category") {
        console.log(
          "ETARGET: ",
          e.target.name,
          e.target.value,
          editedProduct.category.name
        );
      }
      return { ...old, [e.target.name]: newValue };
    });
  };
  useEffect(() => console.log(editedProduct.category.name), [editedProduct]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      editedProduct.slug = slugify(editedProduct.name);
      const resp = await axios.put(`/products/${product.slug}`, editedProduct);
      console.log(resp);
      /* As in Add/Delete Product the following function just to refresh what is shown. Should probably be improved in the future */
      const fetchData = async () => {
        const result = await axios.get("/products");
        const data = await result.data;
        setProducts(data);
      };
      fetchData();
      setEditProductButtonClicked(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            value={editedProduct.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            name="description"
            value={editedProduct.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            min="0"
            step="0.01"
            name="price"
            value={editedProduct.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Image:
          <input
            name="image"
            value={editedProduct.image}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Category:
          <select
            
            onChange={handleChange}
            name="category"
            value={editedProduct.category._id}
          >
            {categories.map((category) => {
              console.log("THIS", editedProduct.category._id, category._id);
              return (
                <option
                  key={category.slug}
                  value={category._id}
                  
                >
                  {category.name}
                </option>
              );
            })}
          </select>
        </label>
        <button type="submit">Save changes</button>
      </form>
    </div>
  );
}

export default EditProduct;
