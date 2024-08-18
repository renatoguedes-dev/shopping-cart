import { useOutletContext } from "react-router-dom";
import ShopNowButton from "./ShopNowButton";
import QuantityControl from "./QuantityControl";
import { itemQuantity } from "../helpers/cartHelpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import cardsLogos from "../assets/images/cardslogos.png";

const Cart = () => {
  const { cartItems, setCartItems } = useOutletContext();

  const checkTotalItemPrice = (item) => {
    const itemAmount = itemQuantity(cartItems, item);
    const price = item.price;

    let totalItemPrice = itemAmount * price;
    return totalItemPrice;
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.map((item) => {
      if (item.quantity) {
        const totalItemPrice = checkTotalItemPrice(item);
        total += totalItemPrice;
      }
    });

    return total;
  };

  const removeItemFromCart = (item) => {
    setCartItems((previousItems) => {
      const cartItem = previousItems.find((product) => product.id === item.id);

      if (cartItem.id === item.id) {
        const updatedItems = previousItems.filter(
          (product) => product.id !== item.id
        );

        return updatedItems;
      }
    });
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="empty-cart-card card">
          <h2>Your cart is empty!</h2>
          <p>Click the Button below to start shopping.</p>
          <ShopNowButton />
        </div>
      ) : (
        <div className="shopping-page">
          <div className="cart-details">
            <div className="quantity-summary">
              <h2>Your shopping Cart</h2>
              <h2>
                {cartItems.length} item{cartItems.length > 1 && "s"}
              </h2>
            </div>

            <div className="all-products-card">
              {cartItems.map((item, index) => (
                <div className="product-details card" key={index}>
                  <div className="cart-product-image-div">
                    <img
                      className="cart-product-image"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div className="cart-product-details">
                    <div className="cart-product-title">{item.title}</div>
                    <div className="cart-product">
                      <QuantityControl
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                        product={item}
                      />
                      <div className="product-price">
                        $ {checkTotalItemPrice(item).toFixed(2)}
                      </div>
                      <button
                        className="remove-button"
                        onClick={() => removeItemFromCart(item)}
                      >
                        Remove <FontAwesomeIcon className="x-icon" icon={faX} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="checkout card">
            <div className="checkout-total">
              <span className="checkout-total-text">Total:</span>
              <span className="checkout-total-value">
                $ {calculateTotal().toFixed(2)}
              </span>
            </div>
            <button
              className="checkout-button"
              onClick={() =>
                alert(
                  "This is a fictional website and you can't really buy anything"
                )
              }
            >
              Proceed to checkout
            </button>
            <div className="credit-cards-div">
              <img src={cardsLogos} alt="credit cards logos" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
