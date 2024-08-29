# KYCHub Front-End Assignment

This repository contains the solution for the KYCHub Front-End Assignment. The project is a responsive web application built with ReactJS and Ant Design, fulfilling the requirements provided in the assignment brief.

## Features
Responsive Design: The web application is fully responsive, featuring a fixed Navbar and Sidebar for seamless navigation.
#### Navbar and Sidebar:
The Navbar includes a logo and a user profile picture.

The Sidebar provides navigation between the Product Details and Compare Products pages.
#### Product Details Page:
Displays a table of products fetched from a public API.

The table is paginated (page size = 10) and includes sorting functionality.

Each row in the table has a "Compare" button, which adds the product to a comparison list.

If a product is already added to the comparison, the "Compare" button is disabled.
#### Compare Products Page:
Allows users to compare products side-by-side based on various attributes like features, brand, price, category, etc.

Users can add up to four products to the comparison list.

The comparison page features an "Add More" button, opening a modal that lists all products in a table format.

Duplicate products cannot be added to the comparison.
#### Enhanced User Experience:
Notifications on actions such as adding/removing products and invalid operations.

Infinite scroll pagination is implemented for a smoother experience.

Dark mode toggle is available for better visual accessibility.
## Technologies Used
ReactJS: JavaScript library for building user interfaces.

Ant Design: UI framework for creating elegant and responsive interfaces.

React Router: Used for navigating between pages.
## API Used
The product data is fetched from DummyJSON API.
Live Demo
The live demo of this project can be accessed here.
