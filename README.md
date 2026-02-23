🛍️ React Product Card App

This project is a simple React application built with Create React App. It demonstrates the use of React components, JSX, props, and React-Bootstrap to build a reusable and styled product card interface.

The goal of this checkpoint is to practice component structure, data handling, and UI composition in React.

🚀 What This Project Covers

Creating a React app using Create React App

Structuring reusable functional components

Working with JSX

Importing and exporting modules

Using a JSON object as product data

Styling with React-Bootstrap

Conditional rendering in React

📂 Project Structure
src/
│
├── App.js
├── product.js
├── Name.js
├── Price.js
├── Description.js
├── Image.js
└── index.js
📦 Features
1️⃣ Product Data

A product.js file contains a JSON object with:

Product Name

Product Price

Product Description

Product Image URL

This object is exported and imported into individual components.

2️⃣ Reusable Components

The following components were created:

Name.js → Displays product name

Price.js → Displays product price

Description.js → Displays product description

Image.js → Displays product image

Each component:

Imports the product object

Returns JSX displaying its specific data

Is exported for use in App.js

3️⃣ Root Component (App.js)

Imports all product components

Uses React-Bootstrap Card component to structure the layout

Displays all product information inside a styled card

Shows a personalized greeting message

👋 Conditional Rendering

Below the product card:

If a first name is provided → Displays:

Hello, [Your First Name]

and shows an image.

If no name is provided → Displays:

Hello, there!

This demonstrates conditional rendering in React.

🎨 Styling

Built using React-Bootstrap

Creative customization added for:

Card layout

Typography

Image presentation

Spacing and alignment

You are encouraged to further enhance styling with:

Custom CSS

Bootstrap utilities

Inline styles

Google Fonts

🛠️ Installation & Setup

Clone the repository:

git clone https://github.com/your-username/react-product-card.git

Navigate into the project directory:

cd react-product-card

Install dependencies:

npm install

Install React-Bootstrap:

npm install react-bootstrap bootstrap

Start the development server:

npm start

The app will run on:

http://localhost:3000
📚 Technologies Used

React

JSX

JavaScript (ES6)

React-Bootstrap

Create React App

🎯 Learning Outcome

By completing this project, you should understand:

How to break UI into reusable components

How to export and import modules in React

How to use props and JSON data

How to structure a basic React application

How conditional rendering works

How to integrate UI libraries like React-Bootstrap

✨ Author

Built as part of a React learning checkpoint.