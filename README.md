# Product Catalog App (React)
A simple React-based product catalog frontend that allows users to view, search, filter, and wishlist products.  
Built as part of a coding challenge, this project integrates with [FakeStoreAPI](https://fakestoreapi.com) and demonstrates component-based UI design, state management, and user interaction handling.

---

## Getting Started

### Requirements
- Node.js & npm installed
- Internet connection (for API calls)

### To Run Locally

bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm start

# 3. Open in your browser:
http://localhost:3000

 Features: A. Product List

    Fetch products from fakestoreapi.com

    Live search by product name

    Filter by category (fetched from API)

    Loading indicator during fetch

B. Product Detail (/product/:id)

    Display full product info

    Add/remove wishlist (stored in localStorage)

    Review form with validation:

        Name (required)

        Email (valid format, required)

        Rating (1–5, required)

        Comment (optional)

        On submit: validation → toast success → form reset

C. Wishlist (/wishlist)

    Shows all wishlisted products

    Can remove items

    Data persists via localStorage

## Tech Stack

| Area         | Stack                  |
|--------------|------------------------|
| Frontend     | React (CRA)            |
| State Mgmt   | Context API + useState |
| Routing      | React Router DOM       |
| UI Feedback  | React Toastify         |
| Data Source  | fakestoreapi.com       |

## Challenge Checklist

Fetch product + category from API, Filter & search, Wishlist with localStorage, Detail page with review form, Loading indicator, Modular component structure
