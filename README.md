# Trivia-facts (Work in progress)

This is my personal Express JS + AWS (backend) + React JS (frontend) project, aiming to provide a varieties of informations to public.

## Current progress

1. Trivia facts tile up and runnning. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for testing purposes. 

### Prerequisites

#### Local database

Create local SQL table trivia-facts/trivia-fact and import backend/trivia-fact-50 or trivia-fact-200 depending on the facts size you want, then in `index.js` use `const pool = require('./localPool');`.

#### Amazon Web Services RDS
In `index.js` use `const pool = require('./awsPool');`.

### Run

Run the following command to fetch data from database, start the server and listen on port 4000:
```
node backend/index.js
```
The frontend is built via `create-react-app`, run the following command to start the React application:
```
cd frontend
npm start
```
The application should be up and running at localhost:3000/trivia-facts now.

## Built With

* [React-Bulma-components](https://www.npmjs.com/package/react-bulma-components) - The front end framework used
* [Express](https://expressjs.com/) - Backend
* [React](https://reactjs.org/) - Frontend

## Versioning
1.0
## Authors

* **Xiaohan Du**

## License

This project is licensed under the MIT License
