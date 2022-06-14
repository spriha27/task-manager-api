# Task Manager App

This is a backend application of Task Manager app developed using NodeJS and MongoDB. It is currently hosted at https://spriha-task-manager.herokuapp.com.

The following REST API methods are available (can be called using Postman):
- **POST** `/users`: Used to create a new user.<br />
  *Body* - `{
    "name": "username",
    "email": "emailid@gmail.com",
    "age": "21",
    "password": "pswrd123"
  }`

  It doesn't allow existing username/email to create account. It also doesn't allow password field to contain the keyword "password". JWT token is assigned to the new user's session. 

- **POST** `/users/me/avatar`: Used to upload avatar picture of the user of type jpg, jpeg or png only, limited to 2MB. Needs auth token.<br />
  *Body* : form-data
    `KEY: avatar
    VALUE: pic.jpg`

- **GET** `/users/me/avatar`: Used to get avatar picture of the user. Needs auth token.

- **DELETE** `/users/me/avatar`: Used to delete avatar picture of the user. Needs auth token.

- **POST** `/users/login`: Used to login an existing user. JWT token is assigned to this user's session.<br />
  *Body* - `{
    "email": "emailid@gmail.com",
    "password": "pswrd123"
  }`

- **POST** `/users/logout`: Used to logout of current session. Needs auth token.

- **POST** `/users/logoutAll`: Used to logout of all sessions of the user. Needs auth token.

- **GET** `/users/me`: Used to get current logged-in user's profile information. Needs auth token.

- **PATCH** `/users/me`: Used to modify profile information of an existing user. Needs auth token.<br />
  *Body* - `{
    "password": "myheartsastereo"
  }`

- **DELETE** `/users/me`: Used to delete current logged-in user and tasks associated with the user. Needs auth token.<br /><br />


- **POST** `/tasks`: Used to create tasks for the current logged-in user. By default sets "completed" value to 'false'. Needs auth token.<br />
  *Body* - `{
    "description": "Task 1",
    "completed": "true"
}`

- **GET** `/tasks`: Used to get current logged-in user's tasks. Needs auth token. Can include params like `tasks?completed=false`, `tasks?limit=10&skip=20` and `tasks?sortBy=createdAt:desc`. Needs auth token.

- **GET** `/tasks/:id`: Used to get a specific task by it's ID. Needs auth token.

- **PATCH** `/tasks/:id`: Used to change a specific task's description or completed status by it's ID. Needs auth token.<br />
  *Body* - `{
    "description": "Task 2"
}`

- **DELETE** `/tasks/:id`: Used to delete a specific task by it's ID. Needs auth token.
