import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ id, image, name, price, category, rating }) {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      <Link to={`/products/${id}`} className="product-image-link">
        <img src={image} alt={name} className="product-card-image" />
      </Link>

      <div className="product-card-content">
        <p className="product-category">{category}</p>

        <Link to={`/products/${id}`} className="product-card-title">
          {name}
        </Link>

        <div className="product-card-meta">
          <span className="product-rating">⭐ {rating}</span>

          <span className="product-price">{price} ETB</span>
        </div>

        <div className="product-card-actions">
          <Link to={`/products/${id}`} className="btn btn-secondary">
            View Details
          </Link>

          <button
            className="btn btn-primary"
            onClick={() =>
              addToCart({
                id,
                image,
                name,
                price,
                category,
                rating,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
