# Paradise Nursery Shopping Application

## Project Overview

Paradise Nursery is a React-based online plant shopping application that allows users to browse houseplants, view product details, add plants to a shopping cart, and manage their selected items.

This project demonstrates front-end development using React, JavaScript, CSS, and Redux Toolkit for shopping cart state management.

## Features

- A landing page introducing Paradise Nursery with a Get Started button.
- An About Us section describing the company.
- Houseplants organized into different categories.
- Product cards displaying plant images, names, and prices.
- Add to Cart functionality for each plant.
- A dynamically updated shopping cart item count.
- A shopping cart displaying selected plants and their prices.
- Controls to increase and decrease plant quantities.
- A delete button to remove plants from the cart.
- Automatic calculation of individual item totals and the overall cart total.
- A Continue Shopping button to return to the product listing.
- A checkout button displaying a Coming Soon message.

## Technologies Used

- React
- JavaScript
- JSX
- CSS
- Redux Toolkit
- React Router, if used in the implementation

## Project Structure

The project includes the following main files:

- `README.md` — Project documentation.
- `App.jsx` — Main application component and landing page.
- `App.css` — Application styling and landing page background.
- `AboutUs.jsx` — Company information.
- `CartSlice.jsx` — Redux slice for shopping cart state.
- `ProductList.jsx` — Plant categories and product listing.
- `CartItem.jsx` — Shopping cart interface and item management.

## Getting Started

1. Clone or download the repository.
2. Open the project directory in a terminal.
3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server using the command configured in `package.json`. Depending on the project setup, use:

   ```bash
   npm run dev
   ```

   or:

   ```bash
   npm start
   ```

5. Open the local URL displayed in the terminal.

## Learning Objectives

This project demonstrates how to:

- Create reusable React components.
- Display products dynamically using categories.
- Manage application state with Redux Toolkit.
- Implement shopping cart operations.
- Calculate product and cart totals.
- Build navigation between application pages.
- Create a user-friendly interface using CSS.

## Future Enhancements

- Add product search and filtering.
- Connect product data to a backend API.
- Implement user authentication.
- Integrate a complete checkout process.

## Author

Kanak Bansal

## Acknowledgements

Created as part of the IBM Full Stack Software Developer specialization on Coursera.
