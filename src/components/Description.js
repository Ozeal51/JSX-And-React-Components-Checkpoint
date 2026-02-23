// Import product data from the product module
import product from "../product";

// Component that displays the product description text
export default function Description() {
  // Render the product description in a styled paragraph
  return <p className="product-description">{product.description}</p>;
}
