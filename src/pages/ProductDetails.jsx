import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatINR } from "../utils/currency";
function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <h2 className="center">Loading product details...</h2>;
  }

  if (!product) {
    return <h2 className="center">Product not found</h2>;
  }

  return (
    <div className="page">
      <div className="product-details">
        <img src={product.thumbnail} alt={product.title} />

        <div>
          <h1>{product.title}</h1>
          <h2>{formatINR(product.price)}</h2>
          <p>{product.description}</p>

          <button onClick={() => addToCart(product)} className="btn">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;