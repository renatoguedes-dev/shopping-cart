# Shopping Cart

Project: Shopping Cart

This is a shopping cart application where you can browse products, add them to your cart, and manage your shopping experience. The app provides a seamless interface for viewing product details, adjusting quantities, and proceeding to checkout.

<p float="left" style="display: flex; gap: 15px; flex-wrap: wrap; justify-content: center;">
  <img src="src\assets\images\projectpic1.png" alt="homepage's picture" style="width: 100%; max-width: 300px;">
  <img src="src\assets\images\projectpic3.png" alt="cart page's picture" style="width: 100%; max-width: 300px;">
</p>

## Technologies Used

- React
- JavaScript
- CSS
- HTML
- React Router
- Fake Store API

## Features

- **Product Catalog**: Browse a variety of products fetched from the Fake Store API.
- **Shopping Cart**: Add products to your cart, adjust quantities, and remove items as needed.
- **Responsive Design**: Enjoy a seamless experience across desktop and mobile devices.
- **Dynamic Routing**: Navigate through different pages with React Router.
- **Star Ratings**: View product ratings displayed with a visual star system.

## How to Use

1. Browse the product catalog on the Products page.
2. Click "Add to Cart" to add items to your shopping cart.
3. Adjust quantities or remove items in the Cart page.
4. View your cart total and proceed to checkout.

## API Used

- **Fake Store API**: Used to fetch product data. More information can be found [here](https://fakestoreapi.com/).

## Installation

1. Clone the repository: `git clone https://github.com/renatoguedes-dev/shopping-cart.git`
2. Navigate to the project directory: `cd shopping-cart`
3. Install the dependencies: `npm install`
4. Start the development server: `npm run dev`

## Deployment

The project is deployed using Netlify. You can view the live demo [here](https://renato-shopping-cart.netlify.app/).

## Project Structure

- `src/components`: Contains React components (e.g., Header, Products, Cart)
- `src/hooks`: Custom React hooks (e.g., useFetchProducts)
- `src/helpers`: Helper functions for cart operations
- `src/assets`: Static assets like images

## Styling

The project uses custom CSS for styling, with a responsive design to ensure a good user experience across different devices.
