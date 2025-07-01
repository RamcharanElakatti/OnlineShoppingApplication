# Online Shopping Application

This is a simple **Online Shopping Application** built with **ReactJS** (frontend) and **Spring Boot** (backend). It allows users to browse products, add items to the cart, view their orders, and manage their wishlist. Users can securely log in and access their orders and wishlist.

## Features

- **Homepage**: Display featured products for users to browse.
- **Product Page**: View detailed product information, including price, rating, and description.
- **Cart**: Add products to the shopping cart and view them before checkout.
- **My Orders**: View past orders after logging in.
- **Wishlist**: Save products for later purchase (only accessible when logged in).
- **Login/Registration**: Users can securely log in and register for a personalized experience.

## Technologies Used

- **Frontend**:
  - ReactJS
  - React Router for routing
  - Bootstrap for styling
  - Axios for API calls



## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (for ReactJS)
- **Java** (for Spring Boot)
- **MySQL** (or another relational database, if needed)

### Installing Dependencies

1. Clone the repository:

   ```bash
   git clone https://github.com/RamcharanElakatti/OnlineShoppingApplication.git
Frontend (ReactJS):

Navigate to the frontend directory and install the dependencies:

bash
Copy code
cd frontend
npm install
Backend (Spring Boot):


Frontend:
To run the ReactJS application locally, navigate to the frontend folder and start the development server:

bash
Copy code
npm start
This will start the React development server on http://localhost:5173.



How to Use
Login/Register: Users need to log in or register first to access protected features such as My Orders and Wishlist.

Browse Products: View the available products on the homepage or the product page.

Add to Cart: Click the "Buy Now" button on a product to add it to the cart.

View Cart: Go to the Cart page to review the products added to the cart.

My Orders: Once logged in, users can view their past orders.

Wishlist: Users can save products to their wishlist for later purchasing.

Folder Structure
bash
Copy code
/frontend          # ReactJS frontend code
  /src
    /components    # React components (e.g., ProductCard, Cart, MyOrders)
    /styles        # CSS or SCSS files


.gitignore
The following files and folders are ignored in Git (they should not be committed to the repository):

txt
Copy code
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# Node modules
node_modules/
build/
.env
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
Contributing
We welcome contributions to this project. If you'd like to help improve the project, follow these steps:

Fork the repository

Create a new branch (git checkout -b feature-xyz)

Make your changes

Commit your changes (git commit -am 'Add feature xyz')

Push to the branch (git push origin feature-xyz)

Create a new Pull Request

License
This project is licensed under the MIT License – see the LICENSE file for details.

yaml
Copy code

---


