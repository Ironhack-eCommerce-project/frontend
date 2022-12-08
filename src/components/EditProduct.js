import axios from "axios";
import { useState } from "react";
import { slugify } from "../functions";

function EditProduct({ product, setEditButtonClicked, setProducts, categories }) {
  const [editedProduct, setEditedProduct] = useState(product);

  const handleChange = (e) => {
    setEditedProduct((old) => {
      let newValue = e.target.value;
      if (typeof old[e.target.name] === "number") {
        newValue = parseFloat(e.target.value);
      }
      if (e.target.name === "slug") {
        newValue = slugify(e.target.value);
      }
      return { ...old, [e.target.name]: newValue };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      editedProduct.slug = slugify(editedProduct.name)
      const resp = await axios.put(`/products/${product.slug}`, editedProduct);
      console.log(resp);

      /* As in Add/Delete Product the following function just to refresh what is shown. Should probably be improved in the future */
      const fetchData = async () => {
        const result = await axios.get("/products");
        const data = await result.data;
        setProducts(data);
      };
      fetchData();

      setEditButtonClicked(false)
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
          <select value={editedProduct.category} onChange={handleChange} name="category">
            {categories.map((category) => (
              <option key={category.slug} value={category.name}>{category.name}</option>
            ))}
          </select>
        </label>
        <button type="submit">Save changes</button>
      </form>
    </div>
  );
}

export default EditProduct;
