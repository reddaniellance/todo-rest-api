# TODO | NODEJS (REST API ONLY)

This is just a REST API - NO INTERFACE is included

## Table of Contents

- [Installation](#installation)
- [API Documentation](#documentation)
- [Acknowledgments](#acknowledgments)

## Installation

1. Clone the repository:

    - git clone https://github.com/reddaniellance/todo-rest-api.git

2. Install dependencies:

    - npm install

3. Start the application:
    - npm start
    - Open your browser and go to http://localhost:3000

## Documentation

<b> Get all TODOs </b>

      - GET http://localhost:3000/todo-items

<b> Create a TODO </b>

      - POST http://localhost:3000/todo-items
   - title (string)
   - description (string)
   - status (int) 0 = pending | 1 = ongoing | 2 = completed | 3 = canceled 


<b> Update a TODO </b>

      - PUT http://localhost:3000/todo-items/{id}
   - title (string)
   - description (string)
   - status (int) 0 = pending | 1 = ongoing | 2 = completed | 3 = canceled


<b> Delete a TODO </b>

      - DELETE http://localhost:3000/todo-items/{id}


## Acknowledgments

- This was built using Node.js and the Express framework (https://expressjs.com/).
