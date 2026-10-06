# Degree Flow

A web application that helps students track assignments, their weighting and due dates, and calculates a running weighted grade average per module.

## Problem it solves

Students juggling multiple modules often rely on scattered handbooks and spreadsheets to track assignment weightings and estimate where they stand overall. Existing tools tend to be either basic to-do lists with no grade awareness, or grade calculators with no workload tracking, nothing combines both. Degree Flow aims to close that gap by giving students live visibility into both their workload and their running grade as results come in.

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

### Completed
- [x] Project setup (Node.js, Express, MongoDB via Mongoose)
- [x] MongoDB Atlas connection established

### In progress
- [ ] User schema and authentication (signup/login)
- [ ] Module schema
- [ ] Assignment schema
- [ ] Weighted grade average calculation (per module)
- [ ] Auto-status update for overdue assignments
- [ ] Dashboard view

### Deferred (future development, post-dissertation)
- [ ] Rule-based assignment priority suggestions
- [ ] AI-assisted revision tips
- [ ] Native mobile app
- [ ] Freemium monetisation model

## Design notes

This project is being developed as part of a Level 6 dissertation (Negotiated Research, UCEN Manchester). The dissertation scope is deliberately limited to core features (assignment tracking and weighted grade calculation) to prioritise clean, secure, maintainable architecture over feature breadth. Additional features are planned for continued development as a personal project after graduation.
