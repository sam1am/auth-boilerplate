# FastAPI + React Authentication Boilerplate

This is a full-stack boilerplate application featuring a FastAPI backend with SQLite database and a React frontend with Tailwind CSS. It implements user authentication with JWT tokens and includes user registration, login, and profile management functionality.

## Project Structure

```
├── backend/
│   ├── app/
│   │   ├── core/
│   │   │   ├── database.py    # Database configuration
│   │   │   └── security.py    # Security utilities (JWT, password hashing)
│   │   ├── models/
│   │   │   └── user.py        # SQLAlchemy models
│   │   ├── routes/
│   │   │   └── auth.py        # Authentication endpoints
│   │   └── schemas/
│   │       └── user.py        # Pydantic schemas
│   └── main.py                # FastAPI application entry point
└── frontend/
    ├── src/
    │   ├── components/        # Reusable React components
    │   ├── contexts/          # React contexts (auth)
    │   ├── pages/             # Page components
    │   └── services/          # API service functions
    ├── package.json
    └── tailwind.config.js
```

## Features

- User authentication with JWT tokens
- User registration and login
- Password change functionality
- Protected routes
- Responsive design with Tailwind CSS
- SQLite database
- Cross-Origin Resource Sharing (CORS) enabled

## Prerequisites

- Python 3.8+
- Node.js 14+
- npm or yarn

## Installation

### Backend Setup

1. Create and activate a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
```

2. Install Python dependencies:
```bash
cd backend
pip install -r requirements.txt
```

3. Run the FastAPI server:
```bash
uvicorn main:app --reload
```

The API will be available at `http://localhost:8000`.
API documentation is available at `http://localhost:8000/docs`.

### Frontend Setup

1. Install Node.js dependencies:
```bash
cd frontend
npm install
```

2. Start the development server:
```bash
npm start
```

The frontend application will be available at `http://localhost:3000`.

## API Endpoints

### Authentication

- `POST /auth/register` - Register a new user
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

- `POST /auth/token` - Login and get access token
  ```json
  {
    "username": "user@example.com",
    "password": "password123"
  }
  ```

- `POST /auth/change-password` - Change password (requires authentication)
  ```json
  {
    "old_password": "oldpassword",
    "new_password": "newpassword"
  }
  ```

## Frontend Routes

- `/login` - Login page
- `/register` - Registration page
- `/profile` - Protected profile page

## Authentication Flow

1. User registers or logs in
2. Server returns JWT token
3. Frontend stores token in localStorage
4. Token is included in Authorization header for subsequent requests
5. Protected routes check for valid token

## Development

### Backend Development

- Add new routes in `backend/app/routes/`
- Create new models in `backend/app/models/`
- Define new schemas in `backend/app/schemas/`

### Frontend Development

- Add new components in `frontend/src/components/`
- Create new pages in `frontend/src/pages/`
- Add new API services in `frontend/src/services/`

## Security Considerations

1. Change the `SECRET_KEY` in `backend/app/core/security.py` before deployment
2. Implement proper password validation
3. Add rate limiting for authentication endpoints
4. Enable HTTPS in production
5. Implement refresh tokens
6. Add email verification

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- FastAPI
- React
- Tailwind CSS
- SQLAlchemy
- JWT