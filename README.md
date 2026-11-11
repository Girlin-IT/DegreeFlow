## Research

**Aim:** 
To design, develop and evaluate a working prototype of Degree Flow, a student assignment tracker and weighted grade calculator, in order to investigate how effectively Node.js and its library ecosystem support secure and scalable web prototype development.

**Research question:** To what extent does Node.js and its library ecosystem support the development of a secure and scalable web application, using Degree Flow, a student assignment tracker and weighted grade calculator, as a proof-of-concept system?

**Objectives:**
1. Design and develop Degree Flow as a working prototype using Node.js, Express and MongoDB, providing functionality for assignment tracking and weighted grade calculation.

2. Evaluate the security of the application by implementing and testing controls such as password hashing, authentication and input validation, with reference to relevant OWASP web security risks.

3. Evaluate the scalability and maintainability of the application through unit testing, basic load testing and analysis of how easily the system can be extended with additional features.


## Tech stack

- **Backend:** Node.js, Express
- **Database:** MongoDB (via Mongoose)
- **Environment variables:** dotenv
- **Version control:** Git / GitHub

## Project structure
DegreeFlow/
├── controllers/ # Logic for handling requests (e.g. creating an assignment)
├── models/ # Mongoose schemas (User, Module, Assignment)
├── routes/ # URL endpoints, mapped to controller functions
├── index.js # Entry point — starts the server and connects to MongoDB
├── .env # Environment variables (not committed to git)
└── .gitignore # Excludes node_modules and .env from version control


## Setup instructions

1. Clone the repository
git clone https://github.com/Girlin-IT/DegreeFlow.git

2. Install dependencies

npm install

3. Create a `.env` file in the project root with:

MONGODB_URI=your-mongodb-connection-string

4. Run the server

node index.js

   You should see `MongoDB connected successfully` in the terminal.

## Features

### Setup
- [x] Project setup (Node.js, Express, MongoDB via Mongoose)
- [x] MongoDB Atlas connection established
- [x] bcrypt installed

### Models
- [x] User schema with password hashing
- [x] Module schema
- [x] Assignment schema

### Backend
- [ ] Signup and login routes
- [ ] Module routes
- [ ] Assignment routes
- [ ] Weighted grade average calculation (per module)
- [ ] Auto-status update for overdue assignments

### Frontend
- [ ] Login and signup pages
- [ ] Dashboard
- [ ] Assignment tracker
- [ ] Grade calculator

### Evaluation (scope to be confirmed)
- [ ] Unit testing
- [ ] Security
- [ ] Scalability
- [ ] Peer testing

### Deferred (future development, post-dissertation)
- [ ] Rule-based assignment priority suggestions
- [ ] AI-assisted revision tips
- [ ] Native mobile app
- [ ] Freemium monetisation model

## Design notes

This project is being developed as part of a Level 6 dissertation (Negotiated Research, UCEN Manchester). The dissertation scope is deliberately limited to core features (assignment tracking and weighted grade calculation) to prioritise clean, secure, maintainable architecture over feature breadth. Additional features are planned for continued development as a personal project after graduation.
