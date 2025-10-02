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

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-amazing-feature
   ```

4. **Make your changes**
   - Write clean, documented code
   - Follow PSR-12 coding standards
   - Add tests for new features
   - Update documentation as needed

5. **Commit your changes**
   ```bash
   git commit -am 'Add some amazing feature'
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-amazing-feature
   ```

7. **Create a Pull Request**
   - Go to the original repository
   - Click 'New Pull Request'
   - Select your branch
   - Describe your changes

### Contribution Guidelines

- Follow Laravel best practices and conventions
- Write meaningful commit messages
- Include tests for bug fixes and new features
- Update documentation for API changes
- Ensure all tests pass before submitting PR
- Keep pull requests focused on a single feature/fix

---

## 📝 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for full details.

### MIT License Summary

```
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software...
```

---

## 👤 Author

**abdoElHodaky**
- GitHub: [@abdoElHodaky](https://github.com/abdoElHodaky)
- Repository: [larvhrms](https://github.com/abdoElHodaky/larvhrms)

---

## 🙏 Acknowledgments

Special thanks to:

- **Laravel Community** - For the amazing framework and ecosystem
- **Bootstrap Team** - For the responsive UI framework
- **Chart.js Developers** - For powerful data visualization tools
- **Contributors** - Everyone who has contributed to this project
- **Omar7tech** - Original HRMS project inspiration

---

## 📞 Support & Contact

### Need Help?

- 📧 **Issues**: [GitHub Issues](https://github.com/abdoElHodaky/larvhrms/issues)
- 📚 **Documentation**: Laravel [Official Docs](https://laravel.com/docs)
- 💬 **Community**: Laravel [Forums](https://laravel.io/forum)

### Reporting Bugs

When reporting bugs, please include:
- Laravel version
- PHP version
- Database version
- Steps to reproduce
- Expected vs actual behavior
- Error messages and logs

---

## 🗺️ Roadmap

### Upcoming Features

- [ ] Real-time notifications with WebSockets
- [ ] Advanced reporting with custom filters
- [ ] Mobile application (React Native)
- [ ] Integration with third-party HR tools
- [ ] AI-powered resume parsing
- [ ] Automated onboarding workflows
- [ ] Performance review module
- [ ] Training and development tracking
- [ ] Payroll integration
- [ ] Multi-language support

---

<div align="center">

### ⭐ Star this repository if you find it useful!

**Made with ❤️ for HR professionals and developers**

---

**[Live Demo](https://larvhrms.fly.dev)** • **[Report Bug](https://github.com/abdoElHodaky/larvhrms/issues)** • **[Request Feature](https://github.com/abdoElHodaky/larvhrms/issues)**

</div>

---

## 📝 One-Line Comprehensive Summary

**A feature-rich Laravel-based Human Resource Management System (HRMS) providing multi-role authentication (Admin/Moderator), comprehensive employee lifecycle management (CRUD operations, CV uploads, scheduling), position and vacation management, interview scheduling, real-time analytics with Chart.js visualizations, and a responsive Bootstrap UI with AJAX-powered interactions, all backed by MySQL/MariaDB with Eloquent ORM for enterprise-grade HR operations and data-driven decision making.**