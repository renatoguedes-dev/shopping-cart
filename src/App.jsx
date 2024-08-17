import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import useFetchProducts from "./hooks/useFetchProducts";

function App() {
  const { products, loading, error } = useFetchProducts();
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Header cartItems={cartItems} />
      <main>
        <Outlet
          context={{ products, loading, error, cartItems, setCartItems }}
        />
      </main>
    </>
  );
}

export default App;
