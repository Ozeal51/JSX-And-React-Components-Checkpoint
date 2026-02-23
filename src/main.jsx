// Import React library
import React from "react";
// Import ReactDOM for rendering React components to the DOM
import ReactDOM from "react-dom/client";
// Import the main App component
import App from "./App";
// Import Bootstrap CSS for styling and responsive layout
import 'bootstrap/dist/css/bootstrap.min.css';

// Create React root and render the App component with StrictMode for development checks
ReactDOM.createRoot(document.getElementById("root")).render(
  // StrictMode highlights potential issues in the application during development
  <React.StrictMode>
    <App />
  </React.StrictMode>
);