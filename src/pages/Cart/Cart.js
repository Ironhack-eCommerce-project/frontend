function Cart({ cartProducts, setCartProducts }) {
  console.log(cartProducts);
  return (
    <>
      <h2>Cart:</h2>
      <ul>
        {cartProducts.map((elem) => {
          return (
            <div>
              <h3>{elem.name}</h3>
            </div>
          )
        })}
      </ul>
    </>
  );
}

export default Cart;
