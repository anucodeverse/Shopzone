import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { cartCount } = useCart();
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        ShopZone
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart 🛒 {cartCount}</Link>

        {isLoggedIn ? (
          <button onClick={logout} className="nav-btn">
            Logout
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;