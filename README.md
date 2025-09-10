# Resume Builder MERN App
## A fullstack MERN application that allows users to create, update, and manage resumes with authentication and image uploads. It provides a user-friendly dashboard for managing multiple resumes and supports uploading profile images and thumbnails.
## 🚀 Features
###   🔐 User Authentication (JWT-based login & registration)
### 👤 User Profile with image upload support
### 📄 Create, Read, Update, Delete (CRUD) resumes
### 🖼️ Upload resume thumbnail & profile images
### 📊 Dashboard to manage multiple resumes
### 🌐 RESTful API with protected routes
### ⚡ Built with React (Vite) & Tailwind CSS frontend
### ⚙️ Node.js, Express & MongoDB backend
## 🛠️ Tech Stack
### Frontend:
  ### - React 19 (Vite)
  ### - React Router DOM v7
  ### - Tailwind CSS
  ### - React Hot Toast
  ### - React Icons

### Backend:
  ### - Node.js & Express
  ### - MongoDB & Mongoose
  ### - JWT Authentication
  ### - Multer (for file uploads)
  ### - Bcrypt.js (for password hashing)

## Frontend runs at: http://localhost:5173
## Backend runs at: http://localhost:5000

## 🔑 Environment Variables
  ### - PORT → Backend port (default: 5000)
  ### - MONGO_URI → MongoDB connection string
  ### - JWT_SECRET → Secret key for JWT tokens
  ### - CLIENT_URL → Allowed frontend origin (default: http://localhost:5173)

## 📡 API Endpoints
## Auth Routes
  ### - POST /api/auth/register → Register new user
  ### - POST /api/auth/login → Login user & return token
  ### - GET /api/auth/profile → Get logged-in user profile
  ### - POST /api/auth/upload-image → Upload profile image
## Resume Routes
  ### - POST /api/resume → Create a new resume
  ### - GET /api/resume → Get all resumes for logged-in user
  ### - GET /api/resume/:id → Get single resume by ID
  ### - PUT /api/resume/:id → Update resume
  ### - DELETE /api/resume/:id → Delete resume
  ### - PUT /api/resume/:id/upload-images → Upload resume thumbnail/profile images
