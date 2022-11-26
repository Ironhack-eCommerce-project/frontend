import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct({ setProducts, products }) {
  console.log("PRODUCTS: ", products);
  const defaultProduct = {
    name: "",
    description: "",
    price: 0.0,
    img: "",
    category: "",
    slug: "",
  };
  const [newProduct, setNewProduct] = useState(defaultProduct);
  const navigate = useNavigate();
  function handleChange(e) {
    setNewProduct((old) => {
      let newValue = e.target.value;
      if (typeof old[e.target.name] === "number") {
        newValue = parseFloat(e.target.value);
      }
      return { ...old, [e.target.name]: newValue };
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    /* axios
        .post(BASE_URL + "Products/new", newProduct)
        .then((response) => {
            setNewProduct(defaultState);
            navigate("/Products");
        });      
        }*/
    console.log("PRODUCTS: ", products);
    setProducts((old) => [...old, newProduct]);
    console.log("PRODUCTS NEW: ", products);
    setNewProduct(defaultProduct);
    navigate("/store");
  }
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
          <input name="img" value={newProduct.img} onChange={handleChange} />
        </label>
        <br />
        {/* Category as list with options, that have to be created on their own? */}
        <label>
          Category:
          <input
            name="category"
            value={newProduct.category}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Slug:
          <input name="slug" value={newProduct.slug} onChange={handleChange} />
        </label>
        <button type="submit">Add New Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
