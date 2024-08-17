import Spinner from "./Spinner";
import StarRating from "./StarRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useOutletContext } from "react-router-dom";

const Products = () => {
  // load variables coming from parent container
  const { products, loading, error, cartItems, setCartItems } =
    useOutletContext();

  if (loading) return <Spinner />;
  if (error) return <div>Error: {error.message}</div>;

  // function to check if the item is already in the cart, so that the add to
  // cart button is removed and replaced by the quantity controller
  const isItemInCart = (product) => {
    return cartItems.some((item) => {
      return item.quantity && item.id === product.id;
    });
  };

  // function to display the amount of items in the cart for each item in page
  const itemQuantity = (product) => {
    let itemAmount = 0;

    cartItems.some((item) => {
      if (item.quantity && item.id === product.id) {
        itemAmount = item.quantity;
        return true;
      }
    });

    return itemAmount;
  };

  // function used when the Add To Cart button is pressed
  const handleAddToCart = (product) => {
    setCartItems((previousItems) => {
      // checks if the added item to the cart is already in the cart
      const existingItem = previousItems.find((item) => item.id === product.id);

      if (existingItem) {
        /*
          checks all items already in the cart using .map(). If the item already
          existis in the cart, it will increase its quantity by 1 and return the
          updated item to the cart array. Otherwise, it doesn't modify the item.
          Returns the updated cartItems as updatedItems and it is passed as 
          argument to setCartItems().
        */

        const updatedItems = previousItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        return updatedItems;
      }

      // if the item was not previously added to the cart, it will add a new
      // property quantity and it will receive 1 as a value
      return [...previousItems, { ...product, quantity: 1 }];
    });
  };

  const handleQuantityChange = (product, amount) => {
    setCartItems((previousItems) => {
      // first find the cart item in question so that we can remove it
      const cartItem = previousItems.find((item) => item.id === product.id);
      if (amount === -1 && cartItem.quantity === 1) {
        const updatedItems = previousItems.filter(
          (item) => item.id !== product.id
        );

        return updatedItems;
      } else {
        const updatedItems = previousItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + amount }
            : item
        );

        return updatedItems;
      }
    });
  };

  return (
    <>
      <div className="shop-header">
        <h1>Shop</h1>
        <p>
          Home <span className="angled-bracket">{">"}</span> Products{" "}
          <span className="angled-bracket">{">"}</span> All{" "}
        </p>
      </div>

      <div>
        <h3>Cart Items:</h3>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index}>
              {item.title} - Quantity: {item.quantity}
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>

      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-div">
              <img
                className="product-image"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="product-details-div">
              <p className="product-title">{product.title}</p>
              <p className="product-price">$ {product.price}</p>
              <div className="ratings">
                <StarRating rating={product.rating.rate} />
                <span>({product.rating.count})</span>
              </div>
            </div>

            {isItemInCart(product) ? (
              <div className="quantity-control">
                <button onClick={() => handleQuantityChange(product, -1)}>
                  <FontAwesomeIcon
                    icon={faMinus}
                    className="minus-plus-icons"
                  />
                </button>
                <span className="item-quantity">{itemQuantity(product)}</span>
                <button onClick={() => handleQuantityChange(product, 1)}>
                  <FontAwesomeIcon icon={faPlus} className="minus-plus-icons" />
                </button>
              </div>
            ) : (
              <button
                className="add-cart-btn"
                onClick={() => handleAddToCart(product)}
              >
                <FontAwesomeIcon icon={faCartShopping} />
                <div className="add-to-cart-text">Add to cart</div>
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
