import { useOutletContext } from "react-router-dom";

const Cart = () => {
  const { cartItems, setCartItems } = useOutletContext();

  return (
    <>
      {cartItems.length === 0 ? (
        <h1>Your cart is empty</h1>
      ) : (
        <div>
          <div>
            <h2>Your shopping Cart</h2>
            {cartItems.map((item, index) => (
              <div key={index}>
                {item.title} - Quantity: {item.quantity}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
