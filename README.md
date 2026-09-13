# ShopSphere 🛍️

ShopSphere is a React-based online shopping application where users can browse products, search and filter products, view product details, and manage a shopping cart.

## 📌 Project Overview

ShopSphere is a single-page React application created to demonstrate the main concepts learned in the React module.

The project focuses on reusable components, props, state management, data fetching, React Router, dynamic routes, and Context API.

## ✨ Features

### 🏠 Home Page

- Website introduction
- Featured products
- Product categories
- Promotional section
- Navigation menu

### 🛍️ Products Page

- Display products using reusable product cards
- Product images
- Product names
- Prices in Ethiopian Birr (ETB)
- Product categories
- Product ratings
- View Details button
- Add to Cart button
- Product search
- Category filtering
- Product sorting

### 📦 Product Details Page

- Dynamic product pages
- Product image
- Product title
- Product description
- Product price
- Product category
- Product rating
- Add to Cart button
- Dynamic routing using `/products/:id`

### 🛒 Shopping Cart

- Product name
- Product image
- Product price
- Product quantity
- Increase quantity
- Decrease quantity
- Remove product
- Clear cart
- Total price
- Checkout message

### 🗂️ Categories Page

- Display available product categories
- Navigate to products by category

### ℹ️ About Page

- Information about the ShopSphere application

### ❌ 404 / Not Found Page

- Custom Not Found page
- Go Home button
- Browse Products button

## ⚛️ React Concepts Demonstrated

This project demonstrates:

- JSX
- Functional components
- Component hierarchy
- Component composition
- Props
- Reusable components
- Children props
- `useState`
- Multiple state variables
- Updating arrays and objects in state
- Event handling
- `onClick`
- `onChange`
- Conditional rendering
- Rendering lists with `map()`
- Proper `key` usage
- Controlled inputs
- Search and filtering
- `useEffect`
- Fetching local JSON data
- Loading state
- Error state

## 🧭 React Router

The application uses React Router for navigation and dynamic routes.

### Routes

```text
/
├── /products
├── /products/:id
├── /categories
├── /cart
├── /about
└── *
```
