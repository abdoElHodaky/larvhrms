# 👥 HRMS - Human Resource Management System

> A comprehensive Laravel-based Human Resource Management System designed to streamline employee management, scheduling, interviews, and organizational analytics with multi-role authentication and powerful visualization tools.

[![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)](https://laravel.com/)
[![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)](https://www.php.net/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

## 🌟 Live Demo

Experience the system live: **[HRMS Demo](https://larvhrms.fly.dev)**

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Technology Stack](#️-technology-stack)
- [System Architecture](#️-system-architecture)
- [Getting Started](#-getting-started)
- [User Roles & Permissions](#-user-roles--permissions)
- [Database Schema](#️-database-schema)
- [API Endpoints](#-api-endpoints)
- [Frontend Technologies](#-frontend-technologies)
- [Security Best Practices](#-security-best-practices)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

**HRMS** (Human Resource Management System) is a robust, enterprise-ready Laravel application built to handle comprehensive HR operations for organizations of any size. From employee onboarding to performance analytics, interview scheduling to vacation management, this system provides an all-in-one solution for modern HR departments.

### Why HRMS?

- **🚀 Production-Ready**: Built on Laravel's solid foundation with industry best practices
- **📊 Data-Driven**: Rich analytics and visualizations for informed decision-making
- **🔐 Role-Based Access**: Granular permissions for admins and moderators
- **⚡ Modern Stack**: Leverages the latest web technologies for optimal performance
- **📱 Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices

---

## ✨ Key Features

### 🔒 Multi-Role Authentication
- **Admin Role**: Full system access with comprehensive management capabilities
- **Moderator Role**: Account management and profile administration
- Secure login/logout with Laravel Sanctum or Passport
- Password reset and email verification

### 👔 Employee Management
- Complete CRUD operations for employee records
- CV upload and document management
- Employee profile images and media handling
- Position assignment and tracking
- Employment history and status management

### 📅 Schedule Management
- Working schedule creation and assignment
- Interview scheduling with automated notifications
- Vacation request and approval system
- Conflict detection and calendar synchronization
- Shift rotation and overtime tracking

### 💼 Position Management
- Job position CRUD operations
- Position hierarchies and organizational charts
- Salary range and benefits configuration
- Assignment tracking and position history

### 📈 Statistics & Analytics
- Real-time performance metrics dashboard
- Employee attendance and productivity reports
- Interactive Charts.js visualizations
- Customizable KPI tracking
- Export capabilities for reports (PDF, Excel)

### 🎭 Interview Management
- Interview scheduling with candidate tracking
- Automated email notifications
- Interview feedback and scoring system
- Candidate pipeline visualization

### 🏖️ Vacation Management
- Vacation request submission
- Approval workflow with multi-level authorization
- Leave balance tracking
- Calendar integration for team visibility

### 👤 User Management
- Admin account activation/deactivation by moderators
- Profile management and customization
- Activity logs and audit trails
- Password policies and security settings

---

## 🛠️ Technology Stack

### Backend
| Technology | Purpose | Version |
|------------|---------|---------|
| **Laravel** | PHP Framework | 10.x+ |
| **PHP** | Server-side language | 8.1+ |
| **MySQL/MariaDB** | Database | 8.0+/10.x+ |
| **Eloquent ORM** | Database abstraction | Built-in |
| **Laravel Sanctum/Passport** | API authentication | Latest |

### Frontend
| Technology | Purpose |
|------------|---------|
| **Blade Templates** | Server-side templating |
| **Bootstrap 5** | CSS framework |
| **jQuery** | DOM manipulation |
| **AJAX** | Asynchronous requests |
| **Chart.js** | Data visualization |
| **JavaScript ES6+** | Client-side logic |

### Development Tools
- **Composer** - PHP dependency management
- **NPM/Yarn** - JavaScript package management
- **Laravel Mix/Vite** - Asset compilation
- **Git** - Version control

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────┐
│           Client Layer                   │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐ │
│  │  Admin  │  │Moderator│  │Employee │ │
│  │Dashboard│  │ Portal  │  │ Portal  │ │
│  └────┬────┘  └────┬────┘  └────┬────┘ │
└───────┼───────────┼─────────────┼───────┘
        │           │             │
        └───────────┴─────────────┘
                    │
        ┌───────────▼────────────┐
        │   HTTP/AJAX Requests   │
        └───────────┬────────────┘
                    │
┌───────────────────▼───────────────────────┐
│         Laravel Application               │
│  ┌─────────────────────────────────────┐ │
│  │          Routes Layer               │ │
│  │    (web.php / api.php)              │ │
│  └──────────────┬──────────────────────┘ │
│                 │                         │
│  ┌──────────────▼──────────────────────┐ │
│  │       Middleware Layer              │ │
│  │  (Auth, CORS, Validation)           │ │
│  └──────────────┬──────────────────────┘ │
│                 │                         │
│  ┌──────────────▼──────────────────────┐ │
│  │       Controller Layer              │ │
│  │  (Business Logic Handlers)          │ │
│  └──────────────┬──────────────────────┘ │
│                 │                         │
│  ┌──────────────▼──────────────────────┐ │
│  │         Model Layer                 │ │
│  │    (Eloquent ORM Models)            │ │
│  └──────────────┬──────────────────────┘ │
└─────────────────┼─────────────────────────┘
                  │
        ┌─────────▼──────────┐
        │   MySQL Database   │
        │                    │
        │  ┌──────────────┐  │
        │  │   employees  │  │
        │  │   positions  │  │
        │  │   schedules  │  │
        │  │  interviews  │  │
        │  │   vacations  │  │
        │  │     users    │  │
        │  └──────────────┘  │
        └────────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **PHP** >= 8.1
- **Composer** >= 2.0
- **Node.js** >= 16.x and NPM
- **MySQL** >= 8.0 or **MariaDB** >= 10.x
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abdoElHodaky/larvhrms.git
   cd larvhrms
   ```

2. **Install PHP dependencies**
   ```bash
   composer install
   ```

3. **Install JavaScript dependencies**
   ```bash
   npm install
   ```

4. **Setup environment configuration**
   ```bash
   cp .env.example .env
   ```

5. **Generate application key**
   ```bash
   php artisan key:generate
   ```

6. **Configure your database**
   
   Edit `.env` file with your database credentials:
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=hrms_db
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   ```

7. **Run database migrations**
   ```bash
   php artisan migrate
   ```

8. **Seed the database (optional)**
   ```bash
   php artisan db:seed
   ```

9. **Compile frontend assets**
   ```bash
   npm run dev
   ```

10. **Start the development server**
    ```bash
    php artisan serve
    ```

11. **Access the application**
    
    Open your browser and navigate to: `http://localhost:8000`

---

## 👥 User Roles & Permissions

### 🔴 Admin Role

**Capabilities:**
- ✅ Full CRUD operations on all entities
- ✅ Employee management (create, read, update, delete)
- ✅ Trainee onboarding and management
- ✅ Schedule creation and assignment
- ✅ Position management and hierarchy
- ✅ Interview scheduling and tracking
- ✅ Vacation approval and management
- ✅ Access to comprehensive analytics dashboard
- ✅ Performance metrics and visualizations
- ✅ System configuration and settings
- ✅ Report generation and export

### 🟡 Moderator Role

**Capabilities:**
- ✅ Admin account activation/deactivation
- ✅ User profile management
- ✅ View-only access to reports
- ✅ Limited employee information access
- ⛔ Cannot delete critical records
- ⛔ Cannot modify system settings

---

## 🗄️ Database Schema

### Core Tables & Relationships

#### 📊 **employees**
Manages employee data and records
- **Fields**: id, name, email, phone, address, cv_path, image_path, hire_date, status
- **Relationships**: 
  - `belongsTo` positions (position_id)
  - `belongsTo` schedules (schedule_id)
  - `hasMany` vacations

#### 💼 **positions**
Manages job positions within the organization
- **Fields**: id, title, description, salary_min, salary_max, department
- **Relationships**:
  - `hasMany` employees

#### 📅 **schedules**
Manages work schedules and shifts
- **Fields**: id, name, start_time, end_time, days, shift_type
- **Relationships**:
  - `hasMany` employees

#### 🎯 **interviews**
Manages interview scheduling and tracking
- **Fields**: id, candidate_name, position, interview_date, interviewer_id, status, notes
- **Relationships**:
  - `belongsTo` users (interviewer_id)

#### 🏖️ **vacations**
Manages employee vacation requests
- **Fields**: id, employee_id, start_date, end_date, reason, status, approved_by
- **Relationships**:
  - `belongsTo` employees

#### 👤 **users**
Stores user authentication and role information
- **Fields**: id, name, email, password, role, is_active, email_verified_at
- **Relationships**:
  - `hasMany` interviews (as interviewer)

### Database Relationships Diagram

```
┌──────────────┐
│    users     │
│              │
│  - id        │
│  - name      │
│  - email     │
│  - password  │
│  - role      │
└──────┬───────┘
       │
       │ interviewer_id (interviews)
       │
       ▼
┌──────────────┐         ┌──────────────┐
│ interviews   │         │  positions   │
│              │         │              │
│  - id        │         │  - id        │
│  - date      │         │  - title     │
│  - status    │◄────────┤  - salary    │
└──────────────┘         └──────┬───────┘
                                │
                                │ position_id
                                │
                         ┌──────▼───────┐
                         │  employees   │
                         │              │
                         │  - id        │
                         │  - name      │
                         │  - cv_path   │
                         │  - image     │
                         └──────┬───────┘
                                │
                                ├─────────┬─────────┐
                                │         │         │
                       employee_id        │    schedule_id
                                │         │         │
                         ┌──────▼───────┐ │  ┌──────▼───────┐
                         │  vacations   │ │  │  schedules   │
                         │              │ │  │              │
                         │  - id        │ │  │  - id        │
                         │  - start     │ │  │  - name      │
                         │  - end       │ │  │  - times     │
                         │  - status    │ │  └──────────────┘
                         └──────────────┘ │
                                          │
                                          └──────────────┐
                                                         │
                                                  many employees
                                                  use same schedule
```

---

## 🔌 API Endpoints

### Authentication
```http
POST   /api/login              # User login
POST   /api/logout             # User logout
POST   /api/register           # New user registration
POST   /api/password/reset     # Password reset request
```

### Employee Management
```http
GET    /api/employees          # List all employees
POST   /api/employees          # Create new employee
GET    /api/employees/{id}     # Get employee details
PUT    /api/employees/{id}     # Update employee
DELETE /api/employees/{id}     # Delete employee
POST   /api/employees/{id}/cv  # Upload employee CV
```

### Position Management
```http
GET    /api/positions          # List all positions
POST   /api/positions          # Create new position
GET    /api/positions/{id}     # Get position details
PUT    /api/positions/{id}     # Update position
DELETE /api/positions/{id}     # Delete position
```

### Schedule Management
```http
GET    /api/schedules          # List all schedules
POST   /api/schedules          # Create new schedule
GET    /api/schedules/{id}     # Get schedule details
PUT    /api/schedules/{id}     # Update schedule
DELETE /api/schedules/{id}     # Delete schedule
```

### Interview Management
```http
GET    /api/interviews         # List all interviews
POST   /api/interviews         # Schedule new interview
GET    /api/interviews/{id}    # Get interview details
PUT    /api/interviews/{id}    # Update interview
DELETE /api/interviews/{id}    # Cancel interview
```

### Vacation Management
```http
GET    /api/vacations          # List all vacations
POST   /api/vacations          # Request vacation
GET    /api/vacations/{id}     # Get vacation details
PUT    /api/vacations/{id}     # Update vacation request
POST   /api/vacations/{id}/approve   # Approve vacation
POST   /api/vacations/{id}/reject    # Reject vacation
```

### Analytics & Reports
```http
GET    /api/analytics/dashboard       # Dashboard statistics
GET    /api/analytics/employees       # Employee analytics
GET    /api/analytics/attendance      # Attendance reports
GET    /api/reports/export/{type}     # Export reports
```

---

## 🎨 Frontend Technologies

### UI Framework & Styling
- **Bootstrap 5**: Responsive grid system and component library
- **Custom CSS**: Tailored styling for specific components
- **Responsive Design**: Mobile-first approach with breakpoints

### JavaScript & Interactions
- **Vanilla JavaScript ES6+**: Modern syntax and features
- **jQuery**: DOM manipulation and AJAX operations
- **AJAX**: Asynchronous data fetching without page reloads

### Templating & Views
- **Blade Templates**: Laravel's powerful templating engine
  - Component-based architecture
  - Template inheritance and sections
  - Conditional rendering and loops

### Data Visualization
- **Chart.js**: Interactive charts and graphs
  - Line charts for trends
  - Bar charts for comparisons
  - Pie charts for distributions
  - Real-time data updates

### Additional Features
- **HTML5**: Semantic markup
- **Form Validation**: Client-side and server-side validation
- **File Uploads**: Drag-and-drop support
- **Notifications**: Toast messages and alerts
- **Modal Dialogs**: Bootstrap modals for user interactions

---

## 🔐 Security Best Practices

### Implemented Security Measures

✅ **Environment Configuration**
- Sensitive data stored in `.env` file
- Environment variables never committed to repository
- Different configurations for development/production

✅ **Laravel Built-in Protection**
- CSRF (Cross-Site Request Forgery) protection on all forms
- SQL Injection prevention via Eloquent ORM
- XSS (Cross-Site Scripting) protection through Blade templating
- Password hashing using bcrypt
- Rate limiting on API endpoints

✅ **Input Validation & Sanitization**
- Server-side validation using Laravel's validator
- Request validation classes for complex rules
- Data sanitization before database storage
- File upload validation and type checking

✅ **Authentication & Authorization**
- Secure session management
- Role-based access control (RBAC)
- Middleware for route protection
- Password strength requirements
- Account lockout after failed attempts

### Recommendations

⚠️ **Regular Security Maintenance**
- Keep Laravel and all dependencies up to date
- Run `composer update` regularly
- Monitor security advisories
- Implement automated dependency scanning

⚠️ **Production Deployment**
- Use HTTPS/SSL certificates
- Configure proper file permissions
- Disable debug mode in production
- Implement proper backup strategies
- Use environment-specific configurations

---

## 🔧 Development Workflow

### Available Artisan Commands

```bash
# Database
php artisan migrate                    # Run migrations
php artisan migrate:rollback           # Rollback last migration
php artisan migrate:fresh --seed       # Fresh migration with seeders
php artisan db:seed                    # Run database seeders

# Cache Management
php artisan cache:clear                # Clear application cache
php artisan config:clear               # Clear configuration cache
php artisan route:clear                # Clear route cache
php artisan view:clear                 # Clear compiled views

# Development
php artisan serve                      # Start development server
php artisan tinker                     # Interactive shell
php artisan make:controller <name>     # Create controller
php artisan make:model <name>          # Create model
php artisan make:migration <name>      # Create migration

# Testing
php artisan test                       # Run test suite
php artisan test --coverage            # Run tests with coverage
```

### NPM Scripts

```bash
npm run dev                # Compile assets for development
npm run watch              # Watch and recompile on changes
npm run prod               # Compile and minify for production
npm run lint               # Lint JavaScript files
```

---

## 📊 Project Structure

```
larvhrms/
├── app/
│   ├── Http/
│   │   ├── Controllers/      # Application controllers
│   │   ├── Middleware/       # Custom middleware
│   │   └── Requests/         # Form request validators
│   ├── Models/               # Eloquent models
│   ├── Providers/            # Service providers
│   └── Services/             # Business logic services
├── config/                   # Configuration files
├── database/
│   ├── migrations/           # Database migrations
│   ├── seeders/              # Database seeders
│   └── factories/            # Model factories
├── public/
│   ├── css/                  # Compiled CSS
│   ├── js/                   # Compiled JavaScript
│   └── images/               # Public images
├── resources/
│   ├── views/                # Blade templates
│   ├── js/                   # Source JavaScript
│   └── css/                  # Source CSS/SCSS
├── routes/
│   ├── web.php               # Web routes
│   ├── api.php               # API routes
│   └── channels.php          # Broadcast channels
├── storage/                  # File storage
├── tests/                    # Automated tests
├── .env.example              # Environment template
├── composer.json             # PHP dependencies
└── package.json              # NPM dependencies
```

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### How to Contribute

1. **Fork the repository**
   ```bash
   # Click the 'Fork' button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/your-username/larvhrms.git
   cd larvhrms
   ```

3. **Create a featu<img src="https://github.com/Omar7tech/screenshots/blob/main/Homescreenshot.PNG" alt="Screenshot 2" width="400">



## Installation

### Prerequisites

- ![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=white) PHP >= 7.4
- ![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=flat&logo=laravel&logoColor=white) Laravel >= 8.x
- ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white) MySQL
- ![Composer](https://img.shields.io/badge/Composer-885630?style=flat&logo=composer&logoColor=white) Composer
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node-dot-js&logoColor=white) Node.js

### Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/Omar7tech/hrms.git
    cd hrms
    ```
2. Install dependencies:
    ```sh
    composer install
    npm install
    npm run dev
    ```
3. Setup environment variables:
    ```sh
    cp .env.example .env
    php artisan key:generate
    ```
4. Migrate the database:
    ```sh
    php artisan migrate
    ```

## Admin Dashboard

Admins can manage employees, trainees, schedules, positions, interviews, and vacations. They have access to detailed statistics and performance metrics.

## Moderator Dashboard

Moderators can activate or deactivate admin accounts and manage their own profiles.

## Database Schema

Key tables and their relationships:

- `employees`: Manages employee data, references positions and schedules
- `interviews`: Manages interview schedules, references users
- `positions`: Manages job positions
- `schedules`: Manages work schedules
- `users`: Stores user data with roles and permissions
- `vacations`: Manages employee vacations, references employees

## API Endpoints

### Authentication

- `POST /api/login`
- `POST /api/logout`

### Employees

- `GET /api/employees`
- `POST /api/employees`
- `PUT /api/employees/{id}`
- `DELETE /api/employees/{id}`

### Positions

- `GET /api/positions`
- `POST /api/positions`
- `PUT /api/positions/{id}`
- `DELETE /api/positions/{id}`


## Frontend

- ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=flat&logo=bootstrap&logoColor=white) Uses Bootstrap for responsive design
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) CSS for styling
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) JavaScript for dynamic functionality
- ![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white) jQuery for AJAX requests
- ![AJAX](https://img.shields.io/badge/AJAX-0769AD?style=flat&logo=ajax&logoColor=white) AJAX for asynchronous operations
- ![Blade](https://img.shields.io/badge/Blade-FF2D20?style=flat&logo=laravel&logoColor=white) Blade templates for dynamic views
- ![Chart.js](https://img.shields.io/badge/Chart.js-F37826?style=flat&logo=chart-dot-js&logoColor=white) Charts.js for data visualizations
- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) HTML for markup


## Security

- Ensure correct configuration of environment variables.
- Regularly update dependencies to address security vulnerabilities.
- Use Laravel's validation and sanitation mechanisms.

## Contribution

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


## Live Demo

Check out the live demo: [HRMS Live Demo](https://larvhrms.fly.dev)





<hr/>
<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[WebReinvent](https://webreinvent.com/)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Jump24](https://jump24.co.uk)**
- **[Redberry](https://redberry.international/laravel/)**
- **[Active Logic](https://activelogic.com)**
- **[byte5](https://byte5.de)**
- **[OP.GG](https://op.gg)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
