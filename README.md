# GuruLink

## Project Overview

**GuruLink** is a web-based education platform being developed to connect students with teachers and provide a central place for learning activities.

Students will be able to discover teachers, enroll in courses, access learning materials, complete quizzes and assignments, join live online classes, and monitor their progress. Teachers will be able to manage courses and enrolled students, publish learning resources and assessments, conduct live classes, and review student performance.

This repository contains the ongoing development of the **GuruLink website demo**. The current work focuses on the frontend; the features described below are not all functional yet.

## Target Users

### Students

Planned capabilities include:

- Find teachers by subject and grade and view their profiles
- Enroll in courses and access learning materials
- Take quizzes, submit assignments, and view marks and feedback
- Join live online classes
- Track progress for each enrolled course

### Teachers

Planned capabilities include:

- Specify teaching subjects and grades
- Create and manage courses and enrolled students
- Upload learning materials and publish quizzes and assignments
- Review submissions, marks, and quiz performance
- Schedule and conduct live online classes
- Monitor individual and overall student progress

## Development Progress

GuruLink is organized into three main phases.

### Phase 1 — Public Website

The initial frontend pages have been created:

| Page | Status |
| --- | --- |
| Home | Frontend implemented |
| About Us | Frontend implemented |
| Teachers | Frontend implemented |
| Students | Frontend implemented |
| Contact | Frontend implemented |
| Login | Frontend implemented (UI only) |
| Register | Frontend implemented (UI only) |

**Current status:** The first version of the public website is in place. Visual refinements, responsive checks, functional testing, authentication, and backend integration remain to be completed or verified.

### Phase 2 — Student Dashboard

**Status:** Planned — not yet implemented.

Planned areas: dashboard overview, teacher discovery and enrollment, enrolled courses, materials, quizzes, assignments, live classes, and progress tracking.

### Phase 3 — Teacher Dashboard

**Status:** Planned — not yet implemented.

Planned areas: dashboard overview, course and student management, material uploads, quizzes, assignments, live class scheduling, and performance analytics.

## Recent Development Work

### Public Pages and Layouts

- Created the Home, About Us, Teachers, Students, and Contact page interfaces
- Created the Login and Register page interfaces
- Added shared application/public layouts, global styling, and a custom not-found page

### Reusable Frontend Components

Added reusable components under `src/components/`:

- `auth-shell.tsx`
- `contact-content.tsx`
- `footer.tsx`
- `header.tsx`
- `login-form.tsx`
- `password-field.tsx`
- `register-form.tsx`
- `teacher-card.tsx`
- `teacher-directory.tsx`
- `ui.tsx`

### Data and Configuration

- Added `src/lib/data.ts` for frontend data
- Added Next.js, TypeScript, ESLint, PostCSS, and dependency configuration files
- Added `.gitignore` for Git exclusions

### Initial Tests

- Added `tests/phase1.mjs` as an initial frontend test file
- Test execution and results have not yet been confirmed in this README

## Technology Stack

**Frontend**
- Next.js
- React
- TypeScript
- Tailwind CSS

**Planned backend**
- Node.js
- Express.js
- TypeScript

**Planned database**
- MongoDB

## Current Project Structure

```text
GuruLink/
├── public/
├── src/
│   ├── app/
│   │   ├── (public)/
│   │   │   ├── about/page.tsx
│   │   │   ├── contact/page.tsx
│   │   │   ├── students/page.tsx
│   │   │   ├── teachers/page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── auth-shell.tsx
│   │   ├── contact-content.tsx
│   │   ├── footer.tsx
│   │   ├── header.tsx
│   │   ├── login-form.tsx
│   │   ├── password-field.tsx
│   │   ├── register-form.tsx
│   │   ├── teacher-card.tsx
│   │   ├── teacher-directory.tsx
│   │   └── ui.tsx
│   └── lib/data.ts
├── tests/phase1.mjs
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Development Approach

GuruLink is being built incrementally, with pages and related components added in separate Git commits. The planned order is:

1. **Public Website:** Build the public pages, shared navigation, and authentication interfaces.
2. **Student Dashboard:** Build student-facing learning and progress interfaces.
3. **Teacher Dashboard:** Build teacher-facing course management and analytics interfaces.

Backend services, database integration, functional testing, and deployment will be carried out as development progresses.

## Next Steps

- Review and refine Phase 1 styling and responsiveness
- Verify navigation, forms, and frontend tests
- Run a production build and fix any issues
- Begin Phase 2: Student Dashboard
- Continue with Phase 3: Teacher Dashboard
- Integrate authentication, backend APIs, and MongoDB

> **Project status:** Work in progress. The current public pages are frontend implementations; full platform functionality is planned for later stages.
