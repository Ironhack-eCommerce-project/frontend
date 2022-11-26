import List from "../../components/List";
import "./store.css"

function Store({ products }) {
  
  return (
    <>
      <h1>Products:</h1>
      <List products={products}/>
    </>
  );
}

export default Store;
