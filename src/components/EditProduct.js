import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { replaceWhitespaces } from "../functions";

function EditProduct({ product, setEditButtonClicked, setProduct }) {
  const [editedProduct, setEditedProduct] = useState(product);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEditedProduct((old) => {
      let newValue = e.target.value;
      if (typeof old[e.target.name] === "number") {
        newValue = parseFloat(e.target.value);
      }
      if (e.target.name === "slug") {
        newValue = replaceWhitespaces(e.target.value, "-");
      }
      return { ...old, [e.target.name]: newValue };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.put(`/products/${product.slug}`, editedProduct);
      console.log(resp);

      /* As in Add/Delete Product the following function just to refresh what is shown. Should probably be improved in the future */
      const findProduct = async () => {
        const result = await axios.get(`/products/${editedProduct.slug}`);
        const data = await result.data;
        setProduct(data);
      };
      findProduct();

      setEditButtonClicked(false)
      navigate(`/store/${editedProduct.slug}`);
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
          <input
            name="category"
            value={editedProduct.category}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Slug:
          <input
            name="slug"
            value={editedProduct.slug}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Save changes</button>
      </form>
    </div>
  );
}

export default EditProduct;
