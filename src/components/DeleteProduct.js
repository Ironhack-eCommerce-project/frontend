import axios from "axios";

function DeleteProduct({ elem, setProducts }) {
  const handleClick = async (e) => {
    console.log("E TARGET: ", e.target.id);
    try {
      await axios.delete(`/products/${elem.slug}`);
      
      /* The following fetchData stuff here and in AddProduct is just so it gets immediatly
      shown. There's probably a better and more efficient way */
      const fetchData = async () => {
        const result = await axios.get("/products");
        const data = await result.data;
        setProducts(data);
      };
      fetchData();    
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button id={elem.slug} onClick={handleClick}>
      Delete Product
    </button>
  );
}

export default DeleteProduct;
