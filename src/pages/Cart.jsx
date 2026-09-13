import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const total = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0,
  );

  if (cart.length === 0) {
    return (
      <main className="page cart-page">
        <h1 className="page-title">Your Cart</h1>

        <div className="empty">
          <h2>Your cart is empty 🛒</h2>
          <p>Add some products to your cart to get started.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="page cart-page">
      <div className="cart-header">
        <div>
          <h1 className="page-title">Your Cart</h1>
          <p>{cart.length} different product(s)</p>
        </div>

        <button
          className="btn btn-primary"
          onClick={() =>
            alert(
              `Your order total is ${total.toFixed(2)} ETB. Thank you for shopping with ShopSphere!`,
            )
          }
        >
          Checkout
        </button>
      </div>

      <div className="cart-list">
        {cart.map((product) => (
          <div className="cart-item" key={product.id}>
            <img src={product.image} alt={product.name} />

            <div className="cart-item-info">
              <p className="product-category">{product.category}</p>

              <h2>{product.name}</h2>

              <p className="cart-price">{product.price} ETB</p>
            </div>

            <div className="quantity-controls">
              <button onClick={() => decreaseQuantity(product.id)}>−</button>

              <span>{product.quantity}</span>

              <button onClick={() => increaseQuantity(product.id)}>+</button>
            </div>

            <div className="cart-item-total">
              {(product.price * product.quantity).toFixed(2)} ETB
            </div>

            <button
              className="remove-btn"
              onClick={() => removeFromCart(product.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <div>
          <p>Total</p>
          <h2>{total.toFixed(2)} ETB</h2>
        </div>

        <button className="btn btn-primary">Checkout</button>
      </div>
    </main>
  );
}

export default Cart;
