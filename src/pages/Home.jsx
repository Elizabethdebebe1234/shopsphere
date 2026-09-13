import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch("/products.json");

        if (!response.ok) {
          throw new Error("Could not load products.");
        }

        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const featuredProducts = products.slice(0, 4);

  const categories = [
    {
      name: "Beauty",
      icon: "💄",
      description: "Skincare, makeup & beauty essentials",
    },
    {
      name: "Electronics",
      icon: "💻",
      description: "Smart devices & modern technology",
    },
    {
      name: "Clothes & Shoes",
      icon: "👟",
      description: "Fashion, shoes & everyday wear",
    },
  ];

  return (
    <main className="home-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">WELCOME TO SHOPSPHERE</p>

          <h1>
            Everything you love,
            <span> all in one place.</span>
          </h1>

          <p className="hero-text">
            Discover quality products, explore new collections, and enjoy a
            simple shopping experience designed for you.
          </p>

          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary">
              Shop Now →
            </Link>

            <Link to="/categories" className="btn btn-secondary">
              Explore Categories
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-circle">🛍️</div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="home-section">
        <div className="section-heading">
          <div>
            <p className="product-category">EXPLORE</p>
            <h2>Shop by Category</h2>
          </div>

          <Link to="/categories" className="view-all">
            View All →
          </Link>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/products?category=${encodeURIComponent(category.name)}`}
              className="category-card"
            >
              <span className="category-icon">{category.icon}</span>

              <h3>{category.name}</h3>

              <p>{category.description}</p>

              <span className="category-link">Shop now →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="home-section">
        <div className="section-heading">
          <div>
            <p className="product-category">OUR PICKS</p>
            <h2>Featured Products</h2>
          </div>

          <Link to="/products" className="view-all">
            View All Products →
          </Link>
        </div>

        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading products...</p>
          </div>
        ) : (
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                category={product.category}
                rating={product.rating}
              />
            ))}
          </div>
        )}
      </section>

      {/* PROMOTION */}
      <section className="promo-section">
        <div>
          <p className="promo-label">SPECIAL OFFER</p>

          <h2>Find something you'll love.</h2>

          <p>
            Explore our latest collections and discover great products at prices
            you'll love.
          </p>

          <Link to="/products" className="btn btn-primary">
            Start Shopping →
          </Link>
        </div>

        <div className="promo-icon">✨</div>
      </section>
    </main>
  );
}

export default Home;
