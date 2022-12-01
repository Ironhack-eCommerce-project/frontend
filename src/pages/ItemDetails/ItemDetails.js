import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./itemDetails.css";

function ItemDetails() {
  const [product, setProduct] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    const findProduct = async () => {
      const result = await axios.get(`/products/${slug}`);
      const data = await result.data;
      setProduct(data);
    };
    findProduct();
  }, [slug]);

  console.log("PRODUCT: ", product);

  return (
    <div className="itemDetailsMain">
      {product && (
        <>
          <img
            src={product.image}
            alt={product.name}
            className="itemDetailsImg"
          />
          <div>
            <h2>{product.name}</h2>
            <h2>€ {product.price}</h2>
            <p>{product.description}</p>
            <input type="number" />
            <button>Add to cart</button>
          </div>
        </>
      )}
    </div>
  );
}

export default ItemDetails;
