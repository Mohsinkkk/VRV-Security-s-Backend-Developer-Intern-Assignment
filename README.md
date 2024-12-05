# VRV Security’s Backend Developer Intern Assignment

## Project Description
This project implements an Authentication and Authorization system with Role-Based Access Control (RBAC). Users can register, log in, and access specific resources based on assigned roles.

## Features
- Secure user authentication (JWT).
- Role-Based Access Control (Admin, User, Moderator).
- Protected routes for authorized access.
- MongoDB integration for user and role management
- Open your browser at http://localhost:5000

## Folder Structure

rbac-project/
│
├── src/
│   ├── config/
│   │   └── db.js           # Database connection
│   ├── middleware/
│   │   └── authMiddleware.js # Authentication middleware
│   ├── models/
│   │   └── User.js         # User schema
│   ├── routes/
│   │   ├── authRoutes.js   # Authentication routes
│   │   ├── userRoutes.js   # User management routes
│   └── server.js           # Main server file
│
├── .env                     # Environment variables (excluded from Git)
├── .gitignore               # Git ignore file
├── package.json             # Project dependencies
├── README.md                # Project description

## Installation
1. Clone the repository:
git clone https://github.com/Mohsinkkk/VRV-Security-s-Backend-Developer-Intern-Assignment.git
css
Copy code
2. Navigate to the project directory:
cd VRV-Security-s-Backend-Developer-Intern-Assignment
markdown
Copy code
3. Install dependencies:
npm install
markdown
Copy code
4. Create a `.env` file and configure your environment variables:
MONGO_URI=<your_mongo_connection_string> PORT=5000 JWT_SECRET=<your_secret_key>
markdown
Copy code
5. Start the development server:
npm run dev
markdown
Copy code

## Usage
- Open `http://localhost:5000` to access the API.

## Technologies
- Node.js
- Express.js
- MongoDB
- JWT for Authentication

## Contribution
Feel free to fork the repository and contribute by submitting pull requests.

## License
MIT
