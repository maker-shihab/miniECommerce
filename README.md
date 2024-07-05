# Mini ECommerce

A basic backend for an e-commerce project, built with TypeScript, Node.js, Express, and MongoDB.

## Functional Requirements

### Products

- Product creation
- Product getting
- Product updating
- Product deleting

### Order

- Order creation
- Order getting
- Order updating
- Order deleting

## Project Setup

### Installation

1. **Clone the repository:**

   git clone <repository-url>
   cd <project-directory>

2. **Install dependencies:**

   npm install

3. **Start the development server::**
   npm run dev

4. **Base URL:**

   https://mini-ec-ommerce.vercel.app/api

## Products Endpoints

### Create a New Product

- **Endpoint:** [POST /products](https://mini-ec-ommerce.vercel.app/api/products)
- **Description:** Create a new product.

### Get All Products

- **Endpoint:** [GET /products](https://mini-ec-ommerce.vercel.app/api/products)
- **Description:** Retrieve all products.

### Get a Single Product

- **Endpoint:** [GET /products/:productId](https://mini-ec-ommerce.vercel.app/api/products/:productId)
- **Description:** Retrieve a single product by its ID.

### Update a Product

- **Endpoint:** [PUT /products/:productId](https://mini-ec-ommerce.vercel.app/api/products/:productId)
- **Description:** Update an existing product by its ID.

### Delete a Product

- **Endpoint:** [DELETE /products/:productId](https://mini-ec-ommerce.vercel.app/api/products/:productId)
- **Description:** Delete a product by its ID.

## Orders Endpoints

### Create a New Order

- **Endpoint:** [POST /orders](https://mini-ec-ommerce.vercel.app/api/orders)
- **Description:** Create a new order.

### Get All Orders

- **Endpoint:** [GET /orders](https://mini-ec-ommerce.vercel.app/api/orders)
- **Description:** Retrieve all orders.

### Retrieve Orders by User Email

- **Endpoint:** [GET /orders?email=alu1a@gmail.com](https://mini-ec-ommerce.vercel.app/api/orders?email=alu1a@gmail.com)
- **Description:** Retrieve orders by the user's email.

## Conclusion

Thank you for using our E-Commerce API! We hope this documentation helps you integrate and utilize the endpoints effectively.

For more details, updates, and source code, visit our GitHub repository:

[GitHub Repository - miniECommerce](https://github.com/maker-shihab/miniECommerce)

Happy coding!
