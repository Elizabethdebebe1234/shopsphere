import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch("/products.json");

        if (!response.ok) {
          throw new Error("Could not load product.");
        }

        const data = await response.json();

        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) {
    return (
      <main className="page">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading product...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="page">
        <div className="error">
          <h2>Something went wrong</h2>
          <p>{error}</p>
        </div>
      </main>
    );
  }

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return (
      <main className="page">
        <h1>Product Not Found</h1>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/products")}
        >
          Back to Products
        </button>
      </main>
    );
  }

  function handleAddToCart() {
    addToCart(product);
  }

  return (
    <main className="page product-details">
      <button
        className="btn btn-secondary"
        onClick={() => navigate("/products")}
      >
        ← Back to Products
      </button>

      <div className="product-details-content">
        <img src={product.image} alt={product.name} />

        <div className="product-details-info">
          <p className="product-category">{product.category}</p>

          <h1>{product.name}</h1>

          <p className="product-rating">⭐ {product.rating}</p>

          <p className="product-details-price">{product.price} ETB</p>

          <p className="product-description">{product.description}</p>

          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
