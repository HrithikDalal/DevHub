# DevHub

> ⚠️ **Not actively maintained.** This is a portfolio/learning project from 2020. It was fully modernized in August 2026 (dependencies current, 0 known vulnerabilities at that time), but it receives no ongoing maintenance or support.

A social network for developers built on the **MERN stack** — developers register, build a profile with their experience, education, and skills, showcase their GitHub repositories, and share posts that others can like and comment on.

![Node](https://img.shields.io/badge/Node-18%2B-339933) ![Express](https://img.shields.io/badge/Express-5-000000) ![React](https://img.shields.io/badge/React-18-61dafb) ![MongoDB](https://img.shields.io/badge/Mongoose-8-47A248) ![Maintenance](https://img.shields.io/badge/maintained-no-red)

## Features

- **JWT authentication** — register/login; passwords hashed with bcrypt; protected routes via an `x-auth-token` middleware
- **Developer profiles** — status, company, skills, bio, social links, with Gravatar avatars
- **Experience & education credentials** — add/remove entries on your profile
- **GitHub showcase** — a profile lists the developer's latest public repos via the GitHub API
- **Posts feed** — create/delete posts, like/unlike, threaded comments
- **Private routing** — client redirects unauthenticated users to login

## Tech stack

| Layer | Choice |
| --- | --- |
| API | Node.js 18+, Express 5 |
| Database | MongoDB via Mongoose 8 |
| Auth | jsonwebtoken 9, bcryptjs, express-validator 7 |
| Client build | Vite 6 |
| Client UI | React 18, React Router 7, Redux Toolkit, dayjs |

## Project structure

```
├── server.js                   # Express app entry (port 5000)
├── config/
│   ├── db.js                   # Mongoose connection
│   └── default.json            # local credentials (gitignored — you create this)
├── middleware/
│   ├── auth.js                 # JWT verification (x-auth-token header)
│   └── checkObjectId.js
├── models/                     # User, Profile, Post
├── routes/api/
│   ├── users.js                # POST register
│   ├── auth.js                 # GET current user, POST login
│   ├── profile.js              # profile CRUD, experience/education, github/:username
│   └── posts.js                # post CRUD, likes, comments
└── client/                     # Vite + React 18 app
    └── src/
        ├── main.jsx            # createRoot bootstrap
        ├── App.jsx             # router shell
        ├── store.js            # Redux Toolkit configureStore
        ├── actions/ reducers/  # auth, profile, post, alert slices (classic pattern)
        ├── utils/              # axios token header, dayjs date formatter
        └── components/         # auth, dashboard, profiles, posts, routing
```

## API overview

| Method | Route | Access | Description |
| --- | --- | --- | --- |
| POST | `/api/users` | public | Register (returns JWT) |
| POST | `/api/auth` | public | Login (returns JWT) |
| GET | `/api/auth` | private | Current user |
| GET | `/api/profile` | public | All profiles |
| GET | `/api/profile/user/:user_id` | public | Profile by user |
| POST | `/api/profile` | private | Create/update own profile |
| PUT | `/api/profile/experience` · `/education` | private | Add credentials |
| DELETE | `/api/profile/experience/:id` · `/education/:id` | private | Remove credentials |
| GET | `/api/profile/github/:username` | public | Latest GitHub repos |
| DELETE | `/api/profile` | private | Delete account & profile |
| GET/POST | `/api/posts` | private | Feed / create post |
| PUT | `/api/posts/like/:id` · `/unlike/:id` | private | Like / unlike |
| POST/DELETE | `/api/posts/comment/:id[/:comment_id]` | private | Comment / remove comment |

## Getting started

1. Install dependencies:

   ```bash
   npm install
   npm install --prefix client
   ```

2. Create `config/default.json` (**gitignored — never commit real credentials**):

   ```json
   {
     "mongoURI": "<your MongoDB connection string>",
     "jwtSecret": "<a long random secret>",
     "githubToken": "<optional GitHub personal access token>"
   }
   ```

3. Run the API (port 5000) and the client (port 3000) together:

   ```bash
   npm run dev
   ```

   The Vite dev server proxies `/api/*` to the Express server.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | API + client concurrently |
| `npm run server` | API only (nodemon) |
| `npm run client` | Client only (Vite) |
| `npm run build --prefix client` | Production client build to `client/dist` |

## History

- **2020** — built as a learning project (Express 4, Mongoose 5, React 16, Create React App, react-router 5, plain redux).
- **2026-08** — modernized: Express 5, Mongoose 8, jsonwebtoken 9; client migrated CRA → Vite, React 16 → 18, React Router 5 → 7, redux/thunk → Redux Toolkit, moment → dayjs. All 261 `npm audit` vulnerabilities eliminated. Verified that no credentials were ever committed to git history.
