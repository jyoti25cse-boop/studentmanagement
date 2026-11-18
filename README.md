Student Management API

Project Description

Student Management API is a RESTful API built using Node.js, Express.js, and MongoDB. It allows users to manage student records by performing CRUD operations.

Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman
- JavaScript

Features

- Add a new student
- Get all students
- Update student details
- Delete a student
- Store student information in MongoDB

Student Details

Each student record contains:

- Name
- Email
- Age
- Course

API Endpoints

Method| Endpoint| Description
POST| "/api/students"| Add a new student
GET| "/api/students"| Get all students
PUT| "/api/students/:id"| Update student details
DELETE| "/api/students/:id"| Delete a student

Installation and Setup

1. Clone the repository:
   
   git clone YOUR_GITHUB_REPOSITORY_URL

2. Open the project folder:
   
   cd Student

3. Install dependencies:
   
   npm install

4. Create a ".env" file in the project folder:
   
   PORT=5000
MONGO_URI=your_mongodb_connection_string

5. Start the server:
   
   npm run dev

Testing

All API endpoints can be tested using Postman with the local server:

"http://localhost:5000"

Database

MongoDB Atlas is used to store student records. Mongoose is used to connect the application with MongoDB.

Author

Garv

Conclusion

This project demonstrates the implementation of CRUD operations using Node.js, Express.js, and MongoDB. It provides a simple way to create, read, update, and delete student records through REST APIs.
