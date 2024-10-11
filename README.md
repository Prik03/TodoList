# ToDo List Application

This is a full-stack ToDo List application built with **React.js** for the frontend and **Node.js**, **Express**, and **MongoDB** for the backend. The app allows users to create, read, update, and delete (CRUD) tasks, with all data stored in a MongoDB database.

## Features

- Add new tasks
- Edit tasks
- Delete tasks
- Fetch tasks from the MongoDB database
- Responsive design

## Tech Stack

- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Prik03/TodoList.git
cd todolist
```

### 2. Install dependencies

For both **frontend** (React.js) and **backend** (Node.js):

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd ../server
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the `server` directory and add the following environment variables:

```
MONGO_URI=<your-mongodb-connection-string>
PORT=5000
```

Replace `<your-mongodb-connection-string>` with the connection string of your MongoDB database.

### 4. Run the Application

#### 4.1 Start the backend server

In the `server` directory, run:

```bash
nodemon index
```

This will start the Node.js server on port `5000` (or the port you configured in `.env`).

#### 4.2 Start the frontend

In the `frontend` directory, run:

```bash
npm run dev
```

This will start the React frontend on port `3000`.

### 5. Access the Application

Open your browser and go to:

```
http://localhost:3000
```

### 6. API Endpoints

The backend exposes the following API routes:

- `GET /api/todo`: Fetch all tasks
- `POST /api/todo`: Create a new task
- `PUT /api/todo/:id`: Update an existing task
- `DELETE /api/todo/:id`: Delete a task

## Folder Structure

```
TodoList/
├── frontend/              # Frontend (React.js)
└── Server/               # Backend (Node.js, Express.js)
    ├── models/            # MongoDB models (e.g., Task.js)
    ├── routes/            # API routes
    ├── controllers/       # Logic for each API endpoint
    ├── .env               # Environment variables
└── README.md              # This file
```

## Contributing

Feel free to submit issues and pull requests to help improve this project.
