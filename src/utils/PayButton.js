import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../context/UserContext.js";
import { SERVER_ORIGIN } from "../consts.js";

import { Button } from "@mui/material";

function PayButton({ cartItems }) {
  const { loginUser } = useContext(UserContext);

  const handleCheckout = async () => {
    try {
      const result = await axios.post(SERVER_ORIGIN + "/stripe/create-checkout-session", {
        cartItems,
        loginUser,
      });
      console.log(result);
      const data = await result.data;
      if (data) {
        window.location.href = data;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Button variant="contained" color="error" onClick={() => handleCheckout()}>
        Checkout
      </Button>
    </>
  );
}

export default PayButton;
