# Expense Tracker

A responsive React-based expense tracking application that allows users to add, edit, delete, search, filter, sort, and analyze their expenses through a simple and intuitive interface.

## Features

- Add and manage expenses

- Edit existing expenses

- Delete expenses with confirmation

- Filter expenses by category, month, and year

- Search expenses by title

- Sort expenses by amount and date

- Persist expense data using localStorage

- View total expense summary

- Expense reports with charts

- Responsive design for desktop and mobile

- Frontend login interface

## Tech Stack

- React.js

- React Router

- JavaScript (ES6+)

- CSS3

- Recharts

- Lucide React

- Vite

## Application Overview

The Expense Tracker is designed to provide a simple way to manage daily expenses from a single interface.

Users can add new expenses by entering the title, amount, date, and category. Existing expenses can be edited or deleted, with a confirmation step before deletion.

The dashboard provides filtering options by category, month, and year, along with search and sorting functionality for easier expense management. Expense data is persisted using browser localStorage, so data remains available after refreshing the page.

The Reports section presents expense data through visual charts for easier analysis.

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- Node.js

- npm

### Installation

Clone the repository and install the project dependencies:

```bash

git clone https://github.com/saikirantalasila/expense-tracker.git

cd expense-tracker

npm install

```

### Running the Project

Start the development server:

```bash

npm run dev

```

The application will be available at the local development URL provided by Vite.

## Project Structure

```text

expense-tracker/

├── public/

├── src/

│ ├── assets/

│ ├── components/

│ ├── data/

│ ├── pages/

│ ├── App.jsx

│ └── main.jsx

├── screenshots/

│ ├── dashboard.png

│ ├── expense-form.png

│ ├── login.png

│ └── reports.png

├── package.json

├── vite.config.js

└── README.md

```

## Screenshots

### Dashboard

![Expense Tracker Dashboard](screenshots/dashboard.png)

### Add / Edit Expense

![Add and Edit Expense](screenshots/expense-form.png)

### Reports

![Expense Reports](screenshots/reports.png)

### Login

![Expense Tracker Login](screenshots/login.png)

## Current Limitations

- Authentication is currently implemented as a frontend demo interface and does not provide real user authentication.

## Future Improvements

- Add backend and database integration

- Implement secure user authentication

- Add advanced expense analytics and reporting

- Improve responsive design across mobile, tablet, and desktop

- Add data export functionality
