# Student Management System

A web-based School & Student Management System built with **React**, **Vite**, and **React Router**.

## Features

- **Authentication / Login**: Role-based redirection (admin and student).
- **Home Overview**: School administration summary, faculty assignments, classroom statistics, and attendance tracking.
- **Student Profile Dashboard**: Overview of student details, recent marks, fee statuses, and term performance.
- **Add Marks**: Dynamic mark entry supporting Ordinary Level (O/L baskets) and Advanced Level (A/L streams: Maths, Bio, Tech, Art).
- **Student Registration**: Form to register new students with guardian details.
- **Fee Management**: Manage and track service charges, donations, and school development society fees.

---

## Project Structure

```text
├── src/
│   ├── components/            # Reusable components
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.jsx
│   │   │   └── Sidebar.css
│   │   └── index.js           # Barrel export for components
│   │
│   ├── pages/                 # Application views/routes
│   │   ├── Dashboard/         # Student Profile & Performance
│   │   │   ├── StudentDashboard.jsx
│   │   │   └── StudentDashboard.css
│   │   ├── Fees/              # Fee Management
│   │   │   ├── AddFeeForm.jsx
│   │   │   └── AddFeeForm.css
│   │   ├── Home/              # Admin Home Overview
│   │   │   ├── HomePage.jsx
│   │   │   └── HomePage.css
│   │   ├── Login/             # Authentication Portal
│   │   │   ├── LoginForm.jsx
│   │   │   └── LoginForm.css
│   │   ├── Marks/             # Term Marks Entry
│   │   │   ├── AddMarksForm.jsx
│   │   │   └── AddMarksForm.css
│   │   ├── Register/          # Student Registration
│   │   │   ├── RegisterForm.jsx
│   │   │   └── RegisterForm.css
│   │   └── index.js           # Barrel export for pages
│   │
│   ├── App.jsx                # Router configuration
│   ├── index.css              # Global styles & resets
│   └── main.jsx               # React DOM entry point
│
├── index.html                 # HTML shell
├── package.json               # Dependencies & scripts
├── vite.config.js             # Vite configuration
└── README.md
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

## How to Run

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```

### 3. Open in Browser
Open the local URL displayed in the terminal (typically `http://localhost:5173`).

---

## Login Demo Credentials

On the login page (`/`):
- **Admin**: Enter username `admin` (any password) to access the Admin / Student Profile overview.
- **Student**: Enter any other username to access the Student Portal.

---

## Available Scripts

- `npm run dev`: Starts the local Vite development server.
- `npm run build`: Bundles the project for production into `dist/`.
- `npm run preview`: Locally previews the production build.
