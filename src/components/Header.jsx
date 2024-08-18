import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useState } from "react";

const Header = ({ cartItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    const bodyEl = document.querySelector("body");
    bodyEl.classList.toggle("menu-open");
  };

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
      {!menuOpen ? (
        <nav className="nav-links nav-hide">
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
        </nav>
      ) : (
        <nav className="nav-links nav-show">
          {headerNavLinks.map((link) =>
            link.name !== "Cart" ? (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => {
                  return isActive ? "active-nav" : "";
                }}
                onClick={toggleMenu}
              >
                {link.name}
              </NavLink>
            ) : (
              <NavLink
                onClick={toggleMenu}
                key={link.name}
                to={link.path}
                className="header-cart"
              >
                <FontAwesomeIcon className="bag-icon" icon={faBagShopping} />
                {cartItems.length !== 0 && (
                  <span className="cart-item-count">{cartItems.length}</span>
                )}
              </NavLink>
            )
          )}
        </nav>
      )}

      <div
        className={`menu-btn${menuOpen ? " open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="menu-btn__burger"></div>
      </div>
    </header>
  );
};

Header.propTypes = {
  cartItems: PropTypes.array,
};

export default Header;
