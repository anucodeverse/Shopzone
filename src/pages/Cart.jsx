import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatINR } from "../utils/currency";

function Cart() {
  const { cartItems, removeFromCart, clearCart, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="page center">
        <h1>Your Cart is Empty</h1>
        <Link to="/shop" className="btn">
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="page">
      <h1 className="page-title">Your Cart</h1>

      <div className="cart-list">
        {cartItems.map((item, index) => (
          <div className="cart-item" key={`${item.id}-${index}`}>
            <img src={item.thumbnail} alt={item.title} />

            <div>
              <h3>{item.title}</h3>
              <p>{formatINR(item.price)}</p>
            </div>

            <button onClick={() => removeFromCart(item.id)} className="danger-btn">
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total Price: {formatINR(totalPrice)}</h2>

        <div className="cart-actions">
          <button onClick={clearCart} className="danger-btn">
            Clear Cart
          </button>

          <Link to="/checkout" className="btn">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;