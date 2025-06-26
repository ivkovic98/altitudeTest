# Altitude UI

A modern React application built with TypeScript, Vite, and styled-components. This project features a responsive user interface with authentication, product management, analytics dashboard, and user management capabilities.

## 🚀 Quick Start

Follow these steps to get the application running locally:

### Prerequisites

Make sure you have the following installed on your system:
- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

### Backend Setup

This application requires a backend API to function properly:

1. **Clone and setup the backend**
   ```bash
   git clone https://github.com/ivkovic98/altitudeTestAPI.git
   ```
   
2. **Follow the backend setup instructions** in the [altitudeTestAPI repository](https://github.com/ivkovic98/altitudeTestAPI)

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ivkovic98/altitudeTest.git
   cd altitudeTest/AltitudeUI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173` (or the URL shown in your terminal)
   - The application should now be running!

### Login Credentials

Use these admin credentials to access the application:
- **Email:** `admin@test.com`
- **Password:** `admin123`

*Note: These credentials are set up through the backend seeder.*

## 🐳 Docker Setup (Alternative)

If you prefer to run the application using Docker:

### Prerequisites for Docker
- **Docker** (version 20.10 or higher)
- **Docker Compose** (version 2.0 or higher)

### Docker Setup Steps

1. **Clone both repositories**
   ```bash
   git clone https://github.com/ivkovic98/altitudeTest.git
   git clone https://github.com/ivkovic98/altitudeTestAPI.git
   ```

2. **Navigate to the frontend directory**
   ```bash
   cd altitudeTest/AltitudeUI
   ```

3. **Run with Docker Compose**
   ```bash
   docker-compose up --build
   ```

4. **Access the application**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:8000`
   - Database: `localhost:5432`

### Docker Commands

- **Build and start all services:**
  ```bash
  docker-compose up --build
  ```

- **Run in background:**
  ```bash
  docker-compose up -d
  ```

- **Stop all services:**
  ```bash
  docker-compose down
  ```

- **View logs:**
  ```bash
  docker-compose logs -f
  ```

- **Rebuild specific service:**
  ```bash
  docker-compose build frontend
  ```

### Docker Architecture

The Docker setup includes:
- **Frontend**: React app served by Nginx
- **Backend**: Node.js API server
- **Database**: PostgreSQL database
- **Network**: Custom bridge network for service communication

## 📋 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Styled Components + Tailwind CSS
- **HTTP Client:** Axios
- **State Management:** TanStack Query (React Query)
- **Routing:** React Router DOM
- **Charts:** Chart.js with React Chart.js 2
- **Authentication:** JWT
- **Form Validation:** Yup
- **Notifications:** React Hot Toast

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── services/           # API services and network configuration
├── models/             # TypeScript type definitions
├── routes/             # Routing configuration
├── utils/              # Utility functions
├── styles/             # Global styles and theme
└── assets/             # Static assets (images, icons)
```

## 🌟 Features

- **Authentication System** - Login/logout functionality
- **Product Management** - CRUD operations for products
- **User Management** - Admin user management capabilities
- **Analytics Dashboard** - Data visualization and insights
- **Responsive Design** - Works on desktop and mobile devices
- **Profile Management** - User profile and settings

## 📱 Application Pages

- **Login** - User authentication
- **Dashboard** - Main overview (Admin/Customer views)
- **Active Products** - Product catalog and management
- **Active Users** - User management (Admin only)
- **Analytics** - Charts and statistics
- **Profile** - User profile settings

---

