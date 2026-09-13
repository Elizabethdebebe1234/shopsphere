import { Link } from "react-router-dom";

function About() {
  return (
    <main className="page about-page">
      <section className="about-hero">
        <p className="product-category">ABOUT SHOPSPHERE</p>

        <h1 className="page-title">Shopping made simple.</h1>

        <p className="page-subtitle">
          ShopSphere is a modern online shopping platform designed to make
          discovering and purchasing products simple, convenient, and enjoyable.
        </p>
      </section>

      <section className="about-grid">
        <div className="about-card">
          <span>🛍️</span>
          <h2>Our Mission</h2>
          <p>
            Our mission is to create a smooth shopping experience where
            customers can easily discover products they love.
          </p>
        </div>

        <div className="about-card">
          <span>✨</span>
          <h2>Quality First</h2>
          <p>
            We focus on bringing together products across beauty, electronics,
            clothing, and footwear.
          </p>
        </div>

        <div className="about-card">
          <span>❤️</span>
          <h2>Customer Focused</h2>
          <p>
            ShopSphere is designed around simple navigation, useful product
            information, and an easy shopping journey.
          </p>
        </div>
      </section>

      <section className="about-cta">
        <h2>Ready to explore?</h2>

        <p>Discover our collections and find your next favorite product.</p>

        <Link to="/products" className="btn btn-primary">
          Explore Products →
        </Link>
      </section>
    </main>
  );
}

export default About;
