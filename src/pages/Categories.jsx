import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    {
      name: "Beauty",
      icon: "💄",
      description:
        "Skincare, makeup, haircare, and beauty essentials for your everyday routine.",
      count: 10,
    },
    {
      name: "Electronics",
      icon: "💻",
      description:
        "Discover smart devices, phones, laptops, accessories, and more.",
      count: 10,
    },
    {
      name: "Clothes & Shoes",
      icon: "👟",
      description:
        "Shop stylish clothes, sneakers, boots, and comfortable everyday wear.",
      count: 10,
    },
  ];

  return (
    <main className="page categories-page">
      <div className="categories-header">
        <p className="product-category">SHOPSPHERE COLLECTIONS</p>

        <h1 className="page-title">Shop by Category</h1>

        <p className="page-subtitle">
          Explore our collections and find exactly what you are looking for.
        </p>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/products?category=${encodeURIComponent(category.name)}`}
            className="category-card"
          >
            <span className="category-icon">{category.icon}</span>

            <h2>{category.name}</h2>

            <p>{category.description}</p>

            <span className="category-count">{category.count} products</span>

            <span className="category-link">Explore collection →</span>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Categories;
