import { unstable_createCssVarsProvider } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";

function Cart() {
  const [productsInCart, setProductsInCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/cart");
      const data = await result.data;
      setProductsInCart(data);
    };
    fetchData();
  }, []);

  const totalPrice = productsInCart
    .reduce((acc, curr) => acc + curr.price, 0)
    .toFixed(2);

  console.log("Total Price", totalPrice);
  console.log("Products in Cart: ", productsInCart);

  return (
    <>
      <h2>Cart:</h2>
      <ul>
        {productsInCart[0] &&
          productsInCart.map((elem) => {
            return (
              <div key={elem._id}>
                <h3>
                  {elem.name}: {elem.price}€
                </h3>
                <button>Remove from Cart</button>
              </div>
            );
          })}
        <h3>Total Price: {totalPrice}€</h3>
      </ul>
    </>
  );
}

export default Cart;
