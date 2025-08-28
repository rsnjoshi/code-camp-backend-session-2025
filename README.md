# 🔐 Secure Kanban Board API - Full-Stack Task Management System

[![Node.js](https://img.shields.io/badge/Node.js-22.14.0-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-5.1.0-blue.svg)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-6.13.0-2D3748.svg)](https://prisma.io/)
[![SQLite](https://img.shields.io/badge/SQLite-Database-003B57.svg)](https://sqlite.org/)
[![JWT](https://img.shields.io/badge/JWT-Authentication-000000.svg)](https://jwt.io/)
[![bcrypt](https://img.shields.io/badge/bcrypt-Security-red.svg)](https://www.npmjs.com/package/bcryptjs)

A comprehensive, secure Kanban board backend API built with Express.js, Prisma ORM, and JWT authentication. This project provides a complete task management system with user authentication, password encryption, input validation, and organized board management for modern productivity applications.

## ✨ Features

- 🔐 **JWT Authentication**: Secure user authentication with JSON Web Tokens
- 🔒 **Password Security**: BCrypt hashing for secure password storage
- 👥 **User Management**: Complete CRUD operations for user accounts
- 📋 **Column Management**: Create and manage Kanban board columns
- ✅ **Task Management**: Full task lifecycle with priority levels
- 🎯 **Priority System**: Four-level priority system (LOW, MEDIUM, HIGH, URGENT)
- 🏗️ **Relational Data**: Users → Columns → Tasks hierarchy
- ✅ **Input Validation**: Comprehensive request validation with express-validator
- 🛡️ **Security Middleware**: Built-in validation and error handling
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
- **Authentication**: JSON Web Tokens (JWT)
- **Security**: BCrypt for password hashing
- **Validation**: Express Validator for request validation
- **Development**: Nodemon for auto-reload
- **Architecture**: MVC pattern with service layer

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 22.14.0 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/rsnjoshi/code-camp-backend-session-2025.git
cd code-camp-express-session
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

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/auth/register-user` | Register a new user account |
| `POST` | `/auth/login` | Login user and receive JWT token |

### User Management Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/users/create-user` | Create a new user |
| `GET` | `/users/get-all-users` | Retrieve all users |
| `GET` | `/users/get-user/:userId` | Get a specific user by ID |
| `PATCH` | `/users/update-user/:userId` | Update a user's information |
| `DELETE` | `/users/delete-user/:userId` | Delete a user |

### Column Management Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/columns/create-column/:userId` | Create a new column for a user |
| `GET` | `/columns/get-all-columns` | Retrieve all columns |
| `GET` | `/columns/get-column/:columnId` | Get a specific column by ID |
| `GET` | `/columns/get-user-columns/:userId` | Get all columns for a specific user |
| `PATCH` | `/columns/update-column/:columnId` | Update a column |
| `DELETE` | `/columns/delete-column/:columnId` | Delete a column |

### Task Management Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/tasks/create-task/:columnId` | Create a new task in a column |
| `GET` | `/tasks/get-all-tasks` | Retrieve all tasks |
| `GET` | `/tasks/get-task/:taskId` | Get a specific task by ID |
| `GET` | `/tasks/get-column-tasks/:columnId` | Get all tasks for a specific column |
| `PATCH` | `/tasks/update-task/:taskId` | Update a task |
| `DELETE` | `/tasks/delete-task/:taskId` | Delete a task |

### Data Models

**User Schema:**
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

**Column Schema:**
```json
{
  "id": "string (UUID)",
  "title": "string",
  "userId": "string (UUID)",
  "createdAt": "datetime",
  "updatedAt": "datetime",
  "deletedAt": "datetime (nullable)"
}
```

**Task Schema:**
```json
{
  "id": "string (UUID)",
  "title": "string",
  "description": "string (nullable)",
  "priority": "enum (LOW, MEDIUM, HIGH, URGENT)",
  "columnId": "string (UUID)",
  "createdAt": "datetime",
  "updatedAt": "datetime",
  "deletedAt": "datetime (nullable)"
}
```

### Example Requests

**Register User:**
```bash
curl -X POST http://localhost:3000/auth/register-user \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@example.com",
    "fullName": "John Doe",
    "password": "securepassword123"
  }'
```

**Login User:**
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@example.com",
    "password": "securepassword123"
  }'
```

**Create Column:**
```bash
curl -X POST http://localhost:3000/columns/create-column/{userId} \
  -H "Content-Type: application/json" \
  -d '{
    "title": "To Do"
  }'
```

**Create Task:**
```bash
curl -X POST http://localhost:3000/tasks/create-task/{columnId} \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Complete project documentation",
    "description": "Write comprehensive README and API docs",
    "priority": "HIGH"
  }'
```

**Get Column Tasks:**
```bash
curl -X GET http://localhost:3000/tasks/get-column-tasks/{columnId}
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
│   │   ├── auth/
│   │   │   ├── index.js        # Authentication routes
│   │   │   ├── controllers/    # Auth controllers (login, register)
│   │   │   └── validators.js   # Auth validation rules
│   │   ├── health/
│   │   │   ├── index.js        # Health check routes
│   │   │   └── controllers/    # Health check controllers
│   │   ├── users/
│   │   │   ├── index.js        # User routes
│   │   │   ├── controllers/    # User CRUD controllers
│   │   │   └── validators.js   # User validation rules
│   │   ├── columns/
│   │   │   ├── index.js        # Column routes
│   │   │   ├── controllers/    # Column CRUD controllers
│   │   │   └── validators.js   # Column validation rules
│   │   └── tasks/
│   │       ├── index.js        # Task routes
│   │       ├── controllers/    # Task CRUD controllers
│   │       └── validator.js    # Task validation middleware
│   ├── services/
│   │   ├── index.js            # Service exports
│   │   ├── prismaService.js    # Database connection
│   │   ├── authService.js      # JWT & password services
│   │   ├── userService.js      # User business logic
│   │   ├── columnService.js    # Column business logic
│   │   └── taskService.js      # Task business logic
│   └── middlewares/
│       ├── index.js            # Middleware exports
│       └── requestValidator.js # Request validation middleware
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

The application includes three main models with relational structure:

**User Model:**
- **id**: Unique identifier (UUID)
- **email**: User's email address (unique)
- **fullName**: User's full name
- **password**: User's password (BCrypt hashed)
- **createdAt**: Record creation timestamp
- **updatedAt**: Record last update timestamp
- **deletedAt**: Soft delete timestamp (nullable)
- **Relationships**: One-to-many with Columns

**Column Model:**
- **id**: Unique identifier (UUID)
- **title**: Column title (e.g., "To Do", "In Progress", "Done")
- **userId**: Reference to the user who owns this column
- **createdAt**: Record creation timestamp
- **updatedAt**: Record last update timestamp
- **deletedAt**: Soft delete timestamp (nullable)
- **Relationships**: Belongs to User, One-to-many with Tasks

**Task Model:**
- **id**: Unique identifier (UUID)
- **title**: Task title
- **description**: Task description (optional)
- **priority**: Task priority (LOW, MEDIUM, HIGH, URGENT)
- **columnId**: Reference to the column containing this task
- **createdAt**: Record creation timestamp
- **updatedAt**: Record last update timestamp
- **deletedAt**: Soft delete timestamp (nullable)
- **Relationships**: Belongs to Column

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

- Adding environment variables for JWT secrets and database URL
- Implementing proper error handling and logging
- Adding authentication middleware for protected routes
- Setting up CORS policies for frontend integration
- Implementing refresh token mechanism for enhanced security
- Adding rate limiting and request validation
- Setting up proper environment-based configuration
- Using environment variables for sensitive data (JWT secret, database credentials)

## 🔐 Security Features

- **Password Hashing**: All passwords are encrypted using BCrypt
- **JWT Authentication**: Secure token-based authentication system
- **Input Validation**: Comprehensive request validation using express-validator
- **Soft Deletes**: Data integrity with soft delete functionality
- **Secure Headers**: Protection against common web vulnerabilities

## 🔄 Data Flow

1. **User Registration**: Create account with encrypted password
2. **Authentication**: Login to receive JWT access token
3. **Board Setup**: Authenticated users create columns for their Kanban boards
4. **Task Management**: Tasks are created within columns with priority levels
5. **Task Organization**: Tasks can be moved between columns and updated
6. **Data Relationships**: Users → Columns → Tasks hierarchy ensures data integrity

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
- [JWT.io](https://jwt.io/) - Learn about JSON Web Tokens
- [BCrypt.js Documentation](https://www.npmjs.com/package/bcryptjs)
- [Express Validator Documentation](https://express-validator.github.io/docs/)

---

⭐ **Star this repository** if you found it helpful!