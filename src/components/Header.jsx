import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
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
            <NavLink key={link.name} to={link.path}>
              <FontAwesomeIcon className="bag-icon" icon={faBagShopping} />
            </NavLink>
          )
        )}
      </div>
    </header>
  );
};

export default Header;
