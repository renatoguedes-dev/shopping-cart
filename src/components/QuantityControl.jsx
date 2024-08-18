import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { handleQuantityChange, itemQuantity } from "../helpers/cartHelpers";
import PropTypes from "prop-types";

const QuantityControl = ({ cartItems, setCartItems, product }) => {
  return (
    <div className="quantity-control">
      <button
        className="minus-button"
        onClick={() => handleQuantityChange(setCartItems, product, -1)}
      >
        <FontAwesomeIcon icon={faMinus} className="minus-plus-icons" />
      </button>
      <span className="item-quantity">{itemQuantity(cartItems, product)}</span>
      <button
        className="plus-button"
        onClick={() => handleQuantityChange(setCartItems, product, 1)}
      >
        <FontAwesomeIcon icon={faPlus} className="minus-plus-icons" />
      </button>
    </div>
  );
};

QuantityControl.propTypes = {
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func.isRequired,
  product: PropTypes.shape({
    category: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
    rating: PropTypes.object,
  }),
};

export default QuantityControl;
