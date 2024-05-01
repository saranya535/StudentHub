# StudentHub

StudentHub is a web application designed to manage courses and students in an educational institution. It provides functionalities for adding, updating, and deleting both courses and students. It also has option to enroll student into courses.

## Features

- View list of courses
- Add new courses
- Update existing courses
- Delete courses
- Enroll students into courses
- View list of students
- Add new students
- Edit existing students
- Delete students

## Technologies Used

- **MongoDB**: NoSQL database used for storing course and student information.
- **Express.js**: Node.js framework used for building the backend server.
- **React**: JavaScript library used for building the frontend user interface.
- **Node.js**: JavaScript runtime environment used for running the backend server.
- **Mongoose**: MongoDB object modeling tool used for interacting with the MongoDB database.
- **bcryptjs**: Library used for hashing passwords.
- **jsonwebtoken**: Library used for generating and verifying JSON Web Tokens for authentication.
- **Axios**: Promise-based HTTP client for making HTTP requests from the frontend to the backend.
- **Bootstrap**: Frontend framework used for styling the user interface.

## Installation

1. Clone the repository:

   - https://github.com/saranya535/StudentHub.git

2. Install dependencies:
   - On server side
        - cd server
        - npm install
   - On client side
      - cd client
      - npm install

3. Set up environment variables:

   - Create a `.env` file in the server folder.
   - Add the following environment variables:
      - PORT=3000
      - MONGODB_URI=your_mongodb_url
      - SECRET_KEY=your_secret_key
4. Run the application

   - On server terminal
        - node server.js
   - On client terminal
        - npm start
