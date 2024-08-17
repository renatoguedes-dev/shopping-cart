import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Header = ({ cartItems }) => {
  const headerNavLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "products" },
    { name: "About", path: "about" },
    { name: "Cart", path: "cart" },
  ];

  return (
    <header>
      <Link to="/" className="logo">
        <strong>GUEDES</strong>
      </Link>
      <div className="nav-links">
        {headerNavLinks.map((link) =>
          link.name !== "Cart" ? (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => {
                return isActive ? "active-nav" : "";
              }}
            >
              {link.name}
            </NavLink>
          ) : (
            <NavLink key={link.name} to={link.path} className="header-cart">
              <FontAwesomeIcon className="bag-icon" icon={faBagShopping} />
              {cartItems.length !== 0 && (
                <span className="cart-item-count">{cartItems.length}</span>
              )}
            </NavLink>
          )
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  cartItems: PropTypes.array,
};

export default Header;
