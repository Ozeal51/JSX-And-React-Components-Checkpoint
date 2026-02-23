// Import product data from the product module
import product from "../product";

// Component that displays the product name as a heading
export default function Name() {
  // Render the product name in an h2 heading with styling
  return <h2 className="product-name">{product.name}</h2>;
}
