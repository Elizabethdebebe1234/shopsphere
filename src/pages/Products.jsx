import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Products() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory = searchParams.get("category");

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);

        const response = await fetch("/products.json");

        if (!response.ok) {
          throw new Error("Could not load products.");
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

  const categories = [
    {
      name: "Beauty",
      description:
        "Discover skincare, haircare, makeup, and beauty essentials.",
      icon: "💄",
    },
    {
      name: "Electronics",
      description: "Explore phones, laptops, accessories, and smart devices.",
      icon: "💻",
    },
    {
      name: "Clothes & Shoes",
      description: "Find stylish clothes, sneakers, boots, and everyday wear.",
      icon: "👕",
    },
  ];

  const filteredProducts = products
    .filter((product) => product.category === selectedCategory)
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    )
    .sort((a, b) => {
      if (sort === "low") {
        return a.price - b.price;
      }

      if (sort === "high") {
        return b.price - a.price;
      }

      if (sort === "rating") {
        return b.rating - a.rating;
      }

      return 0;
    });

  if (loading) {
    return (
      <main className="page">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading products...</p>
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

  if (!selectedCategory) {
    return (
      <main className="page products-page">
        <div className="products-header">
          <div>
            <p className="product-category">SHOPSPHERE</p>

            <h1 className="page-title">What are you looking for?</h1>

            <p className="page-subtitle">
              Explore our collections and discover products you love.
            </p>
          </div>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <button
              key={category.name}
              className="category-card"
              onClick={() => setSearchParams({ category: category.name })}
            >
              <span className="category-icon">{category.icon}</span>

              <h2>{category.name}</h2>

              <p>{category.description}</p>

              <span className="category-link">Explore collection →</span>
            </button>
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="page products-page">
      <div className="products-header">
        <div>
          <button
            className="btn btn-secondary"
            onClick={() => {
              setSearchParams({});
              setSearch("");
            }}
          >
            ← All Categories
          </button>

          <h1 className="page-title">{selectedCategory}</h1>

          <p className="page-subtitle">
            Explore our {selectedCategory.toLowerCase()} collection.
          </p>
        </div>
      </div>

      <div className="products-controls">
        <input
          className="search-box"
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select value={sort} onChange={(event) => setSort(event.target.value)}>
          <option value="default">Sort products</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      <p className="results-count">{filteredProducts.length} products found</p>

      {filteredProducts.length === 0 ? (
        <div className="empty">
          <h2>No products found</h2>
          <p>Try searching for something else.</p>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
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
    </main>
  );
}

export default Products;
