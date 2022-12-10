import axios from "axios";
import { useEffect, useState } from "react";
import { slugify } from "../functions";

function AddProduct({ setProducts, categories }) {
  const defaultProduct = {
    name: "",
    description: "",
    price: 0.0,
    image: "",
    slug: "",
  };

  const [newProduct, setNewProduct] = useState(defaultProduct);

  /* Not sure that is the perfect solution, but now for the slug every whitespace is immediatly turned into a "-", already while typing  */
  const handleChange = (e) => {
    setNewProduct((old) => {
      let newValue = e.target.value;
      if (typeof old[e.target.name] === "number") {
        newValue = parseFloat(e.target.value);
      }
      return { ...old, [e.target.name]: newValue };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      newProduct.slug = slugify(newProduct.name);
      if (!newProduct.category) newProduct.category = categories[0].name;
      const resp = await axios.post("/products", newProduct);
      console.log("resp:", resp);
      setNewProduct(defaultProduct);
      const fetchData = async () => {
        const result = await axios.get("/products");
        const data = await result.data;
        setProducts(data);
      };
      fetchData();

    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => console.log(newProduct), [newProduct]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input name="name" value={newProduct.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Description:
          <input
            name="description"
            value={newProduct.description}
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
            value={newProduct.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Image:
          <input
            name="image"
            value={newProduct.image}
            onChange={handleChange}
          />
        </label>
        <br />
        {categories[0] && (
          <label>
            Category:
            <select
              value={newProduct.category}
              onChange={handleChange}
              name="category"
            >
              {categories.map((category) => (
                <option key={category.slug} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>
        )}
        <button type="submit">Add New Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
