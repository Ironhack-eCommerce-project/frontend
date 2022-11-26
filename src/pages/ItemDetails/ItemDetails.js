import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import initialProducts from "../../initial-products.json";
import "./itemDetails.css";

function ItemDetails() {
  const [product, setProduct] = useState({});
  const params = useParams();
  useEffect(() => {
    setProduct(
      () => initialProducts.filter((elem) => elem.slug === params.slug)[0]
    );
  }, [params.slug]);

  console.log("PRODUCT: ", product);

  return (
    <div className="itemDetailsMain">
      <img src={product.img} alt={product.name} className="itemDetailsImg" />
      <div>
        <h2>{product.name}</h2>
        <h2>€ {product.price}</h2>
        <p>{product.description}</p>
        <input type="number" />
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default ItemDetails;
