// Import product data from the product module
import product from "../product";

// Component that displays the product price in USD currency format
export default function Price() {
  // Format the price using JavaScript's Intl.NumberFormat API
  // This ensures proper currency formatting with USD locale settings
  const formatted = new Intl.NumberFormat(undefined, {
    style: "currency", // Format as currency
    currency: "USD", // Use USD currency
  }).format(product.price);
  // Render the formatted price in a styled div
  return <div className="product-price">{formatted}</div>;
}
