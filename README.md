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

## Screenshot Output:
- Signup
  
  ![Signup](https://github.com/user-attachments/assets/4999da10-9836-40c1-8b2a-705fd86e2fc1)


- Login
  
  ![Login](https://github.com/user-attachments/assets/9dd47b9d-c8c4-4dcf-9cd8-0442bb9b0158)


- Home

  ![Home](https://github.com/user-attachments/assets/f203199b-6979-45e4-aa48-b98c66abd8c8)



- Add New Student

  ![image](https://github.com/saranya535/StudentHub/assets/166517113/3810186e-5ebe-4046-9fd1-ec8db5d17e3c)

- Add New Course

  ![image](https://github.com/saranya535/StudentHub/assets/166517113/4462e88f-9181-43b1-b601-181da0aac0a8)

- Enroll Student to Course

  ![image](https://github.com/saranya535/StudentHub/assets/166517113/58e47769-34dd-477f-8ba6-d327fa293a62)

- Edit existing Course

  ![image](https://github.com/saranya535/StudentHub/assets/166517113/1c223c27-598e-4a47-9676-bf6e3c535608)

- Edit Student

  ![image](https://github.com/saranya535/StudentHub/assets/166517113/672ffa7b-3487-4613-8d4d-82af9551f00a)



