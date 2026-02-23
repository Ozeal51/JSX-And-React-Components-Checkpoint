// Import React Bootstrap components for layout and styling
import { Container, Card, Row, Col } from "react-bootstrap";
// Import product card sub-components
import Name from "./components/Name.jsx";
import Price from "./components/Price.jsx";
import Description from "./components/Description.jsx";
import Image from "./components/Image.jsx";
// Import custom styles
import "./App.css";

// Store user's first name to display in greeting
const firstName = "Hosea";

// Main App component that renders a product card with user greeting
export default function App() {
  return (
    // Outer container with background styling and padding
    <div className="app-bg py-5">
      {/* Bootstrap container for responsive layout */}
      <Container>
        {/* Row with centered content */}
        <Row className="justify-content-center">
          {/* Column that adjusts width based on screen size (medium: 8 cols, large: 6 cols) */}
          <Col md={8} lg={6}>
            {/* Card component with glass effect, shadow, and no border */}
            <Card className="glass-card shadow-lg border-0 overflow-hidden">
              {/* Conditionally render image wrapper if firstName exists */}
              {firstName && (
                <div className="image-wrapper">
                  {/* Product image component */}
                  <Image />
                </div>
              )}
              {/* Card body with padding */}
              <Card.Body className="p-4">
                {/* Flex container for product name and price badge */}
                <div className="d-flex align-items-center justify-content-between mb-2">
                  {/* Product name component */}
                  <Name />
                  {/* Badge displaying the product price */}
                  <span className="badge rounded-pill bg-primary-subtle text-primary-emphasis px-3 py-2 product-price-badge">
                    <Price />
                  </span>
                </div>
                {/* Product description component */}
                <Description />
              </Card.Body>
            </Card>
            {/* Personalized greeting for the user */}
            <p className="mt-4 fs-5 hello-text">
              Hello, {firstName},
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
