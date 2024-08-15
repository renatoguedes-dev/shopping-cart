import useFetchProducts from "../hooks/useFetchProducts";
import Spinner from "./Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  const { products, loading, error } = useFetchProducts();

  if (loading) return <Spinner />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              className="product-image"
              src={product.image}
              alt={product.title}
            />
            <p className="product-title">{product.title}</p>
            <p className="product-price">$ {product.price}</p>
            <button className="add-cart-btn">
              <FontAwesomeIcon icon={faCartShopping} />
              <div className="add-to-cart-text">Add to cart</div>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
