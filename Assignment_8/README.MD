# User Management API with Node.js, Express, and MongoDB
 
This is a Node.js application that provides a RESTful API for user management. It uses Express as the web framework and MongoDB as the database. Users can be created, updated, deleted, and retrieved through various API endpoints.
 
## Prerequisites
 
Before running the application, ensure you have the following installed:
 
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
 
## Getting Started
 
 
The API will be available at http://localhost:3000 by default. You can change the port by setting the PORT environment variable.
 
## API Endpoints
 
### Create User
 
- **POST** `/user/create`
 
Create a new user with a full name, email, and password. Passwords are securely hashed before storage.
 
### Update User
 
- **PUT** `/user/edit`
 
Update a user's full name and password. Email cannot be updated. Proper error messages are thrown if the user is not in the database.
 
### Delete User
 
- **DELETE** `/user/delete`
 
Delete a user by providing their email.
 
### Get All Users
 
- **GET** `/user/getAll`
 
Retrieve a list of all user full names and email addresses (passwords are not exposed) stored in the database.
 
## Error Handling
 
The API handles errors gracefully and provides informative error messages. The application includes middleware for error handling and not found routes.
 
## Environment Variables
 
- `PORT` (default: 3000): The port on which the server will listen.
- `MONGODB_URI`: The MongoDB connection URI.
 
 
## Security
 
This application takes security seriously by hashing and salting passwords using bcrypt. It also validates user inputs to ensure data integrity.