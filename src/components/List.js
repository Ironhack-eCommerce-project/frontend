import { Link } from "react-router-dom";
import "../pages/Store/store.css";

function List({ products }) {
  console.log(products);
  return (
    <ul className="listItemsMain">
      {products.map((elem) => {
        return (
          <div className="listItemBox" key={elem.slug}>
            <Link to={`/store/${elem.slug}`}>
              <img src={elem.image} alt={elem.name} className="listItemImg" />
            </Link>
            <p>{elem.category}</p>
            <h2>{elem.name}</h2>
            <h2>€ {elem.price}</h2>
          </div>
        );
      })}
    </ul>
  );
}

export default List;
