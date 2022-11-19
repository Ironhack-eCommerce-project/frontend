import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="headerLink">Homepage</Link>
      <Link to="/store" className="headerLink">Store</Link>
    </div>
  );
}

export default Header;
