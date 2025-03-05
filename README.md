# Project Setup Guide

## Running the client

- `cd client`
- `pnpm i`
- `npm run dev`

## Running the server

- `cd server`
- `pnpm i`
- `npm run seed`
- `npm run dev`

## Quick start with Docker

- `docker compose up -d`

## Testing after database has been seeded

Make sure to run seed command `npm run seed` at least once. Also ensure the server is running `npm run dev`

### Available test accounts

- Admin account: `admin@example.com` with password `Admin123!` - returns admin privileges and sample data
- User account: `user@example.com` with password `User123!` - returns basic user info only

#### Login as Admin:

```bash
curl -X GET http://localhost:8080/api/auth/login \
-H "Content-Type: application/json" \
-d '{"email":"admin@example.com","password":"Admin123!"}'
```

#### Get user info

```bash
curl -X GET http://localhost:8080/api/auth/userInfo \
-H "Authorization: Bearer $PASTE_TOKEN"
```
