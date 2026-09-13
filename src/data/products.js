const products = [
  // =========================
  // BEAUTY
  // =========================

  {
    id: 1,
    name: "Face Cream",
    price: 25,
    category: "Beauty",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500",
    description:
      "A moisturizing face cream designed to keep your skin soft, smooth, and hydrated.",
  },

  {
    id: 2,
    name: "Lipstick",
    price: 18,
    category: "Beauty",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500",
    description:
      "A long-lasting lipstick with a smooth finish and comfortable feel.",
  },

  {
    id: 3,
    name: "Face Wash",
    price: 15,
    category: "Beauty",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500",
    description:
      "A gentle face wash that helps remove dirt and leaves your skin feeling fresh.",
  },

  {
    id: 4,
    name: "Perfume",
    price: 45,
    category: "Beauty",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500",
    description:
      "A stylish fragrance with a fresh and elegant scent for everyday use.",
  },

  {
    id: 5,
    name: "Foundation",
    price: 30,
    category: "Beauty",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1631214524020-7e18db3a8f5c?w=500",
    description:
      "A lightweight foundation that provides smooth and natural-looking coverage.",
  },

  {
    id: 6,
    name: "Mascara",
    price: 20,
    category: "Beauty",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1631730486572-226d1c12b0f0?w=500",
    description:
      "A volumizing mascara designed to make your lashes look longer and fuller.",
  },

  {
    id: 7,
    name: "Body Lotion",
    price: 22,
    category: "Beauty",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500",
    description:
      "A nourishing body lotion that helps keep your skin moisturized throughout the day.",
  },

  {
    id: 8,
    name: "Sunscreen",
    price: 28,
    category: "Beauty",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=500",
    description:
      "Daily sunscreen designed to help protect your skin from harmful UV exposure.",
  },

  {
    id: 9,
    name: "Shampoo",
    price: 16,
    category: "Beauty",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=500",
    description:
      "A refreshing shampoo that cleanses the hair and leaves it feeling soft.",
  },

  {
    id: 10,
    name: "Hair Oil",
    price: 19,
    category: "Beauty",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500",
    description:
      "A nourishing hair oil designed to give hair a healthy and shiny appearance.",
  },

  // =========================
  // ELECTRONICS
  // =========================

  {
    id: 11,
    name: "Wireless Headphones",
    price: 49,
    category: "Electronics",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    description:
      "Wireless headphones with comfortable ear cushions and clear sound quality.",
  },

  {
    id: 12,
    name: "Smart Watch",
    price: 75,
    category: "Electronics",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    description:
      "A modern smartwatch for notifications, fitness tracking, and everyday use.",
  },

  {
    id: 13,
    name: "Bluetooth Speaker",
    price: 40,
    category: "Electronics",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
    description:
      "A portable Bluetooth speaker delivering clear sound for music anywhere.",
  },

  {
    id: 14,
    name: "Laptop",
    price: 650,
    category: "Electronics",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    description:
      "A powerful laptop suitable for studying, working, browsing, and entertainment.",
  },

  {
    id: 15,
    name: "Smartphone",
    price: 500,
    category: "Electronics",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    description:
      "A modern smartphone with a bright display and powerful everyday performance.",
  },

  {
    id: 16,
    name: "Tablet",
    price: 300,
    category: "Electronics",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
    description:
      "A lightweight tablet perfect for studying, reading, streaming, and browsing.",
  },

  {
    id: 17,
    name: "Wireless Mouse",
    price: 25,
    category: "Electronics",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    description:
      "A comfortable wireless mouse with responsive controls for everyday computing.",
  },

  {
    id: 18,
    name: "Mechanical Keyboard",
    price: 70,
    category: "Electronics",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
    description:
      "A mechanical keyboard with responsive keys designed for comfortable typing.",
  },

  {
    id: 19,
    name: "Power Bank",
    price: 35,
    category: "Electronics",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1609592424522-0d1e8b1d8b3e?w=500",
    description:
      "A portable power bank that helps keep your devices charged while traveling.",
  },

  {
    id: 20,
    name: "USB-C Charger",
    price: 30,
    category: "Electronics",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500",
    description:
      "A compact USB-C charger designed for convenient everyday charging.",
  },

  // =========================
  // CLOTHES & SHOES
  // =========================

  {
    id: 21,
    name: "Classic T-Shirt",
    price: 25,
    category: "Clothes & Shoes",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    description:
      "A comfortable classic T-shirt suitable for everyday casual outfits.",
  },

  {
    id: 22,
    name: "Blue Jeans",
    price: 45,
    category: "Clothes & Shoes",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
    description:
      "Classic blue jeans with a comfortable fit and versatile everyday style.",
  },

  {
    id: 23,
    name: "Hoodie",
    price: 50,
    category: "Clothes & Shoes",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
    description:
      "A warm and comfortable hoodie perfect for casual everyday wear.",
  },

  {
    id: 24,
    name: "Denim Jacket",
    price: 60,
    category: "Clothes & Shoes",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=500",
    description:
      "A stylish denim jacket that works well with a variety of casual outfits.",
  },

  {
    id: 25,
    name: "Summer Dress",
    price: 55,
    category: "Clothes & Shoes",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
    description:
      "A lightweight and stylish summer dress designed for comfortable wear.",
  },

  {
    id: 26,
    name: "Casual Skirt",
    price: 40,
    category: "Clothes & Shoes",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a13d27?w=500",
    description:
      "A comfortable casual skirt that can be styled for different occasions.",
  },

  {
    id: 27,
    name: "Sneakers",
    price: 80,
    category: "Clothes & Shoes",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    description:
      "Comfortable sneakers designed for everyday walking and casual activities.",
  },

  {
    id: 28,
    name: "Running Shoes",
    price: 65,
    category: "Clothes & Shoes",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    description:
      "Lightweight running shoes designed to provide comfort during exercise.",
  },

  {
    id: 29,
    name: "Leather Boots",
    price: 95,
    category: "Clothes & Shoes",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=500",
    description:
      "Durable leather boots with a stylish design suitable for everyday wear.",
  },

  {
    id: 30,
    name: "Casual Sandals",
    price: 35,
    category: "Clothes & Shoes",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500",
    description:
      "Comfortable casual sandals designed for warm weather and everyday use.",
  },
];

export default products;
