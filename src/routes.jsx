import App from "./App";
import About from "./components/About";
import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Products from "./components/Products";

const Routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
];

export default Routes;
