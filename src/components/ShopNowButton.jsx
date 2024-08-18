import { Link } from "react-router-dom";

const ShopNowButton = () => {
  return (
    <Link to="/products" className="shop-now">
      SHOP NOW
    </Link>
  );
};

export default ShopNowButton;
