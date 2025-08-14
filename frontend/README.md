# Task Manager (MERN)

JWT-authenticated task manager built with **MongoDB, Express, React, Node**.

## Features
- Register / Login (JWT)
- Create / list / update / delete tasks
- Mark tasks as completed/pending
- Protected API routes
- Clean, responsive UI

## Tech
- Backend: Node, Express, Mongoose, JWT, bcrypt
- Frontend: React, Axios, Context API
- DB: MongoDB

## Setup
1. **Backend**
   - Create `backend/.env`:
     ```
     MONGO_URI=mongodb://127.0.0.1:27017/task_manager
     JWT_SECRET=supersecretchangeme
     PORT=5000
     ```
   - `cd backend && npm install && npm run dev`

2. **Frontend**
   - Create `frontend/.env`:
     ```
     REACT_APP_API_URL=http://localhost:5000
     ```
   - `cd frontend && npm install && npm start`

## Deploy
- **Backend (Render)**
  - Build command: `npm install`
  - Start command: `npm start`
  - Environment: `MONGO_URI`, `JWT_SECRET`
  - Add CORS: set `REACT_APP_API_URL` on frontend to the Render URL.

- **Frontend**
  - Set env: `REACT_APP_API_URL=https://your-backend.onrender.com`
  - Build: `npm run build`
  - Deploy the `build/` folder.

## API
- `POST /api/users/register` { name, email, password }
- `POST /api/users/login` { email, password }
- `GET /api/users/me` (Bearer token)
- `GET /api/tasks` (Bearer token)
- `POST /api/tasks` { title, description? }
- `PUT /api/tasks/:id` { title?, description?, status? }
- `DELETE /api/tasks/:id`
