# GuruLink

## Project Overview

**GuruLink** is a web-based education platform designed to connect students with teachers and provide a centralized environment for managing learning activities.

The platform is being developed to allow students to discover teachers, enroll in courses, access learning materials, participate in quizzes and assignments, attend online classes, and monitor their academic progress.

Teachers will be able to manage their courses, upload learning materials, create quizzes and assignments, conduct online classes, manage enrolled students, and monitor student performance.

This repository contains the ongoing development of the **GuruLink website demo**.

---

## Target Users

### Students

Students will be able to:

- Find teachers based on subjects and grades
- View teacher profiles
- Enroll in available courses
- Access learning materials
- Complete quizzes
- Submit assignments
- Attend online classes
- View marks and feedback
- Track their learning progress

### Teachers

Teachers will be able to:

- Create and manage courses
- Specify the subjects and grades they teach
- Manage enrolled students
- Upload learning materials
- Create quizzes
- Create assignments
- Conduct online classes
- View quiz and assignment completion
- Monitor individual student performance
- Track overall student progress

---

## Development Progress

GuruLink is currently under active development.

The development process is divided into three main phases.

### Phase 1 — Public Website

| Page | Status |
|---|---|
| Home | ✅ Frontend Implemented |
| About Us | ✅ Frontend Implemented |
| Teachers | ✅ Frontend Implemented |
| Students | ✅ Frontend Implemented |
| Contact | ✅ Frontend Implemented |
| Login | ✅ Frontend Implemented |
| Register | ✅ Frontend Implemented |

**Status:** Initial public website pages implemented. Further UI improvements, testing, and backend integration are pending.

### Phase 2 — Student Dashboard

🚧 Planned / Not yet implemented

Planned features:

- Student dashboard overview
- Teacher discovery and enrollment
- Enrolled courses
- Learning materials
- Quizzes and results
- Assignment submissions
- Live online classes
- Academic progress tracking

### Phase 3 — Teacher Dashboard

🚧 Planned / Not yet implemented

Planned features:

- Teacher dashboard overview
- Course management
- Enrolled student management
- Learning material uploads
- Quiz creation and evaluation
- Assignment creation and grading
- Live class scheduling and conducting
- Student performance analytics

---

## Recently Added

### Home Page

Implemented the public Home page as the main entry point to the GuruLink platform.

### About Us Page

Implemented the About Us page to introduce GuruLink and explain the purpose of the platform.

### Teachers Page

Implemented the public Teachers page to present available teachers and support teacher discovery through the frontend interface.

### Students Page

Implemented the public Students page to present the learning features and services available to students.

### Contact Page

Implemented the Contact page with contact information and a user-facing contact interface.

### Login Page

Implemented the frontend Login page with the necessary user interface for account access.

### Registration Page

Implemented the frontend Registration page for students and teachers.

### Application Layout and Styling

Added the public website layout, application layout, global styling, and a custom not-found page.

Authentication, form processing, and other backend functionality will be integrated in later development stages.

---

## Planned Main Features

- Teacher discovery and filtering
- Student enrollment
- Student and teacher authentication
- Course management
- Learning material management
- Quizzes and assessments
- Assignment submission and grading
- Student progress tracking
- Teacher performance monitoring
- Online live classes
- Student and teacher dashboards

---

## Technology Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Planned Backend

- Node.js
- Express.js
- TypeScript

### Planned Database

- MongoDB

---

## Current Project Structure

```text
GuruLink/
├── public/
├── src/
│   ├── app/
│   │   ├── (public)/
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   ├── students/
│   │   │   │   └── page.tsx
│   │   │   ├── teachers/
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── not-found.tsx
│   ├── components/
│   └── lib/
│       └── data.ts
├── package.json
└── README.md
```

---

## Development Approach

GuruLink is being developed incrementally, with individual pages and related components implemented and committed progressively.

The project follows three main development phases:

1. **Public Website:** Design and implement the public-facing pages, navigation, and authentication interfaces.
2. **Student Dashboard:** Develop student-facing course enrollment, learning activities, live classes, and progress tracking.
3. **Teacher Dashboard:** Develop teacher-facing course management, learning resources, assessments, live classes, and analytics.

Backend development, database integration, testing, and deployment will follow as the platform progresses.

---

## Current Project Status

**Current Stage:** Frontend Development — Phase 1

The initial frontend pages for Phase 1 have been created.

**Next Steps:**

- Review and refine the public website UI
- Commit remaining shared components and project configuration files
- Verify navigation and responsive layouts
- Begin developing the student dashboard
- Continue with the teacher dashboard
- Implement backend services and database integration

**GuruLink is currently a work in progress.**
