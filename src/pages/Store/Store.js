import { Container } from "@mui/material";
import List from "../../components/List";
import "./store.css";

function Store({ products, setProducts }) {
  return (
    <>
      <Container>
        <h1>Products</h1>
        <List products={products} setProducts={setProducts} />
      </Container>
    </>
  );
}

export default Store;
