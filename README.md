# ShopZone

ShopZone is a small React e-commerce single page application. I built this project to practice React Router, API fetching, Context API, cart management, localStorage, and protected routes.

The app allows users to browse products, view product details, add products to a cart, login as a guest, and open a checkout page.

---

## Live API Used

This project uses the DummyJSON products API.

```txt
https://dummyjson.com/products
```

The shop page fetches all products from this API, and the product details page fetches a single product using the product ID from the URL.

---

## Main Features

- Home page with a simple landing section
- Shop page with product cards
- Product search option
- Product details page
- Product price shown in Indian Rupees
- Rating and discount information
- Add to cart option
- Global cart state using Context API
- Cart count shown in the navbar
- Cart page with total price
- Cart data saved in localStorage
- Contact page with form UI
- Guest login page
- Protected checkout page
- CSS styling without any CSS framework

---

## Tech Stack

- React
- Vite
- JavaScript
- React Router DOM
- Context API
- CSS
- localStorage
- DummyJSON API

---

## Pages and Routes

| Route | Description |
|---|---|
| `/` | Home page |
| `/shop` | Product listing page |
| `/product/:id` | Product details page |
| `/cart` | Cart page |
| `/contact` | Contact page |
| `/login` | Guest login page |
| `/checkout` | Protected checkout page |

---

## Project Folder Structure

```txt
src/
│
├── components/
│   ├── Navbar.jsx
│   └── ProtectedRoute.jsx
│
├── context/
│   ├── CartContext.jsx
│   └── AuthContext.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── ProductDetails.jsx
│   ├── Cart.jsx
│   ├── Contact.jsx
│   ├── Login.jsx
│   └── Checkout.jsx
│
├── utils/
│   └── currency.js
│
├── App.jsx
├── main.jsx
├── App.css
└── index.css
```

---

## How the App Works

When the user opens the app, the navbar stays visible on all pages.

The user can go to the shop page and view all products. Product data is loaded from the DummyJSON API. The user can also search products by name.

When the user clicks a product, the app opens a dynamic route like:

```txt
/product/1
```

The product ID is taken from the URL using `useParams()`, and then the app fetches the details of that product.

On the product details page, the user can add the product to the cart. The cart data is stored globally using Context API, so the navbar and cart page can access the same cart state.

The cart is also saved in localStorage, so if the browser is refreshed, the selected products are still available.

The checkout page is protected. If the user is not logged in, they are redirected to the login page. After clicking **Login as Guest**, the user can access checkout.

---

## Cart Functionality

The cart system supports:

- Add product to cart
- Remove product from cart
- Clear full cart
- Show total number of cart items
- Calculate total price
- Save cart in localStorage

The product prices from the API are converted and displayed in Indian Rupees using a helper function.

---

## Authentication

This project does not use real authentication.

It has a mock login system for learning protected routes.

The user can click:

```txt
Login as Guest
```

After that, the checkout page becomes accessible.

---

## Protected Route

The `/checkout` route is protected.

If the user is not logged in, they are automatically redirected to:

```txt
/login
```

This is handled using a `ProtectedRoute` component.

---

## Styling

This project uses normal CSS.

No Bootstrap, Tailwind, or external CSS framework is used.

The styling is written in:

```txt
src/App.css
src/index.css
```

The CSS includes styles for:

- Navbar
- Home page
- Product grid
- Product cards
- Product details page
- Cart page
- Contact form
- Login page
- Checkout page
- Responsive layout

---

## Installation and Setup

Clone the project:

```bash
git clone https://github.com/anucodeverse/Shopzone.git
```

Go to the project folder:

```bash
cd shopzone
```

Install dependencies:

```bash
npm install
```

Install React Router DOM if it is not already installed:

```bash
npm install react-router-dom
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal.

Usually it is:

```txt
http://localhost:5173
```

---

## Build Command

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

---

## What I Learned

Through this project, I practiced:

- Creating a React app with Vite
- Setting up multiple routes
- Creating dynamic routes
- Using `useParams()`
- Fetching API data
- Managing global state with Context API
- Avoiding prop drilling
- Saving data in localStorage
- Creating protected routes
- Building a simple e-commerce cart flow
- Writing custom CSS for layout and design

---

## Future Improvements

Some features that can be added later:

- Product quantity increase and decrease
- Category filter
- Sort by price
- Wishlist
- Real user login
- Payment page
- Order confirmation page
- Mobile menu
- Dark mode

---

## Conclusion

ShopZone is a simple React shopping project created for learning and practice. It covers important frontend concepts like routing, API integration, global state, localStorage, mock login, protected pages, and CSS-based UI design.
