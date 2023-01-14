import axios from "axios";
import { SERVER_ORIGIN } from "../consts";

function DeleteProduct({ elem, setProducts }) {
  const handleClick = async (e) => {
    console.log("E TARGET: ", e.target.id);
    try {
      await axios.delete(`${SERVER_ORIGIN}/products/${elem.slug}`);

      const fetchData = async () => {
        const result = await axios.get(SERVER_ORIGIN + "/products");
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
