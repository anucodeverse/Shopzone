import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page home-page">
      <section className="hero">
        <h1>Welcome to ShopZone</h1>
        <p>Browse amazing products and shop easily from one place.</p>
        <Link to="/shop" className="btn">
          Start Shopping
        </Link>
      </section>
    </div>
  );
}

export default Home;