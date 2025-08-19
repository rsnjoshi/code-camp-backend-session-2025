# 🚀 Express.js User Management API

[![Node.js](https://img.shields.io/badge/Node.js-22.14.0-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-5.1.0-blue.svg)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-6.13.0-2D3748.svg)](https://prisma.io/)
[![SQLite](https://img.shields.io/badge/SQLite-Database-003B57.svg)](https://sqlite.org/)

A robust and scalable RESTful API built with Express.js and Prisma ORM for user management operations. This project demonstrates modern backend development practices with clean architecture and comprehensive CRUD functionality.

## ✨ Features

- 🔐 **User Management**: Complete CRUD operations for user entities
- 🏥 **Health Monitoring**: Built-in health check endpoints
- 🗄️ **Database Integration**: Prisma ORM with SQLite database
- 🔄 **Auto-reload**: Development mode with Nodemon
- 📊 **Database Studio**: Visual database management with Prisma Studio
- 🏗️ **Clean Architecture**: Organized codebase with separation of concerns
- 🚀 **Modern JavaScript**: ES6+ modules with latest Express.js

## 🛠️ Tech Stack

- **Runtime**: Node.js 22.14.0
- **Framework**: Express.js 5.1.0
- **Database**: SQLite with Prisma ORM
- **Development**: Nodemon for auto-reload
- **Architecture**: MVC pattern with service layer

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 22.14.0 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd code-camp-backend-session-2025
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up the Database

```bash
# Run database migrations
npm run db:migrate:dev

# (Optional) Open Prisma Studio to view/edit data
npm run db:studio
```

### 4. Start the Server

**Development Mode:**
```bash
npm run dev
```

**Production Mode:**
```bash
npm start
```

The server will start on `http://localhost:3000`

## 📚 API Documentation

### Health Check Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/health/check-server-health` | Check if the server is running |
| `POST` | `/health/echo-server` | Echo back the request data |

### User Management Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/users/create-user` | Create a new user |
| `GET` | `/users/get-all-users` | Retrieve all users |
| `GET` | `/users/get-user/:userId` | Get a specific user by ID |
| `PATCH` | `/users/update-user/:userId` | Update a user's information |
| `DELETE` | `/users/delete-user/:userId` | Delete a user |

### User Schema

```json
{
  "id": "string (UUID)",
  "email": "string (unique)",
  "fullName": "string",
  "password": "string",
  "createdAt": "datetime",
  "updatedAt": "datetime",
  "deletedAt": "datetime (nullable)"
}
```

### Example Requests

**Create User:**
```bash
curl -X POST http://localhost:3000/users/create-user \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@example.com",
    "fullName": "John Doe",
    "password": "securepassword123"
  }'
```

**Get All Users:**
```bash
curl -X GET http://localhost:3000/users/get-all-users
```

**Health Check:**
```bash
curl -X GET http://localhost:3000/health/check-server-health
```

## 📁 Project Structure

```
code-camp-express-session/
├── src/
│   ├── index.js                 # Application entry point
│   ├── routes/
│   │   ├── index.js            # Main router configuration
│   │   ├── health/
│   │   │   ├── index.js        # Health check routes
│   │   │   └── controllers/    # Health check controllers
│   │   └── users/
│   │       ├── index.js        # User routes
│   │       └── controllers/    # User CRUD controllers
│   └── services/
│       ├── index.js            # Service exports
│       ├── prismaService.js    # Database connection
│       └── userService.js      # User business logic
├── prisma/
│   ├── schema.prisma           # Database schema
│   ├── dev.db                  # SQLite database file
│   └── migrations/             # Database migrations
├── package.json                # Project configuration
└── README.md                   # Project documentation
```

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start the production server |
| `npm run dev` | Start development server with auto-reload |
| `npm run db:migrate:dev` | Run database migrations |
| `npm run db:studio` | Open Prisma Studio for database management |

## 🗄️ Database Management

This project uses **Prisma ORM** with **SQLite** for data persistence.

### Database Schema

The application includes a `User` model with the following fields:
- **id**: Unique identifier (UUID)
- **email**: User's email address (unique)
- **fullName**: User's full name
- **password**: User's password (consider hashing in production)
- **createdAt**: Record creation timestamp
- **updatedAt**: Record last update timestamp
- **deletedAt**: Soft delete timestamp (nullable)

### Prisma Commands

```bash
# Generate Prisma Client
npx prisma generate

# View database in browser
npm run db:studio

# Reset database (⚠️ destroys all data)
npx prisma migrate reset

# Deploy migrations to production
npx prisma migrate deploy
```

## 🚨 Environment Configuration

Currently, the application uses default configurations. For production deployment, consider:

- Adding environment variables for database URL
- Implementing proper error handling
- Adding authentication and authorization
- Setting up logging
- Configuring CORS policies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👤 Author

**Roshan Joshi**

## 🔗 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [Prisma Documentation](https://prisma.io/docs)
- [Node.js Documentation](https://nodejs.org/docs)
- [SQLite Documentation](https://sqlite.org/docs.html)

---

⭐ **Star this repository** if you found it helpful!
