import { useCart } from "../context/CartContext";
import { formatINR } from "../utils/currency";
function Checkout() {
  const { cartItems, totalPrice } = useCart();

  return (
    <div className="page">
      <h1 className="page-title">Checkout</h1>

      <div className="checkout-box">
        <h2>Order Summary</h2>
        <p>Total Items: {cartItems.length}</p>
        <p>Total Price: {formatINR(totalPrice)}</p>
        <button className="btn">Place Order</button>
      </div>
    </div>
  );
}

export default Checkout;