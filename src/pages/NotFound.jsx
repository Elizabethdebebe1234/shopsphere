import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="page not-found">
      <div className="not-found-icon">🔍</div>

      <p className="product-category">404 ERROR</p>

      <h1>Page Not Found</h1>

      <p>
        Sorry, the page you're looking for doesn't exist or may have been moved.
      </p>

      <div className="not-found-actions">
        <Link to="/" className="btn btn-primary">
          Go Home
        </Link>

        <Link to="/products" className="btn btn-secondary">
          Browse Products
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
