// Import product data from the product module
import product from "../product";

// Component that displays the product image
export default function Image() {
  return (
    // Image element with responsive and styling classes
    <img
      // Classes: product-image for custom styling, img-fluid for responsiveness, rounded corners, subtle shadow
      className="product-image img-fluid rounded shadow-sm"
      // Source URL from product data
      src={product.image}
      // Alt text for accessibility and SEO using product name
      alt={product.name}
    />
  );
}
