# DevHub

A social network for developers, built with the MERN stack — developer profiles, experience/education credentials, GitHub repo listings, posts, and comments.

## Stack

- **Server:** Node.js 18+, Express 5, Mongoose 8, JWT auth
- **Client:** React 18, Vite, React Router 7, Redux Toolkit

## Getting started

1. Install dependencies:

   ```bash
   npm install
   npm install --prefix client
   ```

2. Create `config/default.json` (gitignored — never commit real credentials):

   ```json
   {
     "mongoURI": "<your MongoDB connection string>",
     "jwtSecret": "<a long random secret>",
     "githubToken": "<optional GitHub personal access token>"
   }
   ```

3. Run both the API (port 5000) and the client (port 3000):

   ```bash
   npm run dev
   ```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | API + client concurrently |
| `npm run server` | API only (nodemon) |
| `npm run client` | Client only (Vite) |
| `npm run build --prefix client` | Production client build to `client/dist` |
