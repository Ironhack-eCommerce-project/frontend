import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="header">
      <NavLink to="/" className="headerLink">Home</NavLink>
      <NavLink to="/store" className="headerLink">Store</NavLink>
    </div>
  );
}

export default Navbar;
