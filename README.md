# 📝 Notes Management System

A backend-based Notes Management application developed using **Node.js**, **Express.js**, and **MongoDB**. This project was built while learning backend development concepts such as REST APIs, authentication, database integration, middleware handling, and server-side architecture.

---

# 🚀 Features

- 🔐 User Authentication using JWT
- 📝 Create, Update, Delete, and Manage Notes
- 📦 RESTful API Architecture
- 🗂️ MongoDB Database Integration
- 🛡️ Password Hashing with bcrypt
- ⚡ Express.js Backend Server
- 🌐 Environment Variable Configuration
- ❌ Error Handling Middleware
- 🧪 API Testing using Postman

---

# 🛠️ Tech Stack

## Backend
- Node.js
- Express.js

## Database
- MongoDB
- Mongoose

## Authentication
- JWT (JSON Web Token)
- bcrypt.js

## Tools
- Postman
- Nodemon
- dotenv

---

# 📂 Project Structure

```bash
Notes-Management/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── config/
├── .env
├── server.js
├── package.json
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Keerthan-poovaiah/Notes-Management.git
```

## 2️⃣ Navigate to Project Folder

```bash
cd Notes-Management
```

## 3️⃣ Install Dependencies

```bash
npm install
```

## 4️⃣ Configure Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## 5️⃣ Run the Server

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

---

# 📌 API Endpoints

## Authentication Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/users/register` | Register User |
| POST | `/api/users/login` | Login User |

---

## Notes Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get Notes |
| POST | `/api/notes` | Create Note |
| PUT | `/api/notes/:id` | Update Note |
| DELETE | `/api/notes/:id` | Delete Note |

---

# 🔐 Authentication

Protected routes require JWT token in request headers:

```bash
Authorization: Bearer your_token
```

---

# 🧪 API Testing

The APIs were tested using **Postman** for:
- Authentication testing
- CRUD operations
- Route protection
- Database validation
- Error handling

---

# 📈 Learning Outcomes

This project helped in understanding:

- Backend Development Fundamentals
- REST API Design
- MongoDB Database Operations
- Authentication & Authorization
- Middleware Handling
- Error Management
- API Testing & Debugging

---

# 🌟 Future Improvements

- Notes Categorization
- Search Functionality
- Pagination
- Role-Based Access
- File Upload Support
- API Documentation using Swagger
