# GuruLink

## Project Overview

**GuruLink** is a web-based education platform designed to connect students with teachers and provide a centralized environment for managing learning activities.

The platform allows students to discover teachers, enroll in their courses, access learning materials, complete quizzes and assignments, and monitor their academic progress. Teachers can create and manage their courses, provide educational resources, create assessments, manage enrolled students, and monitor student performance.

This repository currently contains the development of the **GuruLink website demo**.

## Target Users

### Students
Students will be able to:
- Find teachers based on subjects and grades
- View teacher profiles
- Enroll in available courses
- Access learning materials
- Complete quizzes
- Submit assignments
- View marks and feedback
- Track their learning progress

### Teachers
Teachers will be able to:
- Create a teacher profile
- Specify the grades and subjects they teach
- Manage their courses
- Upload lecture and learning materials
- Create quizzes and assignments
- View enrolled students
- Grade student work and provide feedback
- Monitor individual student performance and progress

## Main Website Sections

The GuruLink platform will include:

- Home
- About Us
- Teachers
- Teacher Profiles
- Students
- Contact
- Login
- Registration
- Student Dashboard
- Teacher Dashboard

## Student Dashboard

The student dashboard will provide students with access to their enrolled courses, teachers, learning materials, quizzes, assignments, marks, and progress information.

## Teacher Dashboard

The teacher dashboard will allow teachers to manage courses and learning materials, create quizzes and assignments, manage enrolled students, review submissions, and monitor student performance.

## Project Goal

The goal of GuruLink is to provide a simple and organized digital environment where teachers can manage their educational activities and students can easily access learning resources and monitor their academic progress.

## Demo Development Status

🚧 **Currently in Development**

### Development Progress

- [x] Initial project planning
- [x] Feature and requirement identification
- [x] Project setup
- [x] Public website development
- [ ] Student dashboard development
- [ ] Teacher dashboard development
- [ ] Authentication and registration
- [x] Responsive design
- [x] Testing
- [ ] Final demo

## UI Design Direction

The GuruLink website will follow a clean, modern, and simple design using the supplied **purple, white, lavender and coral reference design**. The interface will focus on usability and avoid unnecessary content or overly complex visual elements.

The website will also be responsive so that it can be used across desktop, tablet, and mobile devices.

## Current Version

**Version:** Phase 1 Frontend  
**Status:** Phase 1 ready for review

## Phase 1 frontend

The seven public routes are implemented using Next.js App Router, React, TypeScript, Tailwind CSS v4 and Lucide icons:

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About Us |
| `/teachers` | Searchable teacher directory and mock profile previews |
| `/students` | Student learning features |
| `/contact` | Contact form and FAQ accordions |
| `/login` | Login layout |
| `/register` | Student and Teacher registration forms |

### Run locally

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Open http://localhost:3000. On Windows PowerShell, use `npm.cmd` if the execution policy blocks `npm.ps1`.

### Validation

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

Browser checks run against the running app:

```sh
npm run test:ui
```

Browser checks use installed Google Chrome by default. Set `PLAYWRIGHT_CHANNEL` to `msedge` to use Edge, or install Playwright Chromium and set it to `chromium`. `BASE_URL` can point the browser checks at a different host. Screenshots are saved under `test-results/screenshots/` for desktop, tablet and mobile. Tests cover routes, image loading, horizontal overflow, navigation, search/filtering, profile dialogs, FAQ, contact forms, login controls and both registration forms.

### Structure and design

- `src/app/`: routes and global reference-matched styles; `(public)` shares the header and footer.
- `src/components/`: reusable UI, forms and interactive components.
- `src/lib/data.ts`: six realistic mock teacher profiles.
- `public/design/`: original reference sheets, preserved unchanged.
- `public/images/`: extracted reference illustrations, teacher portraits and icons.

The main UI reference controls composition and colors; the asset reference supplies the actual illustrations and portraits. Desktop uses the supplied grid layouts; tablet and mobile stack content and provide a collapsible navigation menu. Photos are supplied mock portraits, not verified real teachers.

This phase is frontend only. Forms validate locally and display preview feedback. No form data is transmitted or persisted, no accounts are created, and there are no APIs, databases, authentication services or dashboards. Support policies and social icons are placeholders until launch.

### Verified Phase 1 results

- ESLint: passed without warnings or errors.
- TypeScript: passed.
- Production build: passed; all seven routes prerender successfully.
- Browser validation: all seven pages at 1440px, 768px and 390px; images loaded and no horizontal overflow.
- Interactive checks: desktop and mobile navigation, combined teacher filters, empty results, profile dialog, FAQ accordion, contact feedback, password visibility, login preview controls, password confirmation, Student registration and Teacher registration.
- No browser JavaScript errors. Twenty-two screenshots are available in `test-results/screenshots/` (ignored by Git).
- Reference images were reviewed before implementation and desktop/mobile captures inspected after refinement.

The extracted assets retain the supplied sheet's resolution; original standalone assets can replace these files for sharper large-screen imagery. The dependency audit reports five development-tool advisories through the ESLint `braces` dependency chain, with no runtime package advisories reported; the suggested automatic fix downgrades the Next.js lint configuration across major versions, so it was not applied.
