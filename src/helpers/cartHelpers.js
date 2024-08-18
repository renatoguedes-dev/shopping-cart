export const handleQuantityChange = (setCartItems, product, amount) => {
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

  // function to display the amount of items in the cart for each item in page
  export const itemQuantity = (cartItems, product) => {
    let itemAmount = 0;

    cartItems.some((item) => {
      if (item.quantity && item.id === product.id) {
        itemAmount = item.quantity;
        return true;
      }
    });

    return itemAmount;
  };